"use strict";(self.webpackChunkfirehose=self.webpackChunkfirehose||[]).push([[409],{3905:function(e,t,l){l.d(t,{Zo:function(){return p},kt:function(){return c}});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=n.createContext({}),_=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},p=function(e){var t=_(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=_(l),c=a,s=k["".concat(u,".").concat(c)]||k[c]||m[c]||i;return l?n.createElement(s,r(r({ref:t},p),{},{components:l})):n.createElement(s,r({ref:t},p))}));function c(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,r=new Array(i);r[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var _=2;_<i;_++)r[_]=l[_];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},8836:function(e,t,l){l.r(t),l.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return _},toc:function(){return m}});var n=l(7462),a=l(3366),i=(l(7294),l(3905)),r=["components"],o={},u="Generic",_={unversionedId:"reference/configurations",id:"reference/configurations",title:"Generic",description:"All sinks in Firehose requires the following variables to be set",source:"@site/docs/reference/configurations.md",sourceDirName:"reference",slug:"/reference/configurations",permalink:"/firehose/reference/configurations",draft:!1,editUrl:"https://github.com/odpf/firehose/edit/master/docs/docs/reference/configurations.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/firehose/reference/configuration"},next:{title:"FAQs",permalink:"/firehose/reference/core-faqs"}},p={},m=[{value:"<code>KAFKA_RECORD_PARSER_MODE</code>",id:"kafka_record_parser_mode",level:2},{value:"<code>SINK_TYPE</code>",id:"sink_type",level:2},{value:"<code>INPUT_SCHEMA_PROTO_CLASS</code>",id:"input_schema_proto_class",level:2},{value:"<code>INPUT_SCHEMA_PROTO_TO_COLUMN_MAPPING</code>",id:"input_schema_proto_to_column_mapping",level:2},{value:"<code>METRIC_STATSD_HOST</code>",id:"metric_statsd_host",level:2},{value:"\0<code>METRIC_STATSD_PORT</code>",id:"metric_statsd_port",level:2},{value:"<code>METRIC_STATSD_TAGS</code>",id:"metric_statsd_tags",level:2},{value:"<code>APPLICATION_THREAD_CLEANUP_DELAY</code>",id:"application_thread_cleanup_delay",level:2},{value:"<code>APPLICATION_THREAD_COUNT</code>",id:"application_thread_count",level:2},{value:"<code>TRACE_JAEGAR_ENABLE</code>",id:"trace_jaegar_enable",level:2},{value:"<code>LOG_LEVEL</code>",id:"log_level",level:2},{value:"<code>INPUT_SCHEMA_PROTO_ALLOW_UNKNOWN_FIELDS_ENABLE</code>",id:"input_schema_proto_allow_unknown_fields_enable",level:2},{value:"<code>SOURCE_KAFKA_BROKERS</code>",id:"source_kafka_brokers",level:2},{value:"<code>SOURCE_KAFKA_TOPIC</code>",id:"source_kafka_topic",level:2},{value:"<code>SOURCE_KAFKA_CONSUMER_CONFIG_MAX_POLL_RECORDS</code>",id:"source_kafka_consumer_config_max_poll_records",level:2},{value:"<code>SOURCE_KAFKA_ASYNC_COMMIT_ENABLE</code>",id:"source_kafka_async_commit_enable",level:2},{value:"<code>SOURCE_KAFKA_CONSUMER_CONFIG_SESSION_TIMEOUT_MS</code>",id:"source_kafka_consumer_config_session_timeout_ms",level:2},{value:"<code>SOURCE_KAFKA_COMMIT_ONLY_CURRENT_PARTITIONS_ENABLE</code>",id:"source_kafka_commit_only_current_partitions_enable",level:2},{value:"<code>SOURCE_KAFKA_CONSUMER_CONFIG_AUTO_COMMIT_ENABLE</code>",id:"source_kafka_consumer_config_auto_commit_enable",level:2},{value:"<code>SOURCE_KAFKA_CONSUMER_GROUP_ID</code>",id:"source_kafka_consumer_group_id",level:2},{value:"<code>SOURCE_KAFKA_POLL_TIMEOUT_MS</code>",id:"source_kafka_poll_timeout_ms",level:2},{value:"<code>SOURCE_KAFKA_CONSUMER_CONFIG_METADATA_MAX_AGE_MS</code>",id:"source_kafka_consumer_config_metadata_max_age_ms",level:2},{value:"<code>SOURCE_KAFKA_CONSUMER_MODE</code>",id:"source_kafka_consumer_mode",level:2},{value:"<code>SCHEMA_REGISTRY_STENCIL_ENABLE</code>",id:"schema_registry_stencil_enable",level:2},{value:"<code>SCHEMA_REGISTRY_STENCIL_URLS</code>",id:"schema_registry_stencil_urls",level:2},{value:"<code>SCHEMA_REGISTRY_STENCIL_FETCH_TIMEOUT_MS</code>",id:"schema_registry_stencil_fetch_timeout_ms",level:2},{value:"<code>SCHEMA_REGISTRY_STENCIL_FETCH_RETRIES</code>",id:"schema_registry_stencil_fetch_retries",level:2},{value:"<code>SCHEMA_REGISTRY_STENCIL_FETCH_BACKOFF_MIN_MS</code>",id:"schema_registry_stencil_fetch_backoff_min_ms",level:2},{value:"<code>SCHEMA_REGISTRY_STENCIL_FETCH_AUTH_BEARER_TOKEN</code>",id:"schema_registry_stencil_fetch_auth_bearer_token",level:2},{value:"<code>SCHEMA_REGISTRY_STENCIL_CACHE_AUTO_REFRESH</code>",id:"schema_registry_stencil_cache_auto_refresh",level:2},{value:"<code>SCHEMA_REGISTRY_STENCIL_CACHE_TTL_MS</code>",id:"schema_registry_stencil_cache_ttl_ms",level:2}],k={toc:m};function c(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"generic"},"Generic"),(0,i.kt)("p",null,"All sinks in Firehose requires the following variables to be set"),(0,i.kt)("h2",{id:"kafka_record_parser_mode"},(0,i.kt)("inlineCode",{parentName:"h2"},"KAFKA_RECORD_PARSER_MODE")),(0,i.kt)("p",null,"Decides whether to parse key or message ","(","as per your input proto",")"," from incoming data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"message")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"required")),(0,i.kt)("li",{parentName:"ul"},"Default value",(0,i.kt)("inlineCode",{parentName:"li"},": message"))),(0,i.kt)("h2",{id:"sink_type"},(0,i.kt)("inlineCode",{parentName:"h2"},"SINK_TYPE")),(0,i.kt)("p",null,"Defines the Firehose sink type."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"log")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"required"))),(0,i.kt)("h2",{id:"input_schema_proto_class"},(0,i.kt)("inlineCode",{parentName:"h2"},"INPUT_SCHEMA_PROTO_CLASS")),(0,i.kt)("p",null,"Defines the fully qualified name of the input proto class."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"com.tests.TestMessage")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"required"))),(0,i.kt)("h2",{id:"input_schema_proto_to_column_mapping"},(0,i.kt)("inlineCode",{parentName:"h2"},"INPUT_SCHEMA_PROTO_TO_COLUMN_MAPPING")),(0,i.kt)("p",null,"Defines the mapping of the Proto fields to header/query fields in JSON format."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},'{"1":"order_number","2":"event_timestamp","3":"driver_id"}')),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"))),(0,i.kt)("h2",{id:"metric_statsd_host"},(0,i.kt)("inlineCode",{parentName:"h2"},"METRIC_STATSD_HOST")),(0,i.kt)("p",null,"URL of the StatsD host ","(","Telegraf service",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value",(0,i.kt)("inlineCode",{parentName:"li"},": localhost"))),(0,i.kt)("h2",{id:"metric_statsd_port"},"\0",(0,i.kt)("inlineCode",{parentName:"h2"},"METRIC_STATSD_PORT")),(0,i.kt)("p",null,"Port of the StatsD host ","(","Telegraf service",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"8125")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value",(0,i.kt)("inlineCode",{parentName:"li"},": 8125"))),(0,i.kt)("h2",{id:"metric_statsd_tags"},(0,i.kt)("inlineCode",{parentName:"h2"},"METRIC_STATSD_TAGS")),(0,i.kt)("p",null,"Global tags for StatsD metrics. Tags must be comma-separated."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"team=data-engineering,app=firehose")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"))),(0,i.kt)("h2",{id:"application_thread_cleanup_delay"},(0,i.kt)("inlineCode",{parentName:"h2"},"APPLICATION_THREAD_CLEANUP_DELAY")),(0,i.kt)("p",null,"Defines the time duration in milliseconds after which to cleanup the thread."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"400")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"2000"))),(0,i.kt)("h2",{id:"application_thread_count"},(0,i.kt)("inlineCode",{parentName:"h2"},"APPLICATION_THREAD_COUNT")),(0,i.kt)("p",null,"Number of parallel threads to run for Firehose."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"2")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"))),(0,i.kt)("h2",{id:"trace_jaegar_enable"},(0,i.kt)("inlineCode",{parentName:"h2"},"TRACE_JAEGAR_ENABLE")),(0,i.kt)("p",null,"Defines whether to enable Jaegar tracing or not"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h2",{id:"log_level"},(0,i.kt)("inlineCode",{parentName:"h2"},"LOG_LEVEL")),(0,i.kt)("p",null,"Defines the log level , i.e. debug/info/error."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"debug")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"info"))),(0,i.kt)("h2",{id:"input_schema_proto_allow_unknown_fields_enable"},(0,i.kt)("inlineCode",{parentName:"h2"},"INPUT_SCHEMA_PROTO_ALLOW_UNKNOWN_FIELDS_ENABLE")),(0,i.kt)("p",null,"Proto can have unknown fields as input"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"))),(0,i.kt)("h1",{id:"kafka-consumer"},"Kafka Consumer"),(0,i.kt)("h2",{id:"source_kafka_brokers"},(0,i.kt)("inlineCode",{parentName:"h2"},"SOURCE_KAFKA_BROKERS")),(0,i.kt)("p",null,"Defines the bootstrap server of Kafka brokers to consume from."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:9092")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"required"))),(0,i.kt)("h2",{id:"source_kafka_topic"},(0,i.kt)("inlineCode",{parentName:"h2"},"SOURCE_KAFKA_TOPIC")),(0,i.kt)("p",null,"Defines the list of Kafka topics to consume from."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"test-topic")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"required"))),(0,i.kt)("h2",{id:"source_kafka_consumer_config_max_poll_records"},(0,i.kt)("inlineCode",{parentName:"h2"},"SOURCE_KAFKA_CONSUMER_CONFIG_MAX_POLL_RECORDS")),(0,i.kt)("p",null,"Defines the batch size of Kafka messages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"705")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"500"))),(0,i.kt)("h2",{id:"source_kafka_async_commit_enable"},(0,i.kt)("inlineCode",{parentName:"h2"},"SOURCE_KAFKA_ASYNC_COMMIT_ENABLE")),(0,i.kt)("p",null,"Defines whether to enable async commit for Kafka consumer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"))),(0,i.kt)("h2",{id:"source_kafka_consumer_config_session_timeout_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},"SOURCE_KAFKA_CONSUMER_CONFIG_SESSION_TIMEOUT_MS")),(0,i.kt)("p",null,"Defines the duration of session timeout in milliseconds"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"700")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"10000"))),(0,i.kt)("h2",{id:"source_kafka_commit_only_current_partitions_enable"},(0,i.kt)("inlineCode",{parentName:"h2"},"SOURCE_KAFKA_COMMIT_ONLY_CURRENT_PARTITIONS_ENABLE")),(0,i.kt)("p",null,"Defines whether to commit only current partitions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"))),(0,i.kt)("h2",{id:"source_kafka_consumer_config_auto_commit_enable"},(0,i.kt)("inlineCode",{parentName:"h2"},"SOURCE_KAFKA_CONSUMER_CONFIG_AUTO_COMMIT_ENABLE")),(0,i.kt)("p",null,"Defines whether to enable auto commit for Kafka consumer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"705")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"500"))),(0,i.kt)("h2",{id:"source_kafka_consumer_group_id"},(0,i.kt)("inlineCode",{parentName:"h2"},"SOURCE_KAFKA_CONSUMER_GROUP_ID")),(0,i.kt)("p",null,"Defines the Kafka consumer group ID for your Firehose deployment."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"sample-group-id")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"required"))),(0,i.kt)("h2",{id:"source_kafka_poll_timeout_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},"SOURCE_KAFKA_POLL_TIMEOUT_MS")),(0,i.kt)("p",null,"Defines the duration of poll timeout for Kafka messages in milliseconds"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"80000")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"required")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"9223372036854775807"))),(0,i.kt)("h2",{id:"source_kafka_consumer_config_metadata_max_age_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},"SOURCE_KAFKA_CONSUMER_CONFIG_METADATA_MAX_AGE_MS")),(0,i.kt)("p",null,"Defines the maximum age of config metadata in milliseconds"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"700")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"500"))),(0,i.kt)("h2",{id:"source_kafka_consumer_mode"},(0,i.kt)("inlineCode",{parentName:"h2"},"SOURCE_KAFKA_CONSUMER_MODE")),(0,i.kt)("p",null,"Mode can ASYNC or SYNC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"SYNC")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"SYNC"))),(0,i.kt)("h1",{id:"stencil-client"},"Stencil Client"),(0,i.kt)("p",null,"Stencil, the Protobuf schema registry used by Firehose need the following variables to be set for the Stencil client."),(0,i.kt)("h2",{id:"schema_registry_stencil_enable"},(0,i.kt)("inlineCode",{parentName:"h2"},"SCHEMA_REGISTRY_STENCIL_ENABLE")),(0,i.kt)("p",null,"Defines whether to enable Stencil Schema registry"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h2",{id:"schema_registry_stencil_urls"},(0,i.kt)("inlineCode",{parentName:"h2"},"SCHEMA_REGISTRY_STENCIL_URLS")),(0,i.kt)("p",null,"Defines the URL of the Proto Descriptor set file in the Stencil Server"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/v1/namespaces/quickstart/descriptors/example/versions/latest")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"))),(0,i.kt)("h2",{id:"schema_registry_stencil_fetch_timeout_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},"SCHEMA_REGISTRY_STENCIL_FETCH_TIMEOUT_MS")),(0,i.kt)("p",null,"Defines the timeout in milliseconds to fetch the Proto Descriptor set file from the Stencil Server."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"4000")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"10000"))),(0,i.kt)("h2",{id:"schema_registry_stencil_fetch_retries"},(0,i.kt)("inlineCode",{parentName:"h2"},"SCHEMA_REGISTRY_STENCIL_FETCH_RETRIES")),(0,i.kt)("p",null,"Defines the number of times to retry to fetch the Proto Descriptor set file from the Stencil Server."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"4")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"3"))),(0,i.kt)("h2",{id:"schema_registry_stencil_fetch_backoff_min_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},"SCHEMA_REGISTRY_STENCIL_FETCH_BACKOFF_MIN_MS")),(0,i.kt)("p",null,"Defines the minimum time in milliseconds after which to back off from fetching the Proto Descriptor set file from the Stencil Server."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"70000")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"60000"))),(0,i.kt)("h2",{id:"schema_registry_stencil_fetch_auth_bearer_token"},(0,i.kt)("inlineCode",{parentName:"h2"},"SCHEMA_REGISTRY_STENCIL_FETCH_AUTH_BEARER_TOKEN")),(0,i.kt)("p",null,"Defines the token for authentication to connect to Stencil Server"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"tcDpw34J8d1")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"))),(0,i.kt)("h2",{id:"schema_registry_stencil_cache_auto_refresh"},(0,i.kt)("inlineCode",{parentName:"h2"},"SCHEMA_REGISTRY_STENCIL_CACHE_AUTO_REFRESH")),(0,i.kt)("p",null,"Defines whether to enable auto-refresh of Stencil cache."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h2",{id:"schema_registry_stencil_cache_ttl_ms"},(0,i.kt)("inlineCode",{parentName:"h2"},"SCHEMA_REGISTRY_STENCIL_CACHE_TTL_MS")),(0,i.kt)("p",null,"Defines the minimum time in milliseconds after which to refresh the Stencil cache."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example value: ",(0,i.kt)("inlineCode",{parentName:"li"},"900000")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"900000"))))}c.isMDXComponent=!0}}]);