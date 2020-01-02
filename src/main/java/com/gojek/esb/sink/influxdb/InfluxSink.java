package com.gojek.esb.sink.influxdb;

import com.gojek.de.stencil.client.StencilClient;
import com.gojek.de.stencil.parser.ProtoParser;
import com.gojek.esb.builder.PointBuilder;
import com.gojek.esb.config.InfluxSinkConfig;
import com.gojek.esb.consumer.EsbMessage;
import com.gojek.esb.sink.AbstractSink;
import com.gojek.esb.metrics.Instrumentation;
import com.google.protobuf.DynamicMessage;
import org.influxdb.InfluxDB;
import org.influxdb.dto.BatchPoints;
import org.influxdb.dto.Point;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class InfluxSink extends AbstractSink {
    public static final String FIELD_NAME_MAPPING_ERROR_MESSAGE = "field index mapping cannot be empty; at least one field value is required";

    private InfluxSinkConfig config;
    private ProtoParser protoParser;
    private PointBuilder pointBuilder;
    private InfluxDB client;
    private BatchPoints batchPoints;
    private StencilClient stencilClient;

    public InfluxSink(Instrumentation instrumentation, String sinkType, InfluxSinkConfig config, ProtoParser protoParser, InfluxDB client, StencilClient stencilClient) {
        super(instrumentation, sinkType);
        this.config = config;
        this.protoParser = protoParser;
        this.pointBuilder = new PointBuilder(config);
        this.client = client;
        this.stencilClient = stencilClient;
    }

    @Override
    protected void prepare(List<EsbMessage> esbMessages) throws IOException {
        batchPoints = BatchPoints.database(config.getDatabaseName()).retentionPolicy(config.getRetentionPolicy()).build();
        for (EsbMessage esbMessage : esbMessages) {
            DynamicMessage message = protoParser.parse(esbMessage.getLogMessage());
            Point point = pointBuilder.buildPoint(message);
            batchPoints.point(point);
        }
    }

    @Override
    protected List<EsbMessage> execute() {
        client.write(batchPoints);
        return new ArrayList<>();
    }


    @Override
    public void close() throws IOException {
        stencilClient.close();
    }
}
