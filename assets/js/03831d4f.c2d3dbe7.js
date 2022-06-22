"use strict";(self.webpackChunkfirehose=self.webpackChunkfirehose||[]).push([[592],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),g=i,c=m["".concat(u,".").concat(g)]||m[g]||s[g]||r;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2338:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={},u="Bigquery Sink",d={unversionedId:"sinks/bigquery-sink",id:"sinks/bigquery-sink",title:"Bigquery Sink",description:"Bigquery Sink has several responsibilities, first creation of bigquery table and dataset when they are not exist, second update the bigquery table schema based on the latest protobuf schema, third translate protobuf messages into bigquery records and insert them to bigquery tables.",source:"@site/docs/sinks/bigquery-sink.md",sourceDirName:"sinks",slug:"/sinks/bigquery-sink",permalink:"/firehose/sinks/bigquery-sink",draft:!1,editUrl:"https://github.com/odpf/firehose/edit/master/docs/docs/sinks/bigquery-sink.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Blob Sink",permalink:"/firehose/sinks/blob-sink"},next:{title:"Configuration",permalink:"/firehose/reference/configuration"}},p={},s=[{value:"Asynchronous consumer mode",id:"asynchronous-consumer-mode",level:2},{value:"At Least Once Guarantee",id:"at-least-once-guarantee",level:2},{value:"Bigquery table schema update",id:"bigquery-table-schema-update",level:2},{value:"Protobuf and BigQuery table type mapping",id:"protobuf-and-bigquery-table-type-mapping",level:2},{value:"Partitioning",id:"partitioning",level:2},{value:"Kafka Metadata",id:"kafka-metadata",level:2},{value:"Error handling",id:"error-handling",level:2},{value:"Google Cloud Bigquery IAM Permission",id:"google-cloud-bigquery-iam-permission",level:2},{value:"Configurations",id:"configurations",level:2},{value:"<code>SINK_BIGQUERY_GOOGLE_CLOUD_PROJECT_ID</code>",id:"sink_bigquery_google_cloud_project_id",level:3},{value:"<code>SINK_BIGQUERY_TABLE_NAME</code>",id:"sink_bigquery_table_name",level:3},{value:"<code>SINK_BIGQUERY_DATASET_NAME</code>",id:"sink_bigquery_dataset_name",level:3},{value:"<code>SINK_BIGQUERY_DATASET_LABELS</code>",id:"sink_bigquery_dataset_labels",level:3},{value:"<code>SINK_BIGQUERY_TABLE_LABELS</code>",id:"sink_bigquery_table_labels",level:3},{value:"<code>SINK_BIGQUERY_TABLE_PARTITIONING_ENABLE</code>",id:"sink_bigquery_table_partitioning_enable",level:3},{value:"<code>SINK_BIGQUERY_TABLE_PARTITION_KEY</code>",id:"sink_bigquery_table_partition_key",level:3},{value:"<code>SINK_BIGQUERY_ROW_INSERT_ID_ENABLE</code>",id:"sink_bigquery_row_insert_id_enable",level:3},{value:"<code>SINK_BIGQUERY_CREDENTIAL_PATH</code>",id:"sink_bigquery_credential_path",level:3},{value:"<code>SINK_BIGQUERY_METADATA_NAMESPACE</code>",id:"sink_bigquery_metadata_namespace",level:3},{value:"<code>SINK_BIGQUERY_DATASET_LOCATION</code>",id:"sink_bigquery_dataset_location",level:3},{value:"<code>SINK_BIGQUERY_TABLE_PARTITION_EXPIRY_MS</code>",id:"sink_bigquery_table_partition_expiry_ms",level:3},{value:"<code>SINK_BIGQUERY_CLIENT_READ_TIMEOUT_MS</code>",id:"sink_bigquery_client_read_timeout_ms",level:3},{value:"<code>SINK_BIGQUERY_CLIENT_CONNECT_TIMEOUT_MS</code>",id:"sink_bigquery_client_connect_timeout_ms",level:3}],m={toc:s};function g(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bigquery-sink"},"Bigquery Sink"),(0,r.kt)("p",null,"Bigquery Sink has several responsibilities, first creation of bigquery table and dataset when they are not exist, second update the bigquery table schema based on the latest protobuf schema, third translate protobuf messages into bigquery records and insert them to bigquery tables.\nBigquery utilise Bigquery ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/streaming-data-into-bigquery"},"Streaming API")," to insert record into bigquery tables."),(0,r.kt)("h2",{id:"asynchronous-consumer-mode"},"Asynchronous consumer mode"),(0,r.kt)("p",null,"Bigquery Streaming API limits size of payload sent for each insert operations. The limitation reduces the amount of message allowed to be inserted when the message size is big.\nThis will reduce the throughput of bigquery sink. To increase the throughput, firehose provide kafka consumer asynchronous mode.\nIn asynchronous mode sink operation is executed asynchronously, so multiple sink task can be scheduled and run concurrently.\nThroughput can be increased by increasing the number of sink pool."),(0,r.kt)("h2",{id:"at-least-once-guarantee"},"At Least Once Guarantee"),(0,r.kt)("p",null,"Because of asynchronous consumer mode and the possibility of retry on the insert operation. There is no guarantee of the message order that successfully sent to the sink.\nThat also happened with commit offset, the there is no order of the offset number of the processed messages.\nFirehose collect all the offset sort them and only commit the latest continuous offset.\nThis will ensure all the offset being committed after messages successfully processed even when some messages are being re processed by retry handler or when the insert operation took a long time."),(0,r.kt)("h2",{id:"bigquery-table-schema-update"},"Bigquery table schema update"),(0,r.kt)("p",null,"Bigquery Sink update the bigquery table schema on separate table update operation. Bigquery utilise ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/odpf/stencil"},"Stencil")," to parse protobuf messages generate schema and update bigquery tables with the latest schema.\nThe stencil client periodically reload the descriptor cache. Table schema update happened after the descriptor caches uploaded.\nBecause firehose is horizontally scalable multiple firehose consumer might be running.\nBecause there is no coordination strategy between consumers the schema update will be triggered by all consumers."),(0,r.kt)("h2",{id:"protobuf-and-bigquery-table-type-mapping"},"Protobuf and BigQuery table type mapping"),(0,r.kt)("p",null,"Here are type conversion between protobuf type and bigquery type :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Protobuf Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Bigquery Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"BYTES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enum"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int64, uint64, int32, uint32, fixed64, fixed32, sfixed64, sfixed32, sint64, sint32"),(0,r.kt)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"RECORD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".google.protobuf.Timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".google.protobuf.Struct"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING (Json Serialised)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".google.protobuf.Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"RECORD")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Protobuf Modifier"),(0,r.kt)("th",{parentName:"tr",align:null},"Bigquery Modifier"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"repeated"),(0,r.kt)("td",{parentName:"tr",align:null},"REPEATED")))),(0,r.kt)("h2",{id:"partitioning"},"Partitioning"),(0,r.kt)("p",null,"Bigquery Sink supports creation of table with partition configuration. Currently, Bigquery Sink only supports time based partitioning.\nTo have time based partitioning protobuf ",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp")," as field is needed on the protobuf message. The protobuf field will be used as partitioning column on table creation.\nThe time partitioning type that is currently supported is ",(0,r.kt)("inlineCode",{parentName:"p"},"DAY")," partitioning."),(0,r.kt)("h2",{id:"kafka-metadata"},"Kafka Metadata"),(0,r.kt)("p",null,"For data quality checking purpose sometimes kafka metadata need to be added on the record. When ",(0,r.kt)("inlineCode",{parentName:"p"},"SINK_BIGQUERY_METADATA_NAMESPACE")," is configured kafka metadata column will be added, here is the list of kafka metadata column to be added :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Fully Qualified Column Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifier"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata_column"),(0,r.kt)("td",{parentName:"tr",align:null},"RECORD"),(0,r.kt)("td",{parentName:"tr",align:null},"NULLABLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata_column.message_partition"),(0,r.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:null},"NULLABLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata_column.message_offset"),(0,r.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:null},"NULLABLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata_column.message_topic"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"NULLABLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata_column.message_timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},"NULLABLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata_column.load_time"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},"NULLABLE")))),(0,r.kt)("h2",{id:"error-handling"},"Error handling"),(0,r.kt)("p",null,"Firehose consumer parse errors from table insertion, translate the error into generic error types and attach them for each message that failed to be inserted to bigquery.\nUsers can configure how to handle each generic error types accordingly.\nHere is mapping of the error translation to generic firehose error types :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Error Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Generic Error Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stopped Error"),(0,r.kt)("td",{parentName:"tr",align:null},"SINK_5XX_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Error on a row insertion that happened because insert job is cancelled because other record is invalid although current record is valid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Out of bounds Error"),(0,r.kt)("td",{parentName:"tr",align:null},"SINK_4XX_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Error on a row insertion the partitioned column has a date value less than 5 years and more than 1 year in the future")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Invalid schema Error"),(0,r.kt)("td",{parentName:"tr",align:null},"SINK_4XX_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Error on a row insertion when there is a new field that is not exist on the table or when there is required field on the table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other Error"),(0,r.kt)("td",{parentName:"tr",align:null},"SINK_UNKNOWN_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Uncategorized error")))),(0,r.kt)("h2",{id:"google-cloud-bigquery-iam-permission"},"Google Cloud Bigquery IAM Permission"),(0,r.kt)("p",null,"Several IAM permission is required for bigquery sink to run properly,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create and update Dataset",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bigquery.tables.create"),(0,r.kt)("li",{parentName:"ul"},"bigquery.tables.get"),(0,r.kt)("li",{parentName:"ul"},"bigquery.tables.update"))),(0,r.kt)("li",{parentName:"ul"},"Create and update Table",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bigquery.datasets.create"),(0,r.kt)("li",{parentName:"ul"},"bigquery.datasets.get"),(0,r.kt)("li",{parentName:"ul"},"bigquery.datasets.update"))),(0,r.kt)("li",{parentName:"ul"},"Stream insert to Table",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bigquery.tables.updateData")))),(0,r.kt)("p",null,"Further documentation on bigquery IAM permission ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/streaming-data-into-bigquery"},"here"),"."),(0,r.kt)("h2",{id:"configurations"},"Configurations"),(0,r.kt)("p",null,"A Bigquery sink Firehose ","(",(0,r.kt)("inlineCode",{parentName:"p"},"SINK_TYPE"),"=",(0,r.kt)("inlineCode",{parentName:"p"},"bigquery"),")"," requires the following variables to be set along with Generic ones"),(0,r.kt)("h3",{id:"sink_bigquery_google_cloud_project_id"},(0,r.kt)("inlineCode",{parentName:"h3"},"SINK_BIGQUERY_GOOGLE_CLOUD_PROJECT_ID")),(0,r.kt)("p",null,"Contains information of google cloud project id location of the bigquery table where the records need to be inserted. Further documentation on google cloud ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects"},"project id"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"li"},"gcp-project-id")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"required"))),(0,r.kt)("h3",{id:"sink_bigquery_table_name"},(0,r.kt)("inlineCode",{parentName:"h3"},"SINK_BIGQUERY_TABLE_NAME")),(0,r.kt)("p",null,"The name of bigquery table. Here is further documentation of bigquery ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/tables"},"table naming"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"li"},"user_profile")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"required"))),(0,r.kt)("h3",{id:"sink_bigquery_dataset_name"},(0,r.kt)("inlineCode",{parentName:"h3"},"SINK_BIGQUERY_DATASET_NAME")),(0,r.kt)("p",null,"The name of dataset that contains the bigquery table. Here is further documentation of bigquery ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/datasets"},"dataset naming"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"li"},"customer")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"required"))),(0,r.kt)("h3",{id:"sink_bigquery_dataset_labels"},(0,r.kt)("inlineCode",{parentName:"h3"},"SINK_BIGQUERY_DATASET_LABELS")),(0,r.kt)("p",null,"Labels of a bigquery dataset, key-value information separated by comma attached to the bigquery dataset. This configuration define labels that will be set to the bigquery dataset. Here is further documentation of bigquery ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/labels-intro"},"labels"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"li"},"owner=data-engineering,granurality=daily")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"optional"))),(0,r.kt)("h3",{id:"sink_bigquery_table_labels"},(0,r.kt)("inlineCode",{parentName:"h3"},"SINK_BIGQUERY_TABLE_LABELS")),(0,r.kt)("p",null,"Labels of a bigquery table, key-value information separated by comma attached to the bigquery table. This configuration define labels that will be set to the bigquery dataset. Here is further documentation of bigquery ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/labels-intro"},"labels"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"li"},"owner=data-engineering,granurality=daily")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"optional"))),(0,r.kt)("h3",{id:"sink_bigquery_table_partitioning_enable"},(0,r.kt)("inlineCode",{parentName:"h3"},"SINK_BIGQUERY_TABLE_PARTITIONING_ENABLE")),(0,r.kt)("p",null,"Configuration for enable table partitioning. This config will be used for provide partitioning config when creating the bigquery table.\nBigquery table partitioning config can only be set once, on the table creation and the partitioning cannot be disabled once created. Changing this value of this config later will cause error when firehose trying to update the bigquery table.\nHere is further documentation of bigquery ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/partitioned-tables"},"table partitioning"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"required")),(0,r.kt)("li",{parentName:"ul"},"Default value: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("h3",{id:"sink_bigquery_table_partition_key"},(0,r.kt)("inlineCode",{parentName:"h3"},"SINK_BIGQUERY_TABLE_PARTITION_KEY")),(0,r.kt)("p",null,"Define protobuf/bigquery field name that will be used for bigquery table partitioning. only protobuf ",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp")," field, that later converted into bigquery ",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp")," column that is supported as partitioning key.\nCurrently, this sink only support ",(0,r.kt)("inlineCode",{parentName:"p"},"DAY")," time partitioning type.\nHere is further documentation of bigquery ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/creating-partitioned-tables#console"},"column time partitioning"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"li"},"event_timestamp")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"required"))),(0,r.kt)("h3",{id:"sink_bigquery_row_insert_id_enable"},(0,r.kt)("inlineCode",{parentName:"h3"},"SINK_BIGQUERY_ROW_INSERT_ID_ENABLE")),(0,r.kt)("p",null,"This config enables adding of ID row intended for deduplication when inserting new records into bigquery.\nHere is further documentation of bigquery streaming insert ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/streaming-data-into-bigquery"},"deduplication"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"required")),(0,r.kt)("li",{parentName:"ul"},"Default value: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"))),(0,r.kt)("h3",{id:"sink_bigquery_credential_path"},(0,r.kt)("inlineCode",{parentName:"h3"},"SINK_BIGQUERY_CREDENTIAL_PATH")),(0,r.kt)("p",null,"Full path of google cloud credentials file. Here is further documentation of google cloud authentication and ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/getting-started"},"credentials"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"li"},"/.secret/google-cloud-credentials.json")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"required"))),(0,r.kt)("h3",{id:"sink_bigquery_metadata_namespace"},(0,r.kt)("inlineCode",{parentName:"h3"},"SINK_BIGQUERY_METADATA_NAMESPACE")),(0,r.kt)("p",null,"The name of column that will be added alongside of the existing bigquery column that generated from protobuf, that column contains struct of kafka metadata of the inserted record.\nWhen this config is not configured the metadata column will not be added to the table."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka_metadata")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"optional"))),(0,r.kt)("h3",{id:"sink_bigquery_dataset_location"},(0,r.kt)("inlineCode",{parentName:"h3"},"SINK_BIGQUERY_DATASET_LOCATION")),(0,r.kt)("p",null,"The geographic region name of location of bigquery dataset. Further documentation on bigquery dataset ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/locations#dataset_location"},"location"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"li"},"us-central1")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"optional")),(0,r.kt)("li",{parentName:"ul"},"Default value: ",(0,r.kt)("inlineCode",{parentName:"li"},"asia-southeast1"))),(0,r.kt)("h3",{id:"sink_bigquery_table_partition_expiry_ms"},(0,r.kt)("inlineCode",{parentName:"h3"},"SINK_BIGQUERY_TABLE_PARTITION_EXPIRY_MS")),(0,r.kt)("p",null,"The duration of bigquery table partitioning expiration in milliseconds. Fill this config with ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," will disable the table partition expiration. Further documentation on bigquery table partition ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/managing-partitioned-tables#partition-expiration"},"expiration"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"li"},"2592000000")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"optional")),(0,r.kt)("li",{parentName:"ul"},"Default value: ",(0,r.kt)("inlineCode",{parentName:"li"},"-1"))),(0,r.kt)("h3",{id:"sink_bigquery_client_read_timeout_ms"},(0,r.kt)("inlineCode",{parentName:"h3"},"SINK_BIGQUERY_CLIENT_READ_TIMEOUT_MS")),(0,r.kt)("p",null,"The duration of bigquery client http read timeout in milliseconds, 0 for an infinite timeout, a negative number for the default value (20000)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"li"},"20000")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"optional")),(0,r.kt)("li",{parentName:"ul"},"Default value: ",(0,r.kt)("inlineCode",{parentName:"li"},"-1"))),(0,r.kt)("h3",{id:"sink_bigquery_client_connect_timeout_ms"},(0,r.kt)("inlineCode",{parentName:"h3"},"SINK_BIGQUERY_CLIENT_CONNECT_TIMEOUT_MS")),(0,r.kt)("p",null,"The duration of bigquery client http connection timeout in milliseconds, 0 for an infinite timeout, a negative number for the default value (20000)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example value: ",(0,r.kt)("inlineCode",{parentName:"li"},"20000")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"optional")),(0,r.kt)("li",{parentName:"ul"},"Default value: ",(0,r.kt)("inlineCode",{parentName:"li"},"-1"))))}g.isMDXComponent=!0}}]);