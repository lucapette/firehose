"use strict";(self.webpackChunkfirehose=self.webpackChunkfirehose||[]).push([[713],{3905:function(e,l,t){t.d(l,{Zo:function(){return u},kt:function(){return k}});var a=t(7294);function n(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function i(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?i(Object(t),!0).forEach((function(l){n(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function o(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var _=a.createContext({}),p=function(e){var l=a.useContext(_),t=l;return e&&(t="function"==typeof e?e(l):r(r({},l),e)),t},u=function(e){var l=p(e.components);return a.createElement(_.Provider,{value:l},e.children)},d={inlineCode:"code",wrapper:function(e){var l=e.children;return a.createElement(a.Fragment,{},l)}},m=a.forwardRef((function(e,l){var t=e.components,n=e.mdxType,i=e.originalType,_=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),k=n,c=m["".concat(_,".").concat(k)]||m[k]||d[k]||i;return t?a.createElement(c,r(r({ref:l},u),{},{components:t})):a.createElement(c,r({ref:l},u))}));function k(e,l){var t=arguments,n=l&&l.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=m;var o={};for(var _ in l)hasOwnProperty.call(l,_)&&(o[_]=l[_]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2121:function(e,l,t){t.r(l),t.d(l,{assets:function(){return u},contentTitle:function(){return _},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=t(7462),n=t(3366),i=(t(7294),t(3905)),r=["components"],o={},_="DLQ",p={unversionedId:"sinks/dlq",id:"sinks/dlq",title:"DLQ",description:"DLQ storage can be configured for certain errors thrown by sink.",source:"@site/docs/sinks/dlq.md",sourceDirName:"sinks",slug:"/sinks/dlq",permalink:"/firehose/sinks/dlq",draft:!1,editUrl:"https://github.com/odpf/firehose/edit/master/docs/docs/sinks/dlq.md",tags:[],version:"current",frontMatter:{}},u={},d=[{value:"<code>DLQ_SINK_ENABLE</code>",id:"dlq_sink_enable",level:2},{value:"<code>DLQ_WRITER_TYPE</code>",id:"dlq_writer_type",level:2},{value:"<code>DLQ_RETRY_MAX_ATTEMPTS</code>",id:"dlq_retry_max_attempts",level:2},{value:"<code>DLQ_RETRY_FAIL_AFTER_MAX_ATTEMPT_ENABLE</code>",id:"dlq_retry_fail_after_max_attempt_enable",level:2},{value:"<code>DLQ_BLOB_STORAGE_TYPE</code>",id:"dlq_blob_storage_type",level:2},{value:"<code>DLQ_GCS_GOOGLE_CLOUD_PROJECT_ID</code>",id:"dlq_gcs_google_cloud_project_id",level:2},{value:"<code>DLQ_GCS_BUCKET_NAME</code>",id:"dlq_gcs_bucket_name",level:2},{value:"<code>DLQ_GCS_CREDENTIAL_PATH</code>",id:"dlq_gcs_credential_path",level:2},{value:"<code>DLQ_GCS_RETRY_MAX_ATTEMPTS</code>",id:"dlq_gcs_retry_max_attempts",level:2},{value:"<code>DLQ_GCS_RETRY_TOTAL_TIMEOUT_MS</code>",id:"dlq_gcs_retry_total_timeout_ms",level:2},{value:"<code>DLQ_GCS_RETRY_INITIAL_DELAY_MS</code>",id:"dlq_gcs_retry_initial_delay_ms",level:2},{value:"<code>DLQ_GCS_RETRY_MAX_DELAY_MS</code>",id:"dlq_gcs_retry_max_delay_ms",level:2},{value:"<code>DLQ_GCS_RETRY_DELAY_MULTIPLIER</code>",id:"dlq_gcs_retry_delay_multiplier",level:2},{value:"<code>DLQ_GCS_RETRY_INITIAL_RPC_TIMEOUT_MS</code>",id:"dlq_gcs_retry_initial_rpc_timeout_ms",level:2},{value:"<code>DLQ_GCS_RETRY_RPC_TIMEOUT_MULTIPLIER</code>",id:"dlq_gcs_retry_rpc_timeout_multiplier",level:2},{value:"<code>DLQ_GCS_RETRY_RPC_MAX_TIMEOUT_MS</code>",id:"dlq_gcs_retry_rpc_max_timeout_ms",level:2},{value:"<code>DLQ_KAFKA_ACKS</code>",id:"dlq_kafka_acks",level:2},{value:"<code>DLQ_KAFKA_RETRIES</code>",id:"dlq_kafka_retries",level:2},{value:"<code>DLQ_KAFKA_BATCH_SIZE</code>",id:"dlq_kafka_batch_size",level:2},{value:"<code>DLQ_KAFKA_LINGER_MS</code>",id:"dlq_kafka_linger_ms",level:2},{value:"<code>DLQ_KAFKA_BUFFER_MEMORY</code>",id:"dlq_kafka_buffer_memory",level:2},{value:"<code>DLQ_KAFKA_KEY_SERIALIZER</code>",id:"dlq_kafka_key_serializer",level:2},{value:"<code>DLQ_KAFKA_VALUE_SERIALIZER</code>",id:"dlq_kafka_value_serializer",level:2},{value:"<code>DLQ_KAFKA_BROKERS</code>",id:"dlq_kafka_brokers",level:2},{value:"<code>DLQ_KAFKA_TOPIC</code>",id:"dlq_kafka_topic",level:2},{value:"<code>DLQ_S3_REGION&quot;</code>",id:"dlq_s3_region",level:2},{value:"<code>DLQ_S3_BUCKET_NAME&quot;</code>",id:"dlq_s3_bucket_name",level:2},{value:"<code>DLQ_S3_ACCESS_KEY&quot;</code>",id:"dlq_s3_access_key",level:2},{value:"<code>DLQ_S3_SECRET_KEY&quot;</code>",id:"dlq_s3_secret_key",level:2},{value:"<code>DLQ_S3_RETRY_MAX_ATTEMPTS</code>",id:"dlq_s3_retry_max_attempts",level:2},{value:"<code>DLQ_S3_BASE_DELAY_MS&quot;</code>",id:"dlq_s3_base_delay_ms",level:2},{value:"<code>DLQ_S3_MAX_BACKOFF_MS&quot;</code>",id:"dlq_s3_max_backoff_ms",level:2},{value:"<code>DLQ_S3_API_ATTEMPT_TIMEOUT_MS&quot;</code>",id:"dlq_s3_api_attempt_timeout_ms",level:2},{value:"<code>DLQ_S3_API_TIMEOUT_MS&quot;</code>",id:"dlq_s3_api_timeout_ms",level:2}],m={toc:d};function k(e){var l=e.components,t=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:l,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dlq"},"DLQ"),(0,i.kt)("p",null,"DLQ storage can be configured for certain errors thrown by sink."),(0,i.kt)("h2",{id:"dlq_sink_enable"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_SINK_ENABLE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h2",{id:"dlq_writer_type"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_WRITER_TYPE")),(0,i.kt)("p",null,"DLQ Writer to be configured. The possible values are, ",(0,i.kt)("inlineCode",{parentName:"p"},"KAFKA,BLOB_STORAGE,LOG")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"BLOB_STORAGE")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"LOG"))),(0,i.kt)("h2",{id:"dlq_retry_max_attempts"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_RETRY_MAX_ATTEMPTS")),(0,i.kt)("p",null,"Max attempts to retry for dlq."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"3")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"2147483647"))),(0,i.kt)("h2",{id:"dlq_retry_fail_after_max_attempt_enable"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_RETRY_FAIL_AFTER_MAX_ATTEMPT_ENABLE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h2",{id:"dlq_blob_storage_type"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_BLOB_STORAGE_TYPE")),(0,i.kt)("p",null,"If the writer type is set to BLOB_STORAGE, we can choose any blob storage. Currently, GCS and S3 is supported."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"GCS")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"GCS"))),(0,i.kt)("h2",{id:"dlq_gcs_google_cloud_project_id"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_GCS_GOOGLE_CLOUD_PROJECT_ID")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"my-project-id")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Required if BLOB storage type is GCS"))),(0,i.kt)("h2",{id:"dlq_gcs_bucket_name"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_GCS_BUCKET_NAME")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"dlq-bucket")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Required if BLOB storage type is GCS"))),(0,i.kt)("h2",{id:"dlq_gcs_credential_path"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_GCS_CREDENTIAL_PATH")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"/path/for/json/credential")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Required if BLOB storage type is GCS"))),(0,i.kt)("h2",{id:"dlq_gcs_retry_max_attempts"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_GCS_RETRY_MAX_ATTEMPTS")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"3")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"))),(0,i.kt)("h2",{id:"dlq_gcs_retry_total_timeout_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_GCS_RETRY_TOTAL_TIMEOUT_MS")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"120000")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"120000"))),(0,i.kt)("h2",{id:"dlq_gcs_retry_initial_delay_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_GCS_RETRY_INITIAL_DELAY_MS")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"1000")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"1000"))),(0,i.kt)("h2",{id:"dlq_gcs_retry_max_delay_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_GCS_RETRY_MAX_DELAY_MS")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"30000")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"30000"))),(0,i.kt)("h2",{id:"dlq_gcs_retry_delay_multiplier"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_GCS_RETRY_DELAY_MULTIPLIER")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"2")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"2"))),(0,i.kt)("h2",{id:"dlq_gcs_retry_initial_rpc_timeout_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_GCS_RETRY_INITIAL_RPC_TIMEOUT_MS")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"5000")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"5000"))),(0,i.kt)("h2",{id:"dlq_gcs_retry_rpc_timeout_multiplier"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_GCS_RETRY_RPC_TIMEOUT_MULTIPLIER")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"1")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"))),(0,i.kt)("h2",{id:"dlq_gcs_retry_rpc_max_timeout_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_GCS_RETRY_RPC_MAX_TIMEOUT_MS")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"5000")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"5000"))),(0,i.kt)("h2",{id:"dlq_kafka_acks"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_KAFKA_ACKS")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"all")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"all"))),(0,i.kt)("h2",{id:"dlq_kafka_retries"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_KAFKA_RETRIES")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"3")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"2147483647"))),(0,i.kt)("h2",{id:"dlq_kafka_batch_size"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_KAFKA_BATCH_SIZE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"100")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"16384"))),(0,i.kt)("h2",{id:"dlq_kafka_linger_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_KAFKA_LINGER_MS")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"5")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"))),(0,i.kt)("h2",{id:"dlq_kafka_buffer_memory"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_KAFKA_BUFFER_MEMORY")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"33554432")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"33554432"))),(0,i.kt)("h2",{id:"dlq_kafka_key_serializer"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_KAFKA_KEY_SERIALIZER")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"your.own.class")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.kafka.common.serialization.ByteArraySerializer"))),(0,i.kt)("h2",{id:"dlq_kafka_value_serializer"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_KAFKA_VALUE_SERIALIZER")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"your.own.class")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.kafka.common.serialization.ByteArraySerializer"))),(0,i.kt)("h2",{id:"dlq_kafka_brokers"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_KAFKA_BROKERS")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1:1234")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"required if writer type is kafka"))),(0,i.kt)("h2",{id:"dlq_kafka_topic"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_KAFKA_TOPIC")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"your-own-topic")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"firehose-retry-topic"))),(0,i.kt)("h2",{id:"dlq_s3_region"},(0,i.kt)("inlineCode",{parentName:"h2"},'DLQ_S3_REGION"')),(0,i.kt)("p",null,"Amazon S3 creates buckets in a Region that you specify."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"ap-south-1")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"required"))),(0,i.kt)("h2",{id:"dlq_s3_bucket_name"},(0,i.kt)("inlineCode",{parentName:"h2"},'DLQ_S3_BUCKET_NAME"')),(0,i.kt)("p",null,"The Name of  Amazon S3 bucket .Here is further documentation of s3 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingBucket.html"},"bucket name"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"sink_bucket")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"required"))),(0,i.kt)("h2",{id:"dlq_s3_access_key"},(0,i.kt)("inlineCode",{parentName:"h2"},'DLQ_S3_ACCESS_KEY"')),(0,i.kt)("p",null,"Access Key to access the bucket. This key can also be set through env using ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," key or by creating credentials file in ",(0,i.kt)("inlineCode",{parentName:"p"},"${HOME}/.aws/credentials")," folder . Here is further documentation on how to set through ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"credentials file")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html"},"environment varialbes")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"AKIAIOSFODNN7EXAMPLE")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"required"))),(0,i.kt)("h2",{id:"dlq_s3_secret_key"},(0,i.kt)("inlineCode",{parentName:"h2"},'DLQ_S3_SECRET_KEY"')),(0,i.kt)("p",null,"Secret Key to access the bucket. This key can also be set through env using ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY")," key or by creating credentials file in ",(0,i.kt)("inlineCode",{parentName:"p"},"${HOME}/.aws/credentials")," folder . Here is further documentation on how to set through ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"credentials file")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html"},"environment varialbes")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"required"))),(0,i.kt)("h2",{id:"dlq_s3_retry_max_attempts"},(0,i.kt)("inlineCode",{parentName:"h2"},"DLQ_S3_RETRY_MAX_ATTEMPTS")),(0,i.kt)("p",null,"Number of retry of the s3 upload request when the request failed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"10")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value : ",(0,i.kt)("inlineCode",{parentName:"li"},"10"))),(0,i.kt)("h2",{id:"dlq_s3_base_delay_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},'DLQ_S3_BASE_DELAY_MS"')),(0,i.kt)("p",null,"Initial delay for first retry in milliseconds."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"1000")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value : ",(0,i.kt)("inlineCode",{parentName:"li"},"1000"))),(0,i.kt)("h2",{id:"dlq_s3_max_backoff_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},'DLQ_S3_MAX_BACKOFF_MS"')),(0,i.kt)("p",null,"Max backoff time for retry in milliseconds"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"30000")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value : ",(0,i.kt)("inlineCode",{parentName:"li"},"30000"))),(0,i.kt)("h2",{id:"dlq_s3_api_attempt_timeout_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},'DLQ_S3_API_ATTEMPT_TIMEOUT_MS"')),(0,i.kt)("p",null,"The amount of time to wait for the http request to complete before giving up and timing out in milliseconds."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"10000")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value : ",(0,i.kt)("inlineCode",{parentName:"li"},"10000"))),(0,i.kt)("h2",{id:"dlq_s3_api_timeout_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},'DLQ_S3_API_TIMEOUT_MS"')),(0,i.kt)("p",null,"The amount of time to allow the client to complete the execution of an API call. This timeout covers the entire client execution except for marshalling. Unit is in milliseconds."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"40000")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value : ",(0,i.kt)("inlineCode",{parentName:"li"},"40000"))))}k.isMDXComponent=!0}}]);