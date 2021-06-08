package io.odpf.firehose.sink.objectstorage;

import com.gojek.de.stencil.client.StencilClient;
import com.gojek.de.stencil.parser.ProtoParser;
import com.google.protobuf.Descriptors;
import io.odpf.firehose.config.ObjectStorageSinkConfig;
import io.odpf.firehose.metrics.Instrumentation;
import io.odpf.firehose.metrics.StatsDReporter;
import io.odpf.firehose.sink.Sink;
import io.odpf.firehose.sink.SinkFactory;
import io.odpf.firehose.sink.objectstorage.message.KafkaMetadataUtils;
import io.odpf.firehose.sink.objectstorage.message.MessageSerializer;
import io.odpf.firehose.sink.objectstorage.proto.KafkaMetadataProto;
import io.odpf.firehose.sink.objectstorage.proto.KafkaMetadataProtoFile;
import io.odpf.firehose.sink.objectstorage.proto.NestedKafkaMetadataProto;
import io.odpf.firehose.sink.objectstorage.writer.WriterOrchestrator;
import io.odpf.firehose.sink.objectstorage.writer.local.LocalFileWriterWrapper;
import io.odpf.firehose.sink.objectstorage.writer.local.TimePartitionPath;
import io.odpf.firehose.sink.objectstorage.writer.local.policy.SizeBasedRotatingPolicy;
import io.odpf.firehose.sink.objectstorage.writer.local.policy.TimeBasedRotatingPolicy;
import io.odpf.firehose.sink.objectstorage.writer.local.policy.WriterPolicy;
import org.aeonbits.owner.ConfigFactory;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ObjectStorageSinkFactory implements SinkFactory {
    @Override
    public Sink create(Map<String, String> configuration, StatsDReporter statsDReporter, StencilClient stencilClient) {
        ObjectStorageSinkConfig sinkConfig = ConfigFactory.create(ObjectStorageSinkConfig.class, configuration);

        Instrumentation instrumentation = new Instrumentation(statsDReporter, ObjectStorageSinkFactory.class);

        Descriptors.Descriptor messageDescriptor = stencilClient.get(sinkConfig.getInputSchemaProtoClass());

        Descriptors.FileDescriptor fileDescriptor = KafkaMetadataProtoFile.createFileDescriptor(sinkConfig.getKafkaMetadataColumnName());
        Descriptors.Descriptor metadataMessageDescriptor;
        if (sinkConfig.getKafkaMetadataColumnName().isEmpty()) {
            metadataMessageDescriptor = fileDescriptor.findMessageTypeByName(KafkaMetadataProto.getTypeName());
        } else {
            metadataMessageDescriptor = fileDescriptor.findMessageTypeByName(NestedKafkaMetadataProto.getTypeName());
        }

        List<WriterPolicy> writerPolicies = new ArrayList<>();

        writerPolicies.add(new TimeBasedRotatingPolicy(sinkConfig.getFileRotationDurationMillis()));
        writerPolicies.add(new SizeBasedRotatingPolicy(sinkConfig.getFileRationMaxSizeBytes()));

        TimePartitionPath timePartitionPath = new TimePartitionPath(
                sinkConfig.getKafkaMetadataColumnName(),
                sinkConfig.getTimePartitioningFieldName(),
                sinkConfig.getTimePartitioningDatePattern(),
                sinkConfig.getPartitioningType(),
                sinkConfig.getTimePartitioningTimeZone(),
                sinkConfig.getTimePartitioningDatePrefix(),
                sinkConfig.getTimePartitioningHourPrefix());

        Path basePath = Paths.get(sinkConfig.getLocalDirectory());
        ProtoParser protoParser = new ProtoParser(stencilClient, sinkConfig.getInputSchemaProtoClass());
        KafkaMetadataUtils kafkaMetadataUtils = new KafkaMetadataUtils(sinkConfig.getKafkaMetadataColumnName());
        MessageSerializer messageSerializer = new MessageSerializer(kafkaMetadataUtils, sinkConfig.getWriteKafkaMetadata(), protoParser);
        LocalFileWriterWrapper localFileWriterWrapper =
                new LocalFileWriterWrapper(
                        sinkConfig.getFileWriterType(),
                        sinkConfig.getWriterPageSize(),
                        sinkConfig.getWriterBlockSize(),
                        messageDescriptor,
                        metadataMessageDescriptor.getFields());
        WriterOrchestrator writerOrchestrator =
                new WriterOrchestrator(
                        localFileWriterWrapper,
                        writerPolicies,
                        timePartitionPath,
                        basePath,
                        messageSerializer);

        return new ObjectStorageSink(new Instrumentation(statsDReporter, ObjectStorageSink.class), sinkConfig.getSinkType().toString(), writerOrchestrator);
    }
}
