import { ReduxActionTypes } from "constants/ReduxActionConstants";
import { diff } from "deep-diff";
import { merge } from "lodash";
import { getAction } from "selectors/entitiesSelector";
import { getConfigInitialValues } from "components/formControls/utils";
import { getPathAndValueFromActionDiffObject } from "../../../../utils/getPathAndValueFromActionDiffObject";
import configureStore from "redux-mock-store";
import { setActionProperty } from "actions/pluginActionActions";

const initialState = {
  entities: {
    actions: [
      {
        isLoading: false,
        config: {
          id: "6194d8e1abb49e2fd00812b2",
          organizationId: "5e1c5b2014edee5e49efc06c",
          pluginType: "SAAS",
          pluginId: "6080f9266b8cfd602957ba72",
          name: "Api1",
          datasource: {
            id: "6143187b6371c22cc093fdcf",
            userPermissions: [],
            pluginId: "6080f9266b8cfd602957ba72",
            messages: [],
            isValid: true,
            new: false,
          },
          pageId: "6194d8cdabb49e2fd00812b1",
          actionConfiguration: {
            timeoutInMillisecond: 10000,
            paginationType: "NONE",
            encodeParamsToggle: true,
            pluginSpecifiedTemplates: [
              {
                key: "method",
                value: "GET",
              },
              {
                key: "sheetUrl",
                value:
                  "https://docs.google.com/spreadsheets/d/1HYjlH7T4ii_NZzCg6LvGG0hnqfNOu35XSl-OTo_4K7Y/edit#gid=1562690580",
              },
              {
                key: "range",
                value: "",
              },
              {
                key: "spreadsheetName",
                value: "",
              },
              {
                key: "tableHeaderIndex",
                value: "1",
              },
              {
                key: "queryFormat",
                value: "ROWS",
              },
              {
                key: "rowLimit",
                value: "10",
              },
              {
                key: "sheetName",
                value: "Sheet1",
              },
              {
                key: "rowOffset",
                value: "0",
              },
              {
                key: "rowObject",
              },
              {
                key: "rowObjects",
              },
              {
                key: "rowIndex",
                value: "0",
              },
              {
                key: "deleteFormat",
                value: "SHEET",
              },
              {
                key: "smartSubstitution",
                value: true,
              },
              {
                value: [{}],
              },
            ],
          },
          executeOnLoad: false,
          dynamicBindingPathList: [],
          isValid: true,
          invalids: [],
          messages: [],
          jsonPathKeys: [],
          confirmBeforeExecute: false,
          userPermissions: [
            "read:actions",
            "execute:actions",
            "manage:actions",
          ],
          validName: "Api1",
        },
      },
    ],
    datasources: undefined,
    pageList: undefined,
    jsExecutions: {},
    plugins: {
      list: [],
      loading: false,
      formConfigs: {
        "5e687c18fb01e64e6a3f873f": [
          {
            sectionName: "Connection",
            children: [
              {
                label: "Use Mongo Connection String URI Key",
                configProperty: "datasourceConfiguration.properties[0].key",
                controlType: "INPUT_TEXT",
                initialValue: "Use Mongo Connection String URI",
                hidden: true,
              },
              {
                label: "Use Mongo Connection String URI",
                configProperty: "datasourceConfiguration.properties[0].value",
                controlType: "DROP_DOWN",
                initialValue: "No",
                options: [
                  {
                    label: "Yes",
                    value: "Yes",
                  },
                  {
                    label: "No",
                    value: "No",
                  },
                ],
              },
              {
                label: "Connection String URI Key",
                configProperty: "datasourceConfiguration.properties[1].key",
                controlType: "INPUT_TEXT",
                initialValue: "Connection String URI",
                hidden: true,
              },
              {
                label: "Connection String URI",
                placeholderText:
                  "mongodb+srv://<username>:<password>@test-db.swrsq.mongodb.net/myDatabase",
                configProperty: "datasourceConfiguration.properties[1].value",
                controlType: "INPUT_TEXT",
                hidden: {
                  path: "datasourceConfiguration.properties[0].value",
                  comparison: "NOT_EQUALS",
                  value: "Yes",
                },
              },
              {
                label: "Connection Mode",
                configProperty: "datasourceConfiguration.connection.mode",
                controlType: "DROP_DOWN",
                initialValue: "READ_WRITE",
                options: [
                  {
                    label: "Read Only",
                    value: "READ_ONLY",
                  },
                  {
                    label: "Read / Write",
                    value: "READ_WRITE",
                  },
                ],
                hidden: {
                  path: "datasourceConfiguration.properties[0].value",
                  comparison: "EQUALS",
                  value: "Yes",
                },
              },
              {
                label: "Connection Type",
                configProperty: "datasourceConfiguration.connection.type",
                initialValue: "DIRECT",
                controlType: "DROP_DOWN",
                options: [
                  {
                    label: "Direct Connection",
                    value: "DIRECT",
                  },
                  {
                    label: "Replica set",
                    value: "REPLICA_SET",
                  },
                ],
                hidden: {
                  path: "datasourceConfiguration.properties[0].value",
                  comparison: "EQUALS",
                  value: "Yes",
                },
              },
              {
                children: [
                  {
                    label: "Host Address",
                    configProperty: "datasourceConfiguration.endpoints[*].host",
                    controlType: "KEYVALUE_ARRAY",
                    validationMessage: "Please enter a valid host",
                    validationRegex: "^((?![/:]).)*$",
                    placeholderText: "myapp.abcde.mongodb.net",
                    hidden: {
                      path: "datasourceConfiguration.properties[0].value",
                      comparison: "EQUALS",
                      value: "Yes",
                    },
                  },
                  {
                    label: "Port",
                    configProperty: "datasourceConfiguration.endpoints[*].port",
                    dataType: "NUMBER",
                    controlType: "KEYVALUE_ARRAY",
                    hidden: {
                      path: "datasourceConfiguration.properties[0].value",
                      comparison: "EQUALS",
                      value: "Yes",
                    },
                  },
                ],
              },
              {
                label: "Default Database Name",
                placeholderText: "(Optional)",
                configProperty:
                  "datasourceConfiguration.connection.defaultDatabaseName",
                controlType: "INPUT_TEXT",
                hidden: {
                  path: "datasourceConfiguration.properties[0].value",
                  comparison: "EQUALS",
                  value: "Yes",
                },
              },
            ],
          },
          {
            sectionName: "Authentication",
            hidden: {
              path: "datasourceConfiguration.properties[0].value",
              comparison: "EQUALS",
              value: "Yes",
            },
            children: [
              {
                label: "Database Name",
                configProperty:
                  "datasourceConfiguration.authentication.databaseName",
                controlType: "INPUT_TEXT",
                placeholderText: "Database name",
                initialValue: "admin",
              },
              {
                label: "Authentication Type",
                configProperty:
                  "datasourceConfiguration.authentication.authType",
                controlType: "DROP_DOWN",
                initialValue: "SCRAM_SHA_1",
                options: [
                  {
                    label: "SCRAM-SHA-1",
                    value: "SCRAM_SHA_1",
                  },
                  {
                    label: "SCRAM-SHA-256",
                    value: "SCRAM_SHA_256",
                  },
                  {
                    label: "MONGODB-CR",
                    value: "MONGODB_CR",
                  },
                ],
              },
              {
                children: [
                  {
                    label: "Username",
                    configProperty:
                      "datasourceConfiguration.authentication.username",
                    controlType: "INPUT_TEXT",
                    placeholderText: "Username",
                  },
                  {
                    label: "Password",
                    configProperty:
                      "datasourceConfiguration.authentication.password",
                    dataType: "PASSWORD",
                    controlType: "INPUT_TEXT",
                    placeholderText: "Password",
                    encrypted: true,
                  },
                ],
              },
            ],
          },
          {
            sectionName: "SSL (optional)",
            hidden: {
              path: "datasourceConfiguration.properties[0].value",
              comparison: "EQUALS",
              value: "Yes",
            },
            children: [
              {
                label: "SSL Mode",
                configProperty:
                  "datasourceConfiguration.connection.ssl.authType",
                controlType: "DROP_DOWN",
                initialValue: "DEFAULT",
                options: [
                  {
                    label: "Default",
                    value: "DEFAULT",
                  },
                  {
                    label: "Enabled",
                    value: "ENABLED",
                  },
                  {
                    label: "Disabled",
                    value: "DISABLED",
                  },
                ],
              },
            ],
          },
        ],
        "5c9f512f96c1a50004819786": [
          {
            sectionName: "Connection",
            id: 1,
            children: [
              {
                label: "Connection Mode",
                configProperty: "datasourceConfiguration.connection.mode",
                controlType: "DROP_DOWN",
                isRequired: true,
                initialValue: "READ_WRITE",
                options: [
                  {
                    label: "Read Only",
                    value: "READ_ONLY",
                  },
                  {
                    label: "Read / Write",
                    value: "READ_WRITE",
                  },
                ],
              },
              {
                children: [
                  {
                    label: "Host Address",
                    configProperty: "datasourceConfiguration.endpoints[*].host",
                    controlType: "KEYVALUE_ARRAY",
                    validationMessage: "Please enter a valid host",
                    validationRegex: "^((?![/:]).)*$",
                  },
                  {
                    label: "Port",
                    configProperty: "datasourceConfiguration.endpoints[*].port",
                    dataType: "NUMBER",
                    controlType: "KEYVALUE_ARRAY",
                  },
                ],
              },
              {
                label: "Database Name",
                configProperty:
                  "datasourceConfiguration.authentication.databaseName",
                controlType: "INPUT_TEXT",
                placeholderText: "Database name",
                initialValue: "admin",
              },
            ],
          },
          {
            sectionName: "Authentication",
            id: 2,
            children: [
              {
                children: [
                  {
                    label: "Username",
                    configProperty:
                      "datasourceConfiguration.authentication.username",
                    controlType: "INPUT_TEXT",
                    placeholderText: "Username",
                  },
                  {
                    label: "Password",
                    configProperty:
                      "datasourceConfiguration.authentication.password",
                    dataType: "PASSWORD",
                    controlType: "INPUT_TEXT",
                    placeholderText: "Password",
                    encrypted: true,
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            sectionName: "SSL (optional)",
            children: [
              {
                label: "SSL Mode",
                configProperty:
                  "datasourceConfiguration.connection.ssl.authType",
                controlType: "DROP_DOWN",
                initialValue: "DEFAULT",
                options: [
                  {
                    label: "Default",
                    value: "DEFAULT",
                  },
                  {
                    label: "Allow",
                    value: "ALLOW",
                  },
                  {
                    label: "Prefer",
                    value: "PREFER",
                  },
                  {
                    label: "Require",
                    value: "REQUIRE",
                  },
                  {
                    label: "Disable",
                    value: "DISABLE",
                  },
                ],
              },
            ],
          },
        ],
        "5ca385dc81b37f0004b4db85": [
          {
            sectionName: "General",
            children: [
              {
                label: "URL",
                configProperty: "datasourceConfiguration.url",
                controlType: "INPUT_TEXT",
                isRequired: true,
                placeholderText: "https://example.com",
              },
              {
                label: "Headers",
                configProperty: "datasourceConfiguration.headers",
                controlType: "KEY_VAL_INPUT",
              },
              {
                label: "Send Authentication Information Key (Do not edit)",
                configProperty: "datasourceConfiguration.properties[0].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "isSendSessionEnabled",
              },
              {
                label: "Send Appsmith signature header (X-APPSMITH-SIGNATURE)",
                configProperty: "datasourceConfiguration.properties[0].value",
                controlType: "DROP_DOWN",
                isRequired: true,
                initialValue: "N",
                options: [
                  {
                    label: "Yes",
                    value: "Y",
                  },
                  {
                    label: "No",
                    value: "N",
                  },
                ],
              },
              {
                label: "Session Details Signature Key Key (Do not edit)",
                configProperty: "datasourceConfiguration.properties[1].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "sessionSignatureKey",
              },
              {
                label: "Session Details Signature Key",
                configProperty: "datasourceConfiguration.properties[1].value",
                controlType: "INPUT_TEXT",
                hidden: {
                  path: "datasourceConfiguration.properties[0].value",
                  comparison: "EQUALS",
                  value: "N",
                },
              },
              {
                label: "Authentication Type",
                configProperty:
                  "datasourceConfiguration.authentication.authenticationType",
                controlType: "DROP_DOWN",
                options: [
                  {
                    label: "None",
                    value: "dbAuth",
                  },
                  {
                    label: "Basic",
                    value: "basic",
                  },
                  {
                    label: "OAuth 2.0",
                    value: "oAuth2",
                  },
                  {
                    label: "API Key",
                    value: "apiKey",
                  },
                  {
                    label: "Bearer Token",
                    value: "bearerToken",
                  },
                ],
              },
              {
                label: "Grant Type",
                configProperty:
                  "datasourceConfiguration.authentication.grantType",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: true,
              },
              {
                label: "Access Token URL",
                configProperty:
                  "datasourceConfiguration.authentication.accessTokenUrl",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
              },
              {
                label: "Client Id",
                configProperty:
                  "datasourceConfiguration.authentication.clientId",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
              },
              {
                label: "Client Secret",
                configProperty:
                  "datasourceConfiguration.authentication.clientSecret",
                dataType: "PASSWORD",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
              },
              {
                label: "Scope(s)",
                configProperty:
                  "datasourceConfiguration.authentication.scopeString",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
              },
              {
                label: "Header Prefix",
                configProperty:
                  "datasourceConfiguration.authentication.headerPrefix",
                controlType: "INPUT_TEXT",
                placeholderText: "Bearer (default)",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
              },
              {
                label: "Add token to",
                configProperty:
                  "datasourceConfiguration.authentication.isTokenHeader",
                controlType: "DROP_DOWN",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
                options: [
                  {
                    label: "Header",
                    value: true,
                  },
                  {
                    label: "Query parameters",
                    value: false,
                  },
                ],
              },
              {
                label: "Audience(s)",
                configProperty:
                  "datasourceConfiguration.authentication.audience",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
              },
              {
                label: "Resource(s)",
                configProperty:
                  "datasourceConfiguration.authentication.resource",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
              },
            ],
          },
        ],
        "5fbbc39ad1f71d6666c32e4b": [
          {
            sectionName: "Details",
            id: 1,
            children: [
              {
                label: "Database URL",
                configProperty: "datasourceConfiguration.url",
                controlType: "INPUT_TEXT",
                isRequired: true,
                placeholderText: "https://your-project-id.firebaseio.com",
              },
              {
                label: "Project Id",
                configProperty:
                  "datasourceConfiguration.authentication.username",
                controlType: "INPUT_TEXT",
                isRequired: true,
                initialValue: "",
              },
              {
                label: "Service Account Credentials",
                configProperty:
                  "datasourceConfiguration.authentication.password",
                controlType: "INPUT_TEXT",
                dataType: "PASSWORD",
                isRequired: true,
                initialValue: "",
              },
            ],
          },
        ],
        "6080f9266b8cfd602957ba72": [
          {
            sectionName: "General",
            children: [
              {
                label: "Authentication Type",
                configProperty:
                  "datasourceConfiguration.authentication.authenticationType",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: true,
                initialValue: "oAuth2",
              },
              {
                label: "Grant Type",
                configProperty:
                  "datasourceConfiguration.authentication.grantType",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: true,
                initialValue: "authorization_code",
              },
              {
                label: "Scope",
                configProperty:
                  "datasourceConfiguration.authentication.scopeString",
                controlType: "DROP_DOWN",
                isRequired: true,
                options: [
                  {
                    label: "Read Only",
                    value:
                      "https://www.googleapis.com/auth/spreadsheets.readonly,https://www.googleapis.com/auth/drive.readonly",
                  },
                  {
                    label: "Read and Write",
                    value:
                      "https://www.googleapis.com/auth/spreadsheets,https://www.googleapis.com/auth/drive",
                  },
                ],
                initialValue:
                  "https://www.googleapis.com/auth/spreadsheets,https://www.googleapis.com/auth/drive",
              },
            ],
          },
        ],
        "6023b4a070eb652de19476d3": [
          {
            sectionName: "Details",
            id: 1,
            children: [
              {
                label: "S3 Service Provider Key",
                configProperty: "datasourceConfiguration.properties[1].key",
                controlType: "INPUT_TEXT",
                initialValue: "s3Provider",
                hidden: true,
              },
              {
                label: "S3 Service Provider",
                configProperty: "datasourceConfiguration.properties[1].value",
                controlType: "DROP_DOWN",
                isRequired: true,
                initialValue: "amazon-s3",
                options: [
                  {
                    label: "Amazon S3",
                    value: "amazon-s3",
                  },
                  {
                    label: "Upcloud",
                    value: "upcloud",
                  },
                  {
                    label: "Digital Ocean Spaces",
                    value: "digital-ocean-spaces",
                  },
                  {
                    label: "Wasabi",
                    value: "wasabi",
                  },
                  {
                    label: "DreamObjects",
                    value: "dream-objects",
                  },
                  {
                    label: "Other",
                    value: "other",
                  },
                ],
              },
              {
                label: "Access Key",
                configProperty:
                  "datasourceConfiguration.authentication.username",
                controlType: "INPUT_TEXT",
                initialValue: "",
              },
              {
                label: "Secret Key",
                configProperty:
                  "datasourceConfiguration.authentication.password",
                controlType: "INPUT_TEXT",
                dataType: "PASSWORD",
                initialValue: "",
                encrypted: true,
              },
              {
                label: "Endpoint URL",
                configProperty: "datasourceConfiguration.endpoints[0].host",
                controlType: "INPUT_TEXT",
                initialValue: "",
                placeholderText: "user-storage.de-fra1.upcloudobjects.com",
                hidden: {
                  path: "datasourceConfiguration.properties[1].value",
                  comparison: "EQUALS",
                  value: "amazon-s3",
                },
              },
              {
                label: "Custom Endpoint URL Key",
                configProperty: "datasourceConfiguration.properties[2].key",
                controlType: "INPUT_TEXT",
                initialValue: "customRegion",
                hidden: true,
              },
              {
                label: "Region",
                configProperty: "datasourceConfiguration.properties[2].value",
                controlType: "INPUT_TEXT",
                initialValue: "",
                placeholderText: "de-fra1",
                hidden: {
                  path: "datasourceConfiguration.properties[1].value",
                  comparison: "NOT_EQUALS",
                  value: "other",
                },
              },
            ],
          },
        ],
        "5f9169920c6d936f469f4c8a": [
          {
            sectionName: "Connection",
            id: 1,
            children: [
              {
                children: [
                  {
                    label: "Host Address",
                    configProperty: "datasourceConfiguration.endpoints[*].host",
                    controlType: "KEYVALUE_ARRAY",
                    validationMessage: "Please enter a valid host",
                    validationRegex: "^((?![/:]).)*$",
                  },
                  {
                    label: "Port",
                    configProperty: "datasourceConfiguration.endpoints[*].port",
                    dataType: "NUMBER",
                    controlType: "KEYVALUE_ARRAY",
                  },
                ],
              },
              {
                label: "Database Number",
                configProperty:
                  "datasourceConfiguration.authentication.databaseName",
                controlType: "INPUT_TEXT",
                dataType: "NUMBER",
                placeholderText: "0",
              },
            ],
          },
          {
            sectionName: "Authentication",
            id: 2,
            children: [
              {
                children: [
                  {
                    label: "Username",
                    configProperty:
                      "datasourceConfiguration.authentication.username",
                    controlType: "INPUT_TEXT",
                    placeholderText: "Username",
                  },
                  {
                    label: "Password",
                    configProperty:
                      "datasourceConfiguration.authentication.password",
                    dataType: "PASSWORD",
                    controlType: "INPUT_TEXT",
                    placeholderText: "Password",
                    encrypted: true,
                  },
                ],
              },
            ],
          },
        ],
        "6138c786168857325f78ef3e": [],
      },
      editorConfigs: {
        "5e687c18fb01e64e6a3f873f": [
          {
            options: [
              {
                label: "Find Document(s)",
                value: "FIND",
              },
              {
                label: "Insert Document(s)",
                value: "INSERT",
              },
              {
                label: "Update Document(s)",
                value: "UPDATE",
              },
              {
                label: "Delete Document(s)",
                value: "DELETE",
              },
              {
                label: "Count",
                value: "COUNT",
              },
              {
                label: "Distinct",
                value: "DISTINCT",
              },
              {
                label: "Aggregate",
                value: "AGGREGATE",
              },
              {
                label: "Raw",
                value: "RAW",
              },
            ],
            label: "Commands",
            description:
              "Choose method you would like to use to query the database",
            configProperty: "actionConfiguration.formData.command",
            controlType: "DROP_DOWN",
            initialValue: "FIND",
          },
          {
            controlType: "SECTION",
            label: "",
            _comment: "This section holds all the templates",
            children: [
              {
                identifier: "FIND",
                controlType: "SECTION",
                conditionals: {
                  show: "{{actionConfiguration.formData.command === 'FIND'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Collection to Query",
                    children: [
                      {
                        label: "Collection",
                        configProperty:
                          "actionConfiguration.formData.collection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Query",
                        configProperty:
                          "actionConfiguration.formData.find.query",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{rating : {$gte : 9}}",
                      },
                      {
                        label: "Sort",
                        configProperty:
                          "actionConfiguration.formData.find.sort",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{name : 1}",
                      },
                      {
                        label: "Projection",
                        configProperty:
                          "actionConfiguration.formData.find.projection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{name : 1}",
                      },
                      {
                        label: "Limit",
                        configProperty:
                          "actionConfiguration.formData.find.limit",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "10",
                      },
                      {
                        label: "Skip",
                        configProperty:
                          "actionConfiguration.formData.find.skip",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "0",
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "INSERT",
                controlType: "SECTION",
                conditionals: {
                  show: "{{actionConfiguration.formData.command === 'INSERT'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Collection to Query",
                    children: [
                      {
                        label: "Collection",
                        configProperty:
                          "actionConfiguration.formData.collection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Documents",
                        configProperty:
                          "actionConfiguration.formData.insert.documents",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText:
                          '[ { _id: 1, user: "abc123", status: "A" } ]',
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "UPDATE",
                controlType: "SECTION",
                conditionals: {
                  show: "{{actionConfiguration.formData.command === 'UPDATE'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Collection to Query",
                    children: [
                      {
                        label: "Collection",
                        configProperty:
                          "actionConfiguration.formData.collection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Query",
                        configProperty:
                          "actionConfiguration.formData.updateMany.query",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{rating : {$gte : 9}}",
                      },
                      {
                        label: "Update",
                        configProperty:
                          "actionConfiguration.formData.updateMany.update",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{ $inc: { score: 1 } }",
                      },
                      {
                        label: "Limit",
                        configProperty:
                          "actionConfiguration.formData.updateMany.limit",
                        controlType: "DROP_DOWN",
                        initialValue: "SINGLE",
                        options: [
                          {
                            label: "Single Document",
                            value: "SINGLE",
                          },
                          {
                            label: "All Matching Documents",
                            value: "ALL",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "DELETE",
                controlType: "SECTION",
                conditionals: {
                  show: "{{actionConfiguration.formData.command === 'DELETE'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Collection to Query",
                    children: [
                      {
                        label: "Collection",
                        configProperty:
                          "actionConfiguration.formData.collection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Query",
                        configProperty:
                          "actionConfiguration.formData.delete.query",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{rating : {$gte : 9}}",
                      },
                      {
                        label: "Limit",
                        configProperty:
                          "actionConfiguration.formData.delete.limit",
                        controlType: "DROP_DOWN",
                        initialValue: "SINGLE",
                        options: [
                          {
                            label: "Single Document",
                            value: "SINGLE",
                          },
                          {
                            label: "All Matching Documents",
                            value: "ALL",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "COUNT",
                controlType: "SECTION",
                conditionals: {
                  show: "{{actionConfiguration.formData.command === 'COUNT'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Collection to Query",
                    children: [
                      {
                        label: "Collection",
                        configProperty:
                          "actionConfiguration.formData.collection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Query",
                        configProperty:
                          "actionConfiguration.formData.count.query",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{rating : {$gte : 9}}",
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "DISTINCT",
                controlType: "SECTION",
                conditionals: {
                  show:
                    "{{actionConfiguration.formData.command === 'DISTINCT'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Collection to Query",
                    children: [
                      {
                        label: "Collection",
                        configProperty:
                          "actionConfiguration.formData.collection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Query",
                        configProperty:
                          "actionConfiguration.formData.distinct.query",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{rating : {$gte : 9}}",
                      },
                      {
                        label: "Key",
                        configProperty:
                          "actionConfiguration.formData.distinct.key",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "name",
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "AGGREGATE",
                controlType: "SECTION",
                conditionals: {
                  show:
                    "{{actionConfiguration.formData.command === 'AGGREGATE'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Collection to Query",
                    children: [
                      {
                        label: "Collection",
                        configProperty:
                          "actionConfiguration.formData.collection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Array of Pipelines",
                        configProperty:
                          "actionConfiguration.formData.aggregate.arrayPipelines",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText:
                          '[{ $project: { tags: 1 } }, { $unwind: "$tags" }, { $group: { _id: "$tags", count: { $sum : 1 } } }  ]',
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "RAW",
                controlType: "SECTION",
                conditionals: {
                  show: "{{actionConfiguration.formData.command === 'RAW'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "",
                        propertyName: "rawWithSmartSubstitute",
                        configProperty: "actionConfiguration.body",
                        controlType: "QUERY_DYNAMIC_TEXT",
                        evaluationSubstitutionType: "SMART_SUBSTITUTE",
                        conditionals: {
                          show:
                            "{{actionConfiguration.formData.command === 'RAW' && actionConfiguration.formData.smartSubstitution === true}}",
                        },
                      },
                      {
                        label: "",
                        configProperty: "actionConfiguration.body",
                        propertyName: "rawWithTemplateSubstitute",
                        controlType: "QUERY_DYNAMIC_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        conditionals: {
                          show:
                            "{{actionConfiguration.formData.command === 'RAW' && actionConfiguration.formData.smartSubstitution === false}}",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        "5c9f512f96c1a50004819786": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "",
                internalLabel: "Query",
                configProperty: "actionConfiguration.body",
                controlType: "QUERY_DYNAMIC_TEXT",
                evaluationSubstitutionType: "PARAMETER",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "EQUALS",
                  value: false,
                },
              },
              {
                label: "",
                internalLabel: "Query",
                configProperty: "actionConfiguration.body",
                controlType: "QUERY_DYNAMIC_TEXT",
                evaluationSubstitutionType: "TEMPLATE",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "EQUALS",
                  value: true,
                },
              },
              {
                label: "Use Prepared Statement",
                info:
                  "Turning on Prepared Statement makes your queries resilient against bad things like SQL injections. However, it cannot be used if your dynamic binding contains any SQL keywords like 'SELECT', 'WHERE', 'AND', etc.",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[0].value",
                controlType: "SWITCH",
                initialValue: true,
              },
            ],
          },
        ],
        "5ca385dc81b37f0004b4db85": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Path",
                configProperty: "actionConfiguration.path",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
              },
              {
                label: "Body",
                configProperty: "actionConfiguration.body",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                evaluationSubstitutionType: "SMART_SUBSTITUTE",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "EQUALS",
                  value: false,
                },
              },
              {
                label: "Body",
                configProperty: "actionConfiguration.body",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                evaluationSubstitutionType: "TEMPLATE",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "EQUALS",
                  value: true,
                },
              },
              {
                label: "Query Parameters",
                configProperty: "actionConfiguration.queryParameters",
                controlType: "ARRAY_FIELD",
                schema: [
                  {
                    label: "Key",
                    key: "key",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "Key",
                  },
                  {
                    label: "Value",
                    key: "value",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "Value",
                  },
                ],
              },
              {
                label: "Headers",
                configProperty: "actionConfiguration.headers",
                controlType: "ARRAY_FIELD",
                schema: [
                  {
                    label: "Key",
                    key: "key",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "Key",
                  },
                  {
                    label: "Value",
                    key: "value",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "Value",
                  },
                ],
              },
              {
                label: "Form data",
                configProperty: "actionConfiguration.bodyFormData",
                controlType: "ARRAY_FIELD",
                schema: [
                  {
                    label: "Key",
                    key: "key",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "Key",
                  },
                  {
                    label: "Value",
                    key: "value",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "Value",
                  },
                ],
              },
            ],
          },
        ],
        "5fbbc39ad1f71d6666c32e4b": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Method Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[0].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "method",
              },
              {
                label: "Method",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[0].value",
                controlType: "DROP_DOWN",
                isRequired: true,
                initialValue: "GET_DOCUMENT",
                options: [
                  {
                    label: "Get Single Document",
                    value: "GET_DOCUMENT",
                  },
                  {
                    label: "Get Documents in Collection",
                    value: "GET_COLLECTION",
                  },
                  {
                    label: "Set Document",
                    value: "SET_DOCUMENT",
                  },
                  {
                    label: "Create Document",
                    value: "CREATE_DOCUMENT",
                  },
                  {
                    label: "Add Document to Collection",
                    value: "ADD_TO_COLLECTION",
                  },
                  {
                    label: "Update Document",
                    value: "UPDATE_DOCUMENT",
                  },
                  {
                    label: "Delete Document",
                    value: "DELETE_DOCUMENT",
                  },
                ],
              },
              {
                label: "Collection/Document Path",
                configProperty: "actionConfiguration.path",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                isRequired: true,
                initialValue: "",
              },
              {
                label: "Timestamp Value Path Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[8].key",
                controlType: "INPUT_TEXT",
                initialValue: "timestampValuePath",
                hidden: true,
              },
              {
                label:
                  'Timestamp Value Path (use dot(.) notation to reference nested key e.g. ["key1.key2"])',
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[8].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                initialValue: "",
                placeholderText:
                  '["checkinLog.timestampKey", "auditLog.timestampKey"]',
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "IN",
                  value: ["GET_DOCUMENT", "GET_COLLECTION", "DELETE_DOCUMENT"],
                },
              },
              {
                label: "Delete Key Value Pair Path Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[9].key",
                controlType: "INPUT_TEXT",
                initialValue: "deleteKeyValuePairPath",
                hidden: true,
              },
              {
                label:
                  'Delete Key Value Pair Path (use dot(.) notation to reference nested key e.g. ["key1.key2"])',
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[9].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                initialValue: "",
                placeholderText:
                  '["userKey.nestedNamekey", "cityKey.nestedPincodeKey"]',
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "IN",
                  value: [
                    "GET_DOCUMENT",
                    "GET_COLLECTION",
                    "DELETE_DOCUMENT",
                    "CREATE_DOCUMENT",
                    "ADD_TO_COLLECTION",
                    "SET_DOCUMENT",
                  ],
                },
              },
              {
                label: "Order By Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[1].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "orderBy",
              },
              {
                label: "Order By (JSON array of field names to order by)",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[1].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_EQUALS",
                  value: "GET_COLLECTION",
                },
                placeholderText:
                  '["ascendingField", "-descendingField", "nestedObj.field"]',
                initialValue: "",
              },
              {
                label: "Start After Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[6].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "limit",
              },
              {
                label: "Start After",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[6].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_EQUALS",
                  value: "GET_COLLECTION",
                },
                initialValue: "",
              },
              {
                label: "End Before Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[7].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "limit",
              },
              {
                label: "End Before",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[7].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_EQUALS",
                  value: "GET_COLLECTION",
                },
                initialValue: "",
              },
              {
                label: "Limit Documents Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[2].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "limit",
              },
              {
                label: "Limit Documents",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[2].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_EQUALS",
                  value: "GET_COLLECTION",
                },
                initialValue: "10",
              },
              {
                label: "Where Conditions Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[3].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "whereConditionTuples",
              },
              {
                label: "Where Conditions",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[3].value",
                controlType: "ARRAY_FIELD",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_EQUALS",
                  value: "GET_COLLECTION",
                },
                schema: [
                  {
                    label: "Path",
                    key: "path",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "key1/nestedKey2",
                  },
                  {
                    label: "Operator",
                    key: "operator",
                    controlType: "DROP_DOWN",
                    initialValue: "EQ",
                    options: [
                      {
                        label: "<",
                        value: "LT",
                      },
                      {
                        label: "<=",
                        value: "LTE",
                      },
                      {
                        label: "==",
                        value: "EQ",
                      },
                      {
                        label: ">=",
                        value: "GTE",
                      },
                      {
                        label: ">",
                        value: "GT",
                      },
                      {
                        label: "array-contains",
                        value: "ARRAY_CONTAINS",
                      },
                      {
                        label: "in",
                        value: "IN",
                      },
                      {
                        label: "array-contains-any",
                        value: "ARRAY_CONTAINS_ANY",
                      },
                    ],
                  },
                  {
                    label: "Value",
                    key: "value",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "value",
                  },
                ],
              },
              {
                label: "Body",
                configProperty: "actionConfiguration.body",
                controlType: "QUERY_DYNAMIC_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "IN",
                  value: ["GET_DOCUMENT", "GET_COLLECTION", "DELETE_DOCUMENT"],
                },
              },
            ],
          },
        ],
        "6080f9266b8cfd602957ba72": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Method Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[0].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "method",
              },
              {
                label: "Method",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[0].value",
                controlType: "DROP_DOWN",
                isRequired: true,
                initialValue: "GET",
                options: [
                  {
                    label: "Fetch sheet rows",
                    value: "GET",
                  },
                  {
                    label: "Insert sheet row",
                    value: "APPEND",
                  },
                  {
                    label: "Update sheet row",
                    value: "UPDATE",
                  },
                  {
                    label: "Delete row",
                    value: "DELETE_ROW",
                  },
                  {
                    label: "List sheets",
                    value: "LIST",
                  },
                  {
                    label: "Fetch sheet",
                    value: "INFO",
                  },
                  {
                    label: "Create new spreadsheet",
                    value: "CREATE",
                  },
                  {
                    label: "Delete sheet",
                    value: "DELETE",
                  },
                  {
                    label: "Bulk insert rows",
                    value: "BULK_APPEND",
                  },
                  {
                    label: "Bulk update rows",
                    value: "BULK_UPDATE",
                  },
                ],
              },
              {
                label: "Spreadsheet URL Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[1].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "sheetUrl",
              },
              {
                label: "Spreadsheet URL",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[1].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "IN",
                  value: ["CREATE", "LIST"],
                },
                placeholderText:
                  "https://docs.google.com/spreadsheets/d/xyz/edit#gid=0",
                initialValue: "",
              },
              {
                label: "Spreadsheet Name Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[3].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "spreadsheetName",
              },
              {
                label: "Spreadsheet Name",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[3].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_IN",
                  value: ["CREATE"],
                },
                initialValue: "",
              },
              {
                label: "Delete Format Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[12].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "deleteFormat",
              },
              {
                label: "Select Entity",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[12].value",
                controlType: "DROP_DOWN",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_EQUALS",
                  value: "DELETE",
                },
                initialValue: "SHEET",
                options: [
                  {
                    label: "Single Sheet",
                    value: "SHEET",
                  },
                  {
                    label: "Entire Spreadsheet",
                    value: "SPREADSHEET",
                  },
                ],
              },
              {
                label: "Sheet Name Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[7].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "sheetName",
              },
              {
                label: "Sheet Name",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[7].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_IN",
                      value: [
                        "GET",
                        "UPDATE",
                        "BULK_UPDATE",
                        "DELETE_ROW",
                        "DELETE",
                        "APPEND",
                        "BULK_APPEND",
                      ],
                    },
                    {
                      conditionType: "AND",
                      conditions: [
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[0].value",
                          comparison: "EQUALS",
                          value: "DELETE",
                        },
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[12].value",
                          comparison: "EQUALS",
                          value: "SPREADSHEET",
                        },
                      ],
                    },
                  ],
                },
                initialValue: "Sheet1",
              },
              {
                label: "Table Header Index Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[4].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "tableHeaderIndex",
              },
              {
                label: "Table Heading Row Index",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[4].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_IN",
                  value: [
                    "GET",
                    "UPDATE",
                    "BULK_UPDATE",
                    "DELETE_ROW",
                    "APPEND",
                    "BULK_APPEND",
                  ],
                },
                initialValue: "1",
              },
              {
                label: "Query Format Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[5].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "queryFormat",
              },
              {
                label: "Query Format",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[5].value",
                controlType: "DROP_DOWN",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_IN",
                  value: ["GET"],
                },
                initialValue: "ROWS",
                options: [
                  {
                    label: "Query rows",
                    value: "ROWS",
                  },
                  {
                    label: "Query range",
                    value: "RANGE",
                  },
                ],
              },
              {
                label: "Range Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[2].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "range",
              },
              {
                label: "Cell Range",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[2].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_EQUALS",
                      value: "GET",
                    },
                    {
                      conditionType: "AND",
                      conditions: [
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[0].value",
                          comparison: "EQUALS",
                          value: "GET",
                        },
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[5].value",
                          comparison: "EQUALS",
                          value: "ROWS",
                        },
                      ],
                    },
                  ],
                },
                initialValue: "",
                placeholderText: "A2:B",
              },
              {
                label: "Row Offset Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[8].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "rowOffset",
              },
              {
                label: "Row Offset",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[8].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_IN",
                      value: ["GET"],
                    },
                    {
                      conditionType: "AND",
                      conditions: [
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[0].value",
                          comparison: "EQUALS",
                          value: "GET",
                        },
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[5].value",
                          comparison: "EQUALS",
                          value: "RANGE",
                        },
                      ],
                    },
                  ],
                },
                initialValue: "0",
                placeholderText: "0",
              },
              {
                label: "Row Index Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[11].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "rowIndex",
              },
              {
                label: "Row Index",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[11].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_IN",
                  value: ["DELETE_ROW"],
                },
                initialValue: "0",
                placeholderText: "0",
              },
              {
                label: "Row Limit Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[6].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "rowLimit",
              },
              {
                label: "Row Limit",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[6].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_EQUALS",
                      value: "GET",
                    },
                    {
                      conditionType: "AND",
                      conditions: [
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[0].value",
                          comparison: "EQUALS",
                          value: "GET",
                        },
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[5].value",
                          comparison: "EQUALS",
                          value: "RANGE",
                        },
                      ],
                    },
                  ],
                },
                initialValue: "10",
                placeholderText: "10",
              },
              {
                label: "Where Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[14].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "where",
              },
              {
                label: "Where Conditions",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[14].value",
                controlType: "ARRAY_FIELD",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_EQUALS",
                  value: "GET",
                },
                initialValue: [],
                schema: [
                  {
                    label: "Column Name",
                    key: "path",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "name",
                  },
                  {
                    label: "Operator",
                    key: "operator",
                    controlType: "DROP_DOWN",
                    initialValue: "EQ",
                    options: [
                      {
                        label: "<",
                        value: "LT",
                      },
                      {
                        label: "<=",
                        value: "LTE",
                      },
                      {
                        label: "==",
                        value: "EQ",
                      },
                      {
                        label: ">=",
                        value: "GTE",
                      },
                      {
                        label: ">",
                        value: "GT",
                      },
                      {
                        label: "in",
                        value: "IN",
                      },
                      {
                        label: "not in",
                        value: "NOT_IN",
                      },
                    ],
                  },
                  {
                    label: "Value",
                    key: "value",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "Tobias",
                  },
                ],
              },
              {
                label: "Row Object Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[9].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "rowObject",
              },
              {
                label: "Row Object",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[9].value",
                controlType: "QUERY_DYNAMIC_TEXT",
                evaluationSubstitutionType: "SMART_SUBSTITUTE",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_IN",
                      value: ["APPEND", "UPDATE"],
                    },
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[13].value",
                      comparison: "EQUALS",
                      value: false,
                    },
                  ],
                },
                placeholderText:
                  "{{\n  {\n    ...Table1.selectedRow, \n    columnName: Input1.text\n  }\n}}",
              },
              {
                label: "Row Object",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[9].value",
                controlType: "QUERY_DYNAMIC_TEXT",
                evaluationSubstitutionType: "SMART_SUBSTITUTE",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_IN",
                      value: ["APPEND", "UPDATE"],
                    },
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[13].value",
                      comparison: "EQUALS",
                      value: true,
                    },
                  ],
                },
                placeholderText:
                  "{{\n  {\n    ...Table1.selectedRow, \n    columnName: Input1.text\n  }\n}}",
              },
              {
                label: "Row Objects Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[10].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "rowObjects",
              },
              {
                label: "Row Objects",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[10].value",
                controlType: "QUERY_DYNAMIC_TEXT",
                evaluationSubstitutionType: "SMART_SUBSTITUTE",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_IN",
                      value: ["CREATE", "BULK_APPEND", "BULK_UPDATE"],
                    },
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[13].value",
                      comparison: "EQUALS",
                      value: false,
                    },
                  ],
                },
                placeholderText:
                  "{{\n  Table1.selectedRows.map((row) => {\n    return { ...row, columnName: Input1.text }\n  })\n}}",
              },
              {
                label: "Row Objects",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[10].value",
                controlType: "QUERY_DYNAMIC_TEXT",
                evaluationSubstitutionType: "SMART_SUBSTITUTE",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_IN",
                      value: ["CREATE", "BULK_APPEND", "BULK_UPDATE"],
                    },
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[13].value",
                      comparison: "EQUALS",
                      value: true,
                    },
                  ],
                },
                placeholderText:
                  "{{\n  Table1.selectedRows.map((row) => {\n    return { ...row, columnName: Input1.text }\n  })\n}}",
              },
              {
                label: "Smart JSON Substitution Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[13].key",
                hidden: true,
                controlType: "INPUT_TEXT",
                initialValue: "smartSubstitution",
              },
            ],
          },
        ],
        "6023b4a070eb652de19476d3": [
          {
            options: [
              {
                label: "List files in bucket",
                value: "LIST",
              },
              {
                label: "Create a new file",
                value: "UPLOAD_FILE_FROM_BODY",
              },
              {
                label: "Read file",
                value: "READ_FILE",
              },
              {
                label: "Delete file",
                value: "DELETE_FILE",
              },
            ],
            label: "Commands",
            description: "Choose method you would like to use",
            configProperty: "actionConfiguration.formData.command",
            controlType: "DROP_DOWN",
            initialValue: "LIST",
          },
          {
            controlType: "SECTION",
            label: "",
            _comment: "This section holds all the templates",
            children: [
              {
                identifier: "LIST",
                controlType: "SECTION",
                conditionals: {
                  show: "{{actionConfiguration.formData.command === 'LIST'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Bucket to Query",
                    children: [
                      {
                        label: "Bucket Name",
                        configProperty: "actionConfiguration.formData.bucket",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        isRequired: true,
                        initialValue: "",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Prefix",
                        configProperty:
                          "actionConfiguration.formData.list.prefix",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "",
                      },
                      {
                        label: "Where",
                        configProperty:
                          "actionConfiguration.formData.list.where",
                        nestedLevels: 3,
                        controlType: "WHERE_CLAUSE",
                        logicalTypes: [
                          {
                            label: "AND",
                            value: "AND",
                          },
                          {
                            label: "OR",
                            value: "OR",
                          },
                        ],
                        comparisonTypes: [
                          {
                            label: "==",
                            value: "EQ",
                          },
                          {
                            label: "!=",
                            value: "NOT_EQ",
                          },
                          {
                            label: "in",
                            value: "IN",
                          },
                          {
                            label: "not in",
                            value: "NOT_IN",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Options",
                    children: [
                      {
                        label: "Generate Signed URL",
                        configProperty:
                          "actionConfiguration.formData.list.signedUrl",
                        controlType: "DROP_DOWN",
                        initialValue: "NO",
                        options: [
                          {
                            label: "Yes",
                            value: "YES",
                          },
                          {
                            label: "No",
                            value: "NO",
                          },
                        ],
                      },
                      {
                        label: "Expiry Duration of Signed URL (Minutes)",
                        configProperty:
                          "actionConfiguration.formData.list.expiry",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "5",
                        conditionals: {
                          show:
                            "{{actionConfiguration.formData.list.signedUrl === 'YES'}}",
                        },
                      },
                      {
                        label: "Generate Un-signed URL",
                        configProperty:
                          "actionConfiguration.formData.list.unSignedUrl",
                        controlType: "DROP_DOWN",
                        initialValue: "YES",
                        options: [
                          {
                            label: "Yes",
                            value: "YES",
                          },
                          {
                            label: "No",
                            value: "NO",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "UPLOAD_FILE_FROM_BODY",
                controlType: "SECTION",
                conditionals: {
                  show:
                    "{{actionConfiguration.formData.command === 'UPLOAD_FILE_FROM_BODY'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Bucket to Query",
                    children: [
                      {
                        label: "Bucket Name",
                        configProperty: "actionConfiguration.formData.bucket",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        isRequired: true,
                        initialValue: "",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "File Path",
                        configProperty: "actionConfiguration.path",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "",
                      },
                      {
                        label: "File Data Type",
                        configProperty:
                          "actionConfiguration.formData.create.dataType",
                        controlType: "DROP_DOWN",
                        initialValue: "YES",
                        options: [
                          {
                            label: "Base64",
                            value: "YES",
                          },
                          {
                            label: "Text / Binary",
                            value: "NO",
                          },
                        ],
                      },
                      {
                        label: "Expiry Duration of Signed URL (Minutes)",
                        configProperty:
                          "actionConfiguration.formData.create.expiry",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "5",
                      },
                      {
                        label: "Content",
                        configProperty: "actionConfiguration.body",
                        controlType: "QUERY_DYNAMIC_TEXT",
                        initialValue: "",
                        placeHolderText: "{{ FilePicker1.files[0] }}",
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "READ_FILE",
                controlType: "SECTION",
                conditionals: {
                  show:
                    "{{actionConfiguration.formData.command === 'READ_FILE'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Bucket to Query",
                    children: [
                      {
                        label: "Bucket Name",
                        configProperty: "actionConfiguration.formData.bucket",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        isRequired: true,
                        initialValue: "",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "File Path",
                        configProperty: "actionConfiguration.path",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "",
                      },
                      {
                        label: "File Data Type",
                        configProperty:
                          "actionConfiguration.formData.read.dataType",
                        controlType: "DROP_DOWN",
                        initialValue: "YES",
                        options: [
                          {
                            label: "Base64",
                            value: "YES",
                          },
                          {
                            label: "Text / Binary",
                            value: "NO",
                          },
                        ],
                      },
                      {
                        label: "Expiry Duration of Signed URL (Minutes)",
                        configProperty:
                          "actionConfiguration.formData.read.expiry",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "5",
                      },
                      {
                        label: "Base64 Encode File - Yes/No",
                        configProperty:
                          "actionConfiguration.formData.read.usingBase64Encoding",
                        controlType: "DROP_DOWN",
                        initialValue: "YES",
                        options: [
                          {
                            label: "Yes",
                            value: "YES",
                          },
                          {
                            label: "No",
                            value: "NO",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "DELETE_FILE",
                controlType: "SECTION",
                conditionals: {
                  show:
                    "{{actionConfiguration.formData.command === 'DELETE_FILE'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Bucket to Query",
                    children: [
                      {
                        label: "Bucket Name",
                        configProperty: "actionConfiguration.formData.bucket",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        isRequired: true,
                        initialValue: "",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "File Path",
                        configProperty: "actionConfiguration.path",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "",
                      },
                      {
                        label: "Expiry Duration of Signed URL (Minutes)",
                        configProperty:
                          "actionConfiguration.formData.delete.expiry",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "5",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        "5f9169920c6d936f469f4c8a": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "",
                internalLabel: "Query",
                configProperty: "actionConfiguration.body",
                controlType: "QUERY_DYNAMIC_TEXT",
              },
            ],
          },
        ],
        "6138c786168857325f78ef3e": [],
      },
      settingConfigs: {
        "5e687c18fb01e64e6a3f873f": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Run query on page load",
                configProperty: "executeOnLoad",
                controlType: "SWITCH",
                info: "Will refresh data each time the page is loaded",
              },
              {
                label: "Request confirmation before running query",
                configProperty: "confirmBeforeExecute",
                controlType: "SWITCH",
                info:
                  "Ask confirmation from the user each time before refreshing data",
              },
              {
                label: "Smart BSON Substitution",
                info:
                  "Turning on this property fixes the BSON substitution of bindings in the Mongo BSON document by adding/removing quotes intelligently and reduces developer errors",
                configProperty:
                  "actionConfiguration.formData.smartSubstitution",
                controlType: "SWITCH",
                initialValue: true,
              },
              {
                label: "Query timeout (in milliseconds)",
                info: "Maximum time after which the query will return",
                configProperty: "actionConfiguration.timeoutInMillisecond",
                controlType: "INPUT_TEXT",
                dataType: "NUMBER",
              },
            ],
          },
        ],
        "5c9f512f96c1a50004819786": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Run query on page load",
                configProperty: "executeOnLoad",
                controlType: "SWITCH",
                info: "Will refresh data each time the page is loaded",
              },
              {
                label: "Request confirmation before running query",
                configProperty: "confirmBeforeExecute",
                controlType: "SWITCH",
                info:
                  "Ask confirmation from the user each time before refreshing data",
              },
              {
                label: "Use Prepared Statement",
                info:
                  "Turning on Prepared Statement makes your queries resilient against bad things like SQL injections. However, it cannot be used if your dynamic binding contains any SQL keywords like 'SELECT', 'WHERE', 'AND', etc.",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[0].value",
                controlType: "SWITCH",
                initialValue: true,
              },
              {
                label: "Query timeout (in milliseconds)",
                info: "Maximum time after which the query will return",
                configProperty: "actionConfiguration.timeoutInMillisecond",
                controlType: "INPUT_TEXT",
                dataType: "NUMBER",
              },
            ],
          },
        ],
        "5ca385dc81b37f0004b4db85": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Run API on Page load",
                configProperty: "executeOnLoad",
                controlType: "CHECKBOX",
                info: "Will refresh data each time the page is loaded",
              },
              {
                label: "Request confirmation before running API",
                configProperty: "confirmBeforeExecute",
                controlType: "CHECKBOX",
                info:
                  "Ask confirmation from the user each time before refreshing data",
              },
              {
                label: "Encode query params",
                configProperty: "actionConfiguration.encodeParamsToggle",
                controlType: "CHECKBOX",
                info:
                  "Encode query params for all APIs. Also encode form body when Content-Type header is set to x-www-form-encoded",
              },
              {
                label: "Smart JSON Substitution",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[0].value",
                controlType: "CHECKBOX",
                info:
                  "Turning on this property fixes the JSON substitution of bindings in API body by adding/removing quotes intelligently and reduces developer errors",
                initialValue: true,
              },
              {
                label: "API timeout (in milliseconds)",
                info: "Maximum time after which the API will return",
                configProperty: "actionConfiguration.timeoutInMillisecond",
                controlType: "NUMBER_INPUT",
                dataType: "number",
              },
            ],
          },
        ],
        "5fbbc39ad1f71d6666c32e4b": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Run query on page load",
                configProperty: "executeOnLoad",
                controlType: "SWITCH",
                info: "Will refresh data each time the page is loaded",
              },
              {
                label: "Request confirmation before running query",
                configProperty: "confirmBeforeExecute",
                controlType: "SWITCH",
                info:
                  "Ask confirmation from the user each time before refreshing data",
              },
              {
                label: "Query timeout (in milliseconds)",
                info: "Maximum time after which the query will return",
                configProperty: "actionConfiguration.timeoutInMillisecond",
                controlType: "INPUT_TEXT",
                dataType: "NUMBER",
              },
            ],
          },
        ],
        "6080f9266b8cfd602957ba72": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Run query on page load",
                configProperty: "executeOnLoad",
                controlType: "SWITCH",
                info: "Will refresh data each time the page is loaded",
              },
              {
                label: "Request confirmation before running query",
                configProperty: "confirmBeforeExecute",
                controlType: "SWITCH",
                info:
                  "Ask confirmation from the user each time before refreshing data",
              },
              {
                label: "Smart JSON Substitution",
                info:
                  "Turning on this property fixes the JSON substitution of bindings in the Row objects by adding/removing quotes intelligently and reduces developer errors",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[13].value",
                controlType: "SWITCH",
                initialValue: true,
              },
              {
                label: "Query timeout (in milliseconds)",
                info: "Maximum time after which the query will return",
                configProperty: "actionConfiguration.timeoutInMillisecond",
                controlType: "INPUT_TEXT",
                dataType: "NUMBER",
              },
            ],
          },
        ],
        "6023b4a070eb652de19476d3": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Run query on page load",
                configProperty: "executeOnLoad",
                controlType: "SWITCH",
                info: "Will refresh data each time the page is loaded",
              },
              {
                label: "Request confirmation before running query",
                configProperty: "confirmBeforeExecute",
                controlType: "SWITCH",
                info:
                  "Ask confirmation from the user each time before refreshing data",
              },
              {
                label: "Smart JSON Substitution",
                info:
                  "Turning on this property fixes the JSON substitution of bindings in the Content field by adding/removing quotes intelligently and reduces developer errors",
                configProperty:
                  "actionConfiguration.formData.smartSubstitution",
                controlType: "SWITCH",
                initialValue: true,
              },
              {
                label: "Query timeout (in milliseconds)",
                info: "Maximum time after which the query will return",
                configProperty: "actionConfiguration.timeoutInMillisecond",
                controlType: "INPUT_TEXT",
                dataType: "NUMBER",
              },
            ],
          },
        ],
        "5f9169920c6d936f469f4c8a": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Run query on page load",
                configProperty: "executeOnLoad",
                controlType: "SWITCH",
                info: "Will refresh data each time the page is loaded",
              },
              {
                label: "Request confirmation before running query",
                configProperty: "confirmBeforeExecute",
                controlType: "SWITCH",
                info:
                  "Ask confirmation from the user each time before refreshing data",
              },
              {
                label: "Query timeout (in milliseconds)",
                info: "Maximum time after which the query will return",
                configProperty: "actionConfiguration.timeoutInMillisecond",
                controlType: "INPUT_TEXT",
                dataType: "NUMBER",
              },
            ],
          },
        ],
        "6138c786168857325f78ef3e": [],
      },
      dependencies: undefined,
      fetchingSinglePluginForm: {},
    },
    meta: {},
    app: undefined,
    jsActions: [],
  },
};

const finalState = {
  entities: {
    actions: [
      {
        isLoading: false,
        config: {
          id: "6194d8e1abb49e2fd00812b2",
          organizationId: "5e1c5b2014edee5e49efc06c",
          pluginType: "SAAS",
          pluginId: "6080f9266b8cfd602957ba72",
          name: "Api1",
          datasource: {
            id: "6143187b6371c22cc093fdcf",
            userPermissions: [],
            pluginId: "6080f9266b8cfd602957ba72",
            messages: [],
            isValid: true,
            new: false,
          },
          pageId: "6194d8cdabb49e2fd00812b1",
          actionConfiguration: {
            timeoutInMillisecond: 10000,
            paginationType: "NONE",
            encodeParamsToggle: true,
            pluginSpecifiedTemplates: [
              {
                key: "method",
                value: "GET",
              },
              {
                key: "sheetUrl",
                value:
                  "https://docs.google.com/spreadsheets/d/1HYjlH7T4ii_NZzCg6LvGG0hnqfNOu35XSl-OTo_4K7Y/edit#gid=1562690580",
              },
              {
                key: "range",
                value: "",
              },
              {
                key: "spreadsheetName",
                value: "",
              },
              {
                key: "tableHeaderIndex",
                value: "1",
              },
              {
                key: "queryFormat",
                value: "ROWS",
              },
              {
                key: "rowLimit",
                value: "10",
              },
              {
                key: "sheetName",
                value: "Sheet1",
              },
              {
                key: "rowOffset",
                value: "0",
              },
              {
                key: "rowObject",
              },
              {
                key: "rowObjects",
              },
              {
                key: "rowIndex",
                value: "0",
              },
              {
                key: "deleteFormat",
                value: "SHEET",
              },
              {
                key: "smartSubstitution",
                value: true,
              },
              {
                key: "where",
                value: [{}],
              },
            ],
          },
          executeOnLoad: false,
          dynamicBindingPathList: [],
          isValid: true,
          invalids: [],
          messages: [],
          jsonPathKeys: [],
          confirmBeforeExecute: false,
          userPermissions: [
            "read:actions",
            "execute:actions",
            "manage:actions",
          ],
          validName: "Api1",
        },
      },
    ],
    datasources: undefined,
    pageList: undefined,
    jsExecutions: {},
    plugins: {
      list: [],
      loading: false,
      formConfigs: {
        "5e687c18fb01e64e6a3f873f": [
          {
            sectionName: "Connection",
            children: [
              {
                label: "Use Mongo Connection String URI Key",
                configProperty: "datasourceConfiguration.properties[0].key",
                controlType: "INPUT_TEXT",
                initialValue: "Use Mongo Connection String URI",
                hidden: true,
              },
              {
                label: "Use Mongo Connection String URI",
                configProperty: "datasourceConfiguration.properties[0].value",
                controlType: "DROP_DOWN",
                initialValue: "No",
                options: [
                  {
                    label: "Yes",
                    value: "Yes",
                  },
                  {
                    label: "No",
                    value: "No",
                  },
                ],
              },
              {
                label: "Connection String URI Key",
                configProperty: "datasourceConfiguration.properties[1].key",
                controlType: "INPUT_TEXT",
                initialValue: "Connection String URI",
                hidden: true,
              },
              {
                label: "Connection String URI",
                placeholderText:
                  "mongodb+srv://<username>:<password>@test-db.swrsq.mongodb.net/myDatabase",
                configProperty: "datasourceConfiguration.properties[1].value",
                controlType: "INPUT_TEXT",
                hidden: {
                  path: "datasourceConfiguration.properties[0].value",
                  comparison: "NOT_EQUALS",
                  value: "Yes",
                },
              },
              {
                label: "Connection Mode",
                configProperty: "datasourceConfiguration.connection.mode",
                controlType: "DROP_DOWN",
                initialValue: "READ_WRITE",
                options: [
                  {
                    label: "Read Only",
                    value: "READ_ONLY",
                  },
                  {
                    label: "Read / Write",
                    value: "READ_WRITE",
                  },
                ],
                hidden: {
                  path: "datasourceConfiguration.properties[0].value",
                  comparison: "EQUALS",
                  value: "Yes",
                },
              },
              {
                label: "Connection Type",
                configProperty: "datasourceConfiguration.connection.type",
                initialValue: "DIRECT",
                controlType: "DROP_DOWN",
                options: [
                  {
                    label: "Direct Connection",
                    value: "DIRECT",
                  },
                  {
                    label: "Replica set",
                    value: "REPLICA_SET",
                  },
                ],
                hidden: {
                  path: "datasourceConfiguration.properties[0].value",
                  comparison: "EQUALS",
                  value: "Yes",
                },
              },
              {
                children: [
                  {
                    label: "Host Address",
                    configProperty: "datasourceConfiguration.endpoints[*].host",
                    controlType: "KEYVALUE_ARRAY",
                    validationMessage: "Please enter a valid host",
                    validationRegex: "^((?![/:]).)*$",
                    placeholderText: "myapp.abcde.mongodb.net",
                    hidden: {
                      path: "datasourceConfiguration.properties[0].value",
                      comparison: "EQUALS",
                      value: "Yes",
                    },
                  },
                  {
                    label: "Port",
                    configProperty: "datasourceConfiguration.endpoints[*].port",
                    dataType: "NUMBER",
                    controlType: "KEYVALUE_ARRAY",
                    hidden: {
                      path: "datasourceConfiguration.properties[0].value",
                      comparison: "EQUALS",
                      value: "Yes",
                    },
                  },
                ],
              },
              {
                label: "Default Database Name",
                placeholderText: "(Optional)",
                configProperty:
                  "datasourceConfiguration.connection.defaultDatabaseName",
                controlType: "INPUT_TEXT",
                hidden: {
                  path: "datasourceConfiguration.properties[0].value",
                  comparison: "EQUALS",
                  value: "Yes",
                },
              },
            ],
          },
          {
            sectionName: "Authentication",
            hidden: {
              path: "datasourceConfiguration.properties[0].value",
              comparison: "EQUALS",
              value: "Yes",
            },
            children: [
              {
                label: "Database Name",
                configProperty:
                  "datasourceConfiguration.authentication.databaseName",
                controlType: "INPUT_TEXT",
                placeholderText: "Database name",
                initialValue: "admin",
              },
              {
                label: "Authentication Type",
                configProperty:
                  "datasourceConfiguration.authentication.authType",
                controlType: "DROP_DOWN",
                initialValue: "SCRAM_SHA_1",
                options: [
                  {
                    label: "SCRAM-SHA-1",
                    value: "SCRAM_SHA_1",
                  },
                  {
                    label: "SCRAM-SHA-256",
                    value: "SCRAM_SHA_256",
                  },
                  {
                    label: "MONGODB-CR",
                    value: "MONGODB_CR",
                  },
                ],
              },
              {
                children: [
                  {
                    label: "Username",
                    configProperty:
                      "datasourceConfiguration.authentication.username",
                    controlType: "INPUT_TEXT",
                    placeholderText: "Username",
                  },
                  {
                    label: "Password",
                    configProperty:
                      "datasourceConfiguration.authentication.password",
                    dataType: "PASSWORD",
                    controlType: "INPUT_TEXT",
                    placeholderText: "Password",
                    encrypted: true,
                  },
                ],
              },
            ],
          },
          {
            sectionName: "SSL (optional)",
            hidden: {
              path: "datasourceConfiguration.properties[0].value",
              comparison: "EQUALS",
              value: "Yes",
            },
            children: [
              {
                label: "SSL Mode",
                configProperty:
                  "datasourceConfiguration.connection.ssl.authType",
                controlType: "DROP_DOWN",
                initialValue: "DEFAULT",
                options: [
                  {
                    label: "Default",
                    value: "DEFAULT",
                  },
                  {
                    label: "Enabled",
                    value: "ENABLED",
                  },
                  {
                    label: "Disabled",
                    value: "DISABLED",
                  },
                ],
              },
            ],
          },
        ],
        "5c9f512f96c1a50004819786": [
          {
            sectionName: "Connection",
            id: 1,
            children: [
              {
                label: "Connection Mode",
                configProperty: "datasourceConfiguration.connection.mode",
                controlType: "DROP_DOWN",
                isRequired: true,
                initialValue: "READ_WRITE",
                options: [
                  {
                    label: "Read Only",
                    value: "READ_ONLY",
                  },
                  {
                    label: "Read / Write",
                    value: "READ_WRITE",
                  },
                ],
              },
              {
                children: [
                  {
                    label: "Host Address",
                    configProperty: "datasourceConfiguration.endpoints[*].host",
                    controlType: "KEYVALUE_ARRAY",
                    validationMessage: "Please enter a valid host",
                    validationRegex: "^((?![/:]).)*$",
                  },
                  {
                    label: "Port",
                    configProperty: "datasourceConfiguration.endpoints[*].port",
                    dataType: "NUMBER",
                    controlType: "KEYVALUE_ARRAY",
                  },
                ],
              },
              {
                label: "Database Name",
                configProperty:
                  "datasourceConfiguration.authentication.databaseName",
                controlType: "INPUT_TEXT",
                placeholderText: "Database name",
                initialValue: "admin",
              },
            ],
          },
          {
            sectionName: "Authentication",
            id: 2,
            children: [
              {
                children: [
                  {
                    label: "Username",
                    configProperty:
                      "datasourceConfiguration.authentication.username",
                    controlType: "INPUT_TEXT",
                    placeholderText: "Username",
                  },
                  {
                    label: "Password",
                    configProperty:
                      "datasourceConfiguration.authentication.password",
                    dataType: "PASSWORD",
                    controlType: "INPUT_TEXT",
                    placeholderText: "Password",
                    encrypted: true,
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            sectionName: "SSL (optional)",
            children: [
              {
                label: "SSL Mode",
                configProperty:
                  "datasourceConfiguration.connection.ssl.authType",
                controlType: "DROP_DOWN",
                initialValue: "DEFAULT",
                options: [
                  {
                    label: "Default",
                    value: "DEFAULT",
                  },
                  {
                    label: "Allow",
                    value: "ALLOW",
                  },
                  {
                    label: "Prefer",
                    value: "PREFER",
                  },
                  {
                    label: "Require",
                    value: "REQUIRE",
                  },
                  {
                    label: "Disable",
                    value: "DISABLE",
                  },
                ],
              },
            ],
          },
        ],
        "5ca385dc81b37f0004b4db85": [
          {
            sectionName: "General",
            children: [
              {
                label: "URL",
                configProperty: "datasourceConfiguration.url",
                controlType: "INPUT_TEXT",
                isRequired: true,
                placeholderText: "https://example.com",
              },
              {
                label: "Headers",
                configProperty: "datasourceConfiguration.headers",
                controlType: "KEY_VAL_INPUT",
              },
              {
                label: "Send Authentication Information Key (Do not edit)",
                configProperty: "datasourceConfiguration.properties[0].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "isSendSessionEnabled",
              },
              {
                label: "Send Appsmith signature header (X-APPSMITH-SIGNATURE)",
                configProperty: "datasourceConfiguration.properties[0].value",
                controlType: "DROP_DOWN",
                isRequired: true,
                initialValue: "N",
                options: [
                  {
                    label: "Yes",
                    value: "Y",
                  },
                  {
                    label: "No",
                    value: "N",
                  },
                ],
              },
              {
                label: "Session Details Signature Key Key (Do not edit)",
                configProperty: "datasourceConfiguration.properties[1].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "sessionSignatureKey",
              },
              {
                label: "Session Details Signature Key",
                configProperty: "datasourceConfiguration.properties[1].value",
                controlType: "INPUT_TEXT",
                hidden: {
                  path: "datasourceConfiguration.properties[0].value",
                  comparison: "EQUALS",
                  value: "N",
                },
              },
              {
                label: "Authentication Type",
                configProperty:
                  "datasourceConfiguration.authentication.authenticationType",
                controlType: "DROP_DOWN",
                options: [
                  {
                    label: "None",
                    value: "dbAuth",
                  },
                  {
                    label: "Basic",
                    value: "basic",
                  },
                  {
                    label: "OAuth 2.0",
                    value: "oAuth2",
                  },
                  {
                    label: "API Key",
                    value: "apiKey",
                  },
                  {
                    label: "Bearer Token",
                    value: "bearerToken",
                  },
                ],
              },
              {
                label: "Grant Type",
                configProperty:
                  "datasourceConfiguration.authentication.grantType",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: true,
              },
              {
                label: "Access Token URL",
                configProperty:
                  "datasourceConfiguration.authentication.accessTokenUrl",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
              },
              {
                label: "Client Id",
                configProperty:
                  "datasourceConfiguration.authentication.clientId",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
              },
              {
                label: "Client Secret",
                configProperty:
                  "datasourceConfiguration.authentication.clientSecret",
                dataType: "PASSWORD",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
              },
              {
                label: "Scope(s)",
                configProperty:
                  "datasourceConfiguration.authentication.scopeString",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
              },
              {
                label: "Header Prefix",
                configProperty:
                  "datasourceConfiguration.authentication.headerPrefix",
                controlType: "INPUT_TEXT",
                placeholderText: "Bearer (default)",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
              },
              {
                label: "Add token to",
                configProperty:
                  "datasourceConfiguration.authentication.isTokenHeader",
                controlType: "DROP_DOWN",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
                options: [
                  {
                    label: "Header",
                    value: true,
                  },
                  {
                    label: "Query parameters",
                    value: false,
                  },
                ],
              },
              {
                label: "Audience(s)",
                configProperty:
                  "datasourceConfiguration.authentication.audience",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
              },
              {
                label: "Resource(s)",
                configProperty:
                  "datasourceConfiguration.authentication.resource",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: {
                  path:
                    "datasourceConfiguration.authentication.authenticationType",
                  comparison: "NOT_EQUALS",
                  value: "oAuth2",
                },
              },
            ],
          },
        ],
        "5fbbc39ad1f71d6666c32e4b": [
          {
            sectionName: "Details",
            id: 1,
            children: [
              {
                label: "Database URL",
                configProperty: "datasourceConfiguration.url",
                controlType: "INPUT_TEXT",
                isRequired: true,
                placeholderText: "https://your-project-id.firebaseio.com",
              },
              {
                label: "Project Id",
                configProperty:
                  "datasourceConfiguration.authentication.username",
                controlType: "INPUT_TEXT",
                isRequired: true,
                initialValue: "",
              },
              {
                label: "Service Account Credentials",
                configProperty:
                  "datasourceConfiguration.authentication.password",
                controlType: "INPUT_TEXT",
                dataType: "PASSWORD",
                isRequired: true,
                initialValue: "",
              },
            ],
          },
        ],
        "6080f9266b8cfd602957ba72": [
          {
            sectionName: "General",
            children: [
              {
                label: "Authentication Type",
                configProperty:
                  "datasourceConfiguration.authentication.authenticationType",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: true,
                initialValue: "oAuth2",
              },
              {
                label: "Grant Type",
                configProperty:
                  "datasourceConfiguration.authentication.grantType",
                controlType: "INPUT_TEXT",
                isRequired: false,
                hidden: true,
                initialValue: "authorization_code",
              },
              {
                label: "Scope",
                configProperty:
                  "datasourceConfiguration.authentication.scopeString",
                controlType: "DROP_DOWN",
                isRequired: true,
                options: [
                  {
                    label: "Read Only",
                    value:
                      "https://www.googleapis.com/auth/spreadsheets.readonly,https://www.googleapis.com/auth/drive.readonly",
                  },
                  {
                    label: "Read and Write",
                    value:
                      "https://www.googleapis.com/auth/spreadsheets,https://www.googleapis.com/auth/drive",
                  },
                ],
                initialValue:
                  "https://www.googleapis.com/auth/spreadsheets,https://www.googleapis.com/auth/drive",
              },
            ],
          },
        ],
        "6023b4a070eb652de19476d3": [
          {
            sectionName: "Details",
            id: 1,
            children: [
              {
                label: "S3 Service Provider Key",
                configProperty: "datasourceConfiguration.properties[1].key",
                controlType: "INPUT_TEXT",
                initialValue: "s3Provider",
                hidden: true,
              },
              {
                label: "S3 Service Provider",
                configProperty: "datasourceConfiguration.properties[1].value",
                controlType: "DROP_DOWN",
                isRequired: true,
                initialValue: "amazon-s3",
                options: [
                  {
                    label: "Amazon S3",
                    value: "amazon-s3",
                  },
                  {
                    label: "Upcloud",
                    value: "upcloud",
                  },
                  {
                    label: "Digital Ocean Spaces",
                    value: "digital-ocean-spaces",
                  },
                  {
                    label: "Wasabi",
                    value: "wasabi",
                  },
                  {
                    label: "DreamObjects",
                    value: "dream-objects",
                  },
                  {
                    label: "Other",
                    value: "other",
                  },
                ],
              },
              {
                label: "Access Key",
                configProperty:
                  "datasourceConfiguration.authentication.username",
                controlType: "INPUT_TEXT",
                initialValue: "",
              },
              {
                label: "Secret Key",
                configProperty:
                  "datasourceConfiguration.authentication.password",
                controlType: "INPUT_TEXT",
                dataType: "PASSWORD",
                initialValue: "",
                encrypted: true,
              },
              {
                label: "Endpoint URL",
                configProperty: "datasourceConfiguration.endpoints[0].host",
                controlType: "INPUT_TEXT",
                initialValue: "",
                placeholderText: "user-storage.de-fra1.upcloudobjects.com",
                hidden: {
                  path: "datasourceConfiguration.properties[1].value",
                  comparison: "EQUALS",
                  value: "amazon-s3",
                },
              },
              {
                label: "Custom Endpoint URL Key",
                configProperty: "datasourceConfiguration.properties[2].key",
                controlType: "INPUT_TEXT",
                initialValue: "customRegion",
                hidden: true,
              },
              {
                label: "Region",
                configProperty: "datasourceConfiguration.properties[2].value",
                controlType: "INPUT_TEXT",
                initialValue: "",
                placeholderText: "de-fra1",
                hidden: {
                  path: "datasourceConfiguration.properties[1].value",
                  comparison: "NOT_EQUALS",
                  value: "other",
                },
              },
            ],
          },
        ],
        "5f9169920c6d936f469f4c8a": [
          {
            sectionName: "Connection",
            id: 1,
            children: [
              {
                children: [
                  {
                    label: "Host Address",
                    configProperty: "datasourceConfiguration.endpoints[*].host",
                    controlType: "KEYVALUE_ARRAY",
                    validationMessage: "Please enter a valid host",
                    validationRegex: "^((?![/:]).)*$",
                  },
                  {
                    label: "Port",
                    configProperty: "datasourceConfiguration.endpoints[*].port",
                    dataType: "NUMBER",
                    controlType: "KEYVALUE_ARRAY",
                  },
                ],
              },
              {
                label: "Database Number",
                configProperty:
                  "datasourceConfiguration.authentication.databaseName",
                controlType: "INPUT_TEXT",
                dataType: "NUMBER",
                placeholderText: "0",
              },
            ],
          },
          {
            sectionName: "Authentication",
            id: 2,
            children: [
              {
                children: [
                  {
                    label: "Username",
                    configProperty:
                      "datasourceConfiguration.authentication.username",
                    controlType: "INPUT_TEXT",
                    placeholderText: "Username",
                  },
                  {
                    label: "Password",
                    configProperty:
                      "datasourceConfiguration.authentication.password",
                    dataType: "PASSWORD",
                    controlType: "INPUT_TEXT",
                    placeholderText: "Password",
                    encrypted: true,
                  },
                ],
              },
            ],
          },
        ],
        "6138c786168857325f78ef3e": [],
      },
      editorConfigs: {
        "5e687c18fb01e64e6a3f873f": [
          {
            options: [
              {
                label: "Find Document(s)",
                value: "FIND",
              },
              {
                label: "Insert Document(s)",
                value: "INSERT",
              },
              {
                label: "Update Document(s)",
                value: "UPDATE",
              },
              {
                label: "Delete Document(s)",
                value: "DELETE",
              },
              {
                label: "Count",
                value: "COUNT",
              },
              {
                label: "Distinct",
                value: "DISTINCT",
              },
              {
                label: "Aggregate",
                value: "AGGREGATE",
              },
              {
                label: "Raw",
                value: "RAW",
              },
            ],
            label: "Commands",
            description:
              "Choose method you would like to use to query the database",
            configProperty: "actionConfiguration.formData.command",
            controlType: "DROP_DOWN",
            initialValue: "FIND",
          },
          {
            controlType: "SECTION",
            label: "",
            _comment: "This section holds all the templates",
            children: [
              {
                identifier: "FIND",
                controlType: "SECTION",
                conditionals: {
                  show: "{{actionConfiguration.formData.command === 'FIND'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Collection to Query",
                    children: [
                      {
                        label: "Collection",
                        configProperty:
                          "actionConfiguration.formData.collection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Query",
                        configProperty:
                          "actionConfiguration.formData.find.query",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{rating : {$gte : 9}}",
                      },
                      {
                        label: "Sort",
                        configProperty:
                          "actionConfiguration.formData.find.sort",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{name : 1}",
                      },
                      {
                        label: "Projection",
                        configProperty:
                          "actionConfiguration.formData.find.projection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{name : 1}",
                      },
                      {
                        label: "Limit",
                        configProperty:
                          "actionConfiguration.formData.find.limit",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "10",
                      },
                      {
                        label: "Skip",
                        configProperty:
                          "actionConfiguration.formData.find.skip",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "0",
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "INSERT",
                controlType: "SECTION",
                conditionals: {
                  show: "{{actionConfiguration.formData.command === 'INSERT'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Collection to Query",
                    children: [
                      {
                        label: "Collection",
                        configProperty:
                          "actionConfiguration.formData.collection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Documents",
                        configProperty:
                          "actionConfiguration.formData.insert.documents",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText:
                          '[ { _id: 1, user: "abc123", status: "A" } ]',
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "UPDATE",
                controlType: "SECTION",
                conditionals: {
                  show: "{{actionConfiguration.formData.command === 'UPDATE'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Collection to Query",
                    children: [
                      {
                        label: "Collection",
                        configProperty:
                          "actionConfiguration.formData.collection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Query",
                        configProperty:
                          "actionConfiguration.formData.updateMany.query",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{rating : {$gte : 9}}",
                      },
                      {
                        label: "Update",
                        configProperty:
                          "actionConfiguration.formData.updateMany.update",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{ $inc: { score: 1 } }",
                      },
                      {
                        label: "Limit",
                        configProperty:
                          "actionConfiguration.formData.updateMany.limit",
                        controlType: "DROP_DOWN",
                        initialValue: "SINGLE",
                        options: [
                          {
                            label: "Single Document",
                            value: "SINGLE",
                          },
                          {
                            label: "All Matching Documents",
                            value: "ALL",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "DELETE",
                controlType: "SECTION",
                conditionals: {
                  show: "{{actionConfiguration.formData.command === 'DELETE'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Collection to Query",
                    children: [
                      {
                        label: "Collection",
                        configProperty:
                          "actionConfiguration.formData.collection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Query",
                        configProperty:
                          "actionConfiguration.formData.delete.query",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{rating : {$gte : 9}}",
                      },
                      {
                        label: "Limit",
                        configProperty:
                          "actionConfiguration.formData.delete.limit",
                        controlType: "DROP_DOWN",
                        initialValue: "SINGLE",
                        options: [
                          {
                            label: "Single Document",
                            value: "SINGLE",
                          },
                          {
                            label: "All Matching Documents",
                            value: "ALL",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "COUNT",
                controlType: "SECTION",
                conditionals: {
                  show: "{{actionConfiguration.formData.command === 'COUNT'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Collection to Query",
                    children: [
                      {
                        label: "Collection",
                        configProperty:
                          "actionConfiguration.formData.collection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Query",
                        configProperty:
                          "actionConfiguration.formData.count.query",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{rating : {$gte : 9}}",
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "DISTINCT",
                controlType: "SECTION",
                conditionals: {
                  show:
                    "{{actionConfiguration.formData.command === 'DISTINCT'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Collection to Query",
                    children: [
                      {
                        label: "Collection",
                        configProperty:
                          "actionConfiguration.formData.collection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Query",
                        configProperty:
                          "actionConfiguration.formData.distinct.query",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "{rating : {$gte : 9}}",
                      },
                      {
                        label: "Key",
                        configProperty:
                          "actionConfiguration.formData.distinct.key",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText: "name",
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "AGGREGATE",
                controlType: "SECTION",
                conditionals: {
                  show:
                    "{{actionConfiguration.formData.command === 'AGGREGATE'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Collection to Query",
                    children: [
                      {
                        label: "Collection",
                        configProperty:
                          "actionConfiguration.formData.collection",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Array of Pipelines",
                        configProperty:
                          "actionConfiguration.formData.aggregate.arrayPipelines",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        inputType: "JSON",
                        evaluationSubstitutionType: "TEMPLATE",
                        placeholderText:
                          '[{ $project: { tags: 1 } }, { $unwind: "$tags" }, { $group: { _id: "$tags", count: { $sum : 1 } } }  ]',
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "RAW",
                controlType: "SECTION",
                conditionals: {
                  show: "{{actionConfiguration.formData.command === 'RAW'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "",
                        propertyName: "rawWithSmartSubstitute",
                        configProperty: "actionConfiguration.body",
                        controlType: "QUERY_DYNAMIC_TEXT",
                        evaluationSubstitutionType: "SMART_SUBSTITUTE",
                        conditionals: {
                          show:
                            "{{actionConfiguration.formData.command === 'RAW' && actionConfiguration.formData.smartSubstitution === true}}",
                        },
                      },
                      {
                        label: "",
                        configProperty: "actionConfiguration.body",
                        propertyName: "rawWithTemplateSubstitute",
                        controlType: "QUERY_DYNAMIC_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        conditionals: {
                          show:
                            "{{actionConfiguration.formData.command === 'RAW' && actionConfiguration.formData.smartSubstitution === false}}",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        "5c9f512f96c1a50004819786": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "",
                internalLabel: "Query",
                configProperty: "actionConfiguration.body",
                controlType: "QUERY_DYNAMIC_TEXT",
                evaluationSubstitutionType: "PARAMETER",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "EQUALS",
                  value: false,
                },
              },
              {
                label: "",
                internalLabel: "Query",
                configProperty: "actionConfiguration.body",
                controlType: "QUERY_DYNAMIC_TEXT",
                evaluationSubstitutionType: "TEMPLATE",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "EQUALS",
                  value: true,
                },
              },
              {
                label: "Use Prepared Statement",
                info:
                  "Turning on Prepared Statement makes your queries resilient against bad things like SQL injections. However, it cannot be used if your dynamic binding contains any SQL keywords like 'SELECT', 'WHERE', 'AND', etc.",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[0].value",
                controlType: "SWITCH",
                initialValue: true,
              },
            ],
          },
        ],
        "5ca385dc81b37f0004b4db85": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Path",
                configProperty: "actionConfiguration.path",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
              },
              {
                label: "Body",
                configProperty: "actionConfiguration.body",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                evaluationSubstitutionType: "SMART_SUBSTITUTE",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "EQUALS",
                  value: false,
                },
              },
              {
                label: "Body",
                configProperty: "actionConfiguration.body",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                evaluationSubstitutionType: "TEMPLATE",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "EQUALS",
                  value: true,
                },
              },
              {
                label: "Query Parameters",
                configProperty: "actionConfiguration.queryParameters",
                controlType: "ARRAY_FIELD",
                schema: [
                  {
                    label: "Key",
                    key: "key",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "Key",
                  },
                  {
                    label: "Value",
                    key: "value",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "Value",
                  },
                ],
              },
              {
                label: "Headers",
                configProperty: "actionConfiguration.headers",
                controlType: "ARRAY_FIELD",
                schema: [
                  {
                    label: "Key",
                    key: "key",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "Key",
                  },
                  {
                    label: "Value",
                    key: "value",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "Value",
                  },
                ],
              },
              {
                label: "Form data",
                configProperty: "actionConfiguration.bodyFormData",
                controlType: "ARRAY_FIELD",
                schema: [
                  {
                    label: "Key",
                    key: "key",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "Key",
                  },
                  {
                    label: "Value",
                    key: "value",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "Value",
                  },
                ],
              },
            ],
          },
        ],
        "5fbbc39ad1f71d6666c32e4b": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Method Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[0].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "method",
              },
              {
                label: "Method",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[0].value",
                controlType: "DROP_DOWN",
                isRequired: true,
                initialValue: "GET_DOCUMENT",
                options: [
                  {
                    label: "Get Single Document",
                    value: "GET_DOCUMENT",
                  },
                  {
                    label: "Get Documents in Collection",
                    value: "GET_COLLECTION",
                  },
                  {
                    label: "Set Document",
                    value: "SET_DOCUMENT",
                  },
                  {
                    label: "Create Document",
                    value: "CREATE_DOCUMENT",
                  },
                  {
                    label: "Add Document to Collection",
                    value: "ADD_TO_COLLECTION",
                  },
                  {
                    label: "Update Document",
                    value: "UPDATE_DOCUMENT",
                  },
                  {
                    label: "Delete Document",
                    value: "DELETE_DOCUMENT",
                  },
                ],
              },
              {
                label: "Collection/Document Path",
                configProperty: "actionConfiguration.path",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                isRequired: true,
                initialValue: "",
              },
              {
                label: "Timestamp Value Path Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[8].key",
                controlType: "INPUT_TEXT",
                initialValue: "timestampValuePath",
                hidden: true,
              },
              {
                label:
                  'Timestamp Value Path (use dot(.) notation to reference nested key e.g. ["key1.key2"])',
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[8].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                initialValue: "",
                placeholderText:
                  '["checkinLog.timestampKey", "auditLog.timestampKey"]',
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "IN",
                  value: ["GET_DOCUMENT", "GET_COLLECTION", "DELETE_DOCUMENT"],
                },
              },
              {
                label: "Delete Key Value Pair Path Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[9].key",
                controlType: "INPUT_TEXT",
                initialValue: "deleteKeyValuePairPath",
                hidden: true,
              },
              {
                label:
                  'Delete Key Value Pair Path (use dot(.) notation to reference nested key e.g. ["key1.key2"])',
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[9].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                initialValue: "",
                placeholderText:
                  '["userKey.nestedNamekey", "cityKey.nestedPincodeKey"]',
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "IN",
                  value: [
                    "GET_DOCUMENT",
                    "GET_COLLECTION",
                    "DELETE_DOCUMENT",
                    "CREATE_DOCUMENT",
                    "ADD_TO_COLLECTION",
                    "SET_DOCUMENT",
                  ],
                },
              },
              {
                label: "Order By Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[1].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "orderBy",
              },
              {
                label: "Order By (JSON array of field names to order by)",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[1].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_EQUALS",
                  value: "GET_COLLECTION",
                },
                placeholderText:
                  '["ascendingField", "-descendingField", "nestedObj.field"]',
                initialValue: "",
              },
              {
                label: "Start After Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[6].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "limit",
              },
              {
                label: "Start After",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[6].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_EQUALS",
                  value: "GET_COLLECTION",
                },
                initialValue: "",
              },
              {
                label: "End Before Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[7].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "limit",
              },
              {
                label: "End Before",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[7].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_EQUALS",
                  value: "GET_COLLECTION",
                },
                initialValue: "",
              },
              {
                label: "Limit Documents Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[2].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "limit",
              },
              {
                label: "Limit Documents",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[2].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_EQUALS",
                  value: "GET_COLLECTION",
                },
                initialValue: "10",
              },
              {
                label: "Where Conditions Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[3].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "whereConditionTuples",
              },
              {
                label: "Where Conditions",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[3].value",
                controlType: "ARRAY_FIELD",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_EQUALS",
                  value: "GET_COLLECTION",
                },
                schema: [
                  {
                    label: "Path",
                    key: "path",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "key1/nestedKey2",
                  },
                  {
                    label: "Operator",
                    key: "operator",
                    controlType: "DROP_DOWN",
                    initialValue: "EQ",
                    options: [
                      {
                        label: "<",
                        value: "LT",
                      },
                      {
                        label: "<=",
                        value: "LTE",
                      },
                      {
                        label: "==",
                        value: "EQ",
                      },
                      {
                        label: ">=",
                        value: "GTE",
                      },
                      {
                        label: ">",
                        value: "GT",
                      },
                      {
                        label: "array-contains",
                        value: "ARRAY_CONTAINS",
                      },
                      {
                        label: "in",
                        value: "IN",
                      },
                      {
                        label: "array-contains-any",
                        value: "ARRAY_CONTAINS_ANY",
                      },
                    ],
                  },
                  {
                    label: "Value",
                    key: "value",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "value",
                  },
                ],
              },
              {
                label: "Body",
                configProperty: "actionConfiguration.body",
                controlType: "QUERY_DYNAMIC_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "IN",
                  value: ["GET_DOCUMENT", "GET_COLLECTION", "DELETE_DOCUMENT"],
                },
              },
            ],
          },
        ],
        "6080f9266b8cfd602957ba72": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Method Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[0].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "method",
              },
              {
                label: "Method",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[0].value",
                controlType: "DROP_DOWN",
                isRequired: true,
                initialValue: "GET",
                options: [
                  {
                    label: "Fetch sheet rows",
                    value: "GET",
                  },
                  {
                    label: "Insert sheet row",
                    value: "APPEND",
                  },
                  {
                    label: "Update sheet row",
                    value: "UPDATE",
                  },
                  {
                    label: "Delete row",
                    value: "DELETE_ROW",
                  },
                  {
                    label: "List sheets",
                    value: "LIST",
                  },
                  {
                    label: "Fetch sheet",
                    value: "INFO",
                  },
                  {
                    label: "Create new spreadsheet",
                    value: "CREATE",
                  },
                  {
                    label: "Delete sheet",
                    value: "DELETE",
                  },
                  {
                    label: "Bulk insert rows",
                    value: "BULK_APPEND",
                  },
                  {
                    label: "Bulk update rows",
                    value: "BULK_UPDATE",
                  },
                ],
              },
              {
                label: "Spreadsheet URL Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[1].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "sheetUrl",
              },
              {
                label: "Spreadsheet URL",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[1].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "IN",
                  value: ["CREATE", "LIST"],
                },
                placeholderText:
                  "https://docs.google.com/spreadsheets/d/xyz/edit#gid=0",
                initialValue: "",
              },
              {
                label: "Spreadsheet Name Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[3].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "spreadsheetName",
              },
              {
                label: "Spreadsheet Name",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[3].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_IN",
                  value: ["CREATE"],
                },
                initialValue: "",
              },
              {
                label: "Delete Format Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[12].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "deleteFormat",
              },
              {
                label: "Select Entity",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[12].value",
                controlType: "DROP_DOWN",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_EQUALS",
                  value: "DELETE",
                },
                initialValue: "SHEET",
                options: [
                  {
                    label: "Single Sheet",
                    value: "SHEET",
                  },
                  {
                    label: "Entire Spreadsheet",
                    value: "SPREADSHEET",
                  },
                ],
              },
              {
                label: "Sheet Name Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[7].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "sheetName",
              },
              {
                label: "Sheet Name",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[7].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_IN",
                      value: [
                        "GET",
                        "UPDATE",
                        "BULK_UPDATE",
                        "DELETE_ROW",
                        "DELETE",
                        "APPEND",
                        "BULK_APPEND",
                      ],
                    },
                    {
                      conditionType: "AND",
                      conditions: [
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[0].value",
                          comparison: "EQUALS",
                          value: "DELETE",
                        },
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[12].value",
                          comparison: "EQUALS",
                          value: "SPREADSHEET",
                        },
                      ],
                    },
                  ],
                },
                initialValue: "Sheet1",
              },
              {
                label: "Table Header Index Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[4].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "tableHeaderIndex",
              },
              {
                label: "Table Heading Row Index",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[4].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_IN",
                  value: [
                    "GET",
                    "UPDATE",
                    "BULK_UPDATE",
                    "DELETE_ROW",
                    "APPEND",
                    "BULK_APPEND",
                  ],
                },
                initialValue: "1",
              },
              {
                label: "Query Format Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[5].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "queryFormat",
              },
              {
                label: "Query Format",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[5].value",
                controlType: "DROP_DOWN",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_IN",
                  value: ["GET"],
                },
                initialValue: "ROWS",
                options: [
                  {
                    label: "Query rows",
                    value: "ROWS",
                  },
                  {
                    label: "Query range",
                    value: "RANGE",
                  },
                ],
              },
              {
                label: "Range Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[2].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "range",
              },
              {
                label: "Cell Range",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[2].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_EQUALS",
                      value: "GET",
                    },
                    {
                      conditionType: "AND",
                      conditions: [
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[0].value",
                          comparison: "EQUALS",
                          value: "GET",
                        },
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[5].value",
                          comparison: "EQUALS",
                          value: "ROWS",
                        },
                      ],
                    },
                  ],
                },
                initialValue: "",
                placeholderText: "A2:B",
              },
              {
                label: "Row Offset Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[8].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "rowOffset",
              },
              {
                label: "Row Offset",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[8].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_IN",
                      value: ["GET"],
                    },
                    {
                      conditionType: "AND",
                      conditions: [
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[0].value",
                          comparison: "EQUALS",
                          value: "GET",
                        },
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[5].value",
                          comparison: "EQUALS",
                          value: "RANGE",
                        },
                      ],
                    },
                  ],
                },
                initialValue: "0",
                placeholderText: "0",
              },
              {
                label: "Row Index Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[11].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "rowIndex",
              },
              {
                label: "Row Index",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[11].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_IN",
                  value: ["DELETE_ROW"],
                },
                initialValue: "0",
                placeholderText: "0",
              },
              {
                label: "Row Limit Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[6].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "rowLimit",
              },
              {
                label: "Row Limit",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[6].value",
                controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_EQUALS",
                      value: "GET",
                    },
                    {
                      conditionType: "AND",
                      conditions: [
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[0].value",
                          comparison: "EQUALS",
                          value: "GET",
                        },
                        {
                          path:
                            "actionConfiguration.pluginSpecifiedTemplates[5].value",
                          comparison: "EQUALS",
                          value: "RANGE",
                        },
                      ],
                    },
                  ],
                },
                initialValue: "10",
                placeholderText: "10",
              },
              {
                label: "Where Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[14].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "where",
              },
              {
                label: "Where Conditions",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[14].value",
                controlType: "ARRAY_FIELD",
                hidden: {
                  path: "actionConfiguration.pluginSpecifiedTemplates[0].value",
                  comparison: "NOT_EQUALS",
                  value: "GET",
                },
                initialValue: [],
                schema: [
                  {
                    label: "Column Name",
                    key: "path",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "name",
                  },
                  {
                    label: "Operator",
                    key: "operator",
                    controlType: "DROP_DOWN",
                    initialValue: "EQ",
                    options: [
                      {
                        label: "<",
                        value: "LT",
                      },
                      {
                        label: "<=",
                        value: "LTE",
                      },
                      {
                        label: "==",
                        value: "EQ",
                      },
                      {
                        label: ">=",
                        value: "GTE",
                      },
                      {
                        label: ">",
                        value: "GT",
                      },
                      {
                        label: "in",
                        value: "IN",
                      },
                      {
                        label: "not in",
                        value: "NOT_IN",
                      },
                    ],
                  },
                  {
                    label: "Value",
                    key: "value",
                    controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                    placeholderText: "Tobias",
                  },
                ],
              },
              {
                label: "Row Object Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[9].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "rowObject",
              },
              {
                label: "Row Object",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[9].value",
                controlType: "QUERY_DYNAMIC_TEXT",
                evaluationSubstitutionType: "SMART_SUBSTITUTE",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_IN",
                      value: ["APPEND", "UPDATE"],
                    },
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[13].value",
                      comparison: "EQUALS",
                      value: false,
                    },
                  ],
                },
                placeholderText:
                  "{{\n  {\n    ...Table1.selectedRow, \n    columnName: Input1.text\n  }\n}}",
              },
              {
                label: "Row Object",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[9].value",
                controlType: "QUERY_DYNAMIC_TEXT",
                evaluationSubstitutionType: "SMART_SUBSTITUTE",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_IN",
                      value: ["APPEND", "UPDATE"],
                    },
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[13].value",
                      comparison: "EQUALS",
                      value: true,
                    },
                  ],
                },
                placeholderText:
                  "{{\n  {\n    ...Table1.selectedRow, \n    columnName: Input1.text\n  }\n}}",
              },
              {
                label: "Row Objects Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[10].key",
                controlType: "INPUT_TEXT",
                hidden: true,
                initialValue: "rowObjects",
              },
              {
                label: "Row Objects",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[10].value",
                controlType: "QUERY_DYNAMIC_TEXT",
                evaluationSubstitutionType: "SMART_SUBSTITUTE",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_IN",
                      value: ["CREATE", "BULK_APPEND", "BULK_UPDATE"],
                    },
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[13].value",
                      comparison: "EQUALS",
                      value: false,
                    },
                  ],
                },
                placeholderText:
                  "{{\n  Table1.selectedRows.map((row) => {\n    return { ...row, columnName: Input1.text }\n  })\n}}",
              },
              {
                label: "Row Objects",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[10].value",
                controlType: "QUERY_DYNAMIC_TEXT",
                evaluationSubstitutionType: "SMART_SUBSTITUTE",
                hidden: {
                  conditionType: "OR",
                  conditions: [
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[0].value",
                      comparison: "NOT_IN",
                      value: ["CREATE", "BULK_APPEND", "BULK_UPDATE"],
                    },
                    {
                      path:
                        "actionConfiguration.pluginSpecifiedTemplates[13].value",
                      comparison: "EQUALS",
                      value: true,
                    },
                  ],
                },
                placeholderText:
                  "{{\n  Table1.selectedRows.map((row) => {\n    return { ...row, columnName: Input1.text }\n  })\n}}",
              },
              {
                label: "Smart JSON Substitution Key",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[13].key",
                hidden: true,
                controlType: "INPUT_TEXT",
                initialValue: "smartSubstitution",
              },
            ],
          },
        ],
        "6023b4a070eb652de19476d3": [
          {
            options: [
              {
                label: "List files in bucket",
                value: "LIST",
              },
              {
                label: "Create a new file",
                value: "UPLOAD_FILE_FROM_BODY",
              },
              {
                label: "Read file",
                value: "READ_FILE",
              },
              {
                label: "Delete file",
                value: "DELETE_FILE",
              },
            ],
            label: "Commands",
            description: "Choose method you would like to use",
            configProperty: "actionConfiguration.formData.command",
            controlType: "DROP_DOWN",
            initialValue: "LIST",
          },
          {
            controlType: "SECTION",
            label: "",
            _comment: "This section holds all the templates",
            children: [
              {
                identifier: "LIST",
                controlType: "SECTION",
                conditionals: {
                  show: "{{actionConfiguration.formData.command === 'LIST'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Bucket to Query",
                    children: [
                      {
                        label: "Bucket Name",
                        configProperty: "actionConfiguration.formData.bucket",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        isRequired: true,
                        initialValue: "",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "Prefix",
                        configProperty:
                          "actionConfiguration.formData.list.prefix",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "",
                      },
                      {
                        label: "Where",
                        configProperty:
                          "actionConfiguration.formData.list.where",
                        nestedLevels: 3,
                        controlType: "WHERE_CLAUSE",
                        logicalTypes: [
                          {
                            label: "AND",
                            value: "AND",
                          },
                          {
                            label: "OR",
                            value: "OR",
                          },
                        ],
                        comparisonTypes: [
                          {
                            label: "==",
                            value: "EQ",
                          },
                          {
                            label: "!=",
                            value: "NOT_EQ",
                          },
                          {
                            label: "in",
                            value: "IN",
                          },
                          {
                            label: "not in",
                            value: "NOT_IN",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Options",
                    children: [
                      {
                        label: "Generate Signed URL",
                        configProperty:
                          "actionConfiguration.formData.list.signedUrl",
                        controlType: "DROP_DOWN",
                        initialValue: "NO",
                        options: [
                          {
                            label: "Yes",
                            value: "YES",
                          },
                          {
                            label: "No",
                            value: "NO",
                          },
                        ],
                      },
                      {
                        label: "Expiry Duration of Signed URL (Minutes)",
                        configProperty:
                          "actionConfiguration.formData.list.expiry",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "5",
                        conditionals: {
                          show:
                            "{{actionConfiguration.formData.list.signedUrl === 'YES'}}",
                        },
                      },
                      {
                        label: "Generate Un-signed URL",
                        configProperty:
                          "actionConfiguration.formData.list.unSignedUrl",
                        controlType: "DROP_DOWN",
                        initialValue: "YES",
                        options: [
                          {
                            label: "Yes",
                            value: "YES",
                          },
                          {
                            label: "No",
                            value: "NO",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "UPLOAD_FILE_FROM_BODY",
                controlType: "SECTION",
                conditionals: {
                  show:
                    "{{actionConfiguration.formData.command === 'UPLOAD_FILE_FROM_BODY'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Bucket to Query",
                    children: [
                      {
                        label: "Bucket Name",
                        configProperty: "actionConfiguration.formData.bucket",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        isRequired: true,
                        initialValue: "",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "File Path",
                        configProperty: "actionConfiguration.path",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "",
                      },
                      {
                        label: "File Data Type",
                        configProperty:
                          "actionConfiguration.formData.create.dataType",
                        controlType: "DROP_DOWN",
                        initialValue: "YES",
                        options: [
                          {
                            label: "Base64",
                            value: "YES",
                          },
                          {
                            label: "Text / Binary",
                            value: "NO",
                          },
                        ],
                      },
                      {
                        label: "Expiry Duration of Signed URL (Minutes)",
                        configProperty:
                          "actionConfiguration.formData.create.expiry",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "5",
                      },
                      {
                        label: "Content",
                        configProperty: "actionConfiguration.body",
                        controlType: "QUERY_DYNAMIC_TEXT",
                        initialValue: "",
                        placeHolderText: "{{ FilePicker1.files[0] }}",
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "READ_FILE",
                controlType: "SECTION",
                conditionals: {
                  show:
                    "{{actionConfiguration.formData.command === 'READ_FILE'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Bucket to Query",
                    children: [
                      {
                        label: "Bucket Name",
                        configProperty: "actionConfiguration.formData.bucket",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        isRequired: true,
                        initialValue: "",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "File Path",
                        configProperty: "actionConfiguration.path",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "",
                      },
                      {
                        label: "File Data Type",
                        configProperty:
                          "actionConfiguration.formData.read.dataType",
                        controlType: "DROP_DOWN",
                        initialValue: "YES",
                        options: [
                          {
                            label: "Base64",
                            value: "YES",
                          },
                          {
                            label: "Text / Binary",
                            value: "NO",
                          },
                        ],
                      },
                      {
                        label: "Expiry Duration of Signed URL (Minutes)",
                        configProperty:
                          "actionConfiguration.formData.read.expiry",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "5",
                      },
                      {
                        label: "Base64 Encode File - Yes/No",
                        configProperty:
                          "actionConfiguration.formData.read.usingBase64Encoding",
                        controlType: "DROP_DOWN",
                        initialValue: "YES",
                        options: [
                          {
                            label: "Yes",
                            value: "YES",
                          },
                          {
                            label: "No",
                            value: "NO",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                identifier: "DELETE_FILE",
                controlType: "SECTION",
                conditionals: {
                  show:
                    "{{actionConfiguration.formData.command === 'DELETE_FILE'}}",
                },
                children: [
                  {
                    controlType: "SECTION",
                    label: "Select Bucket to Query",
                    children: [
                      {
                        label: "Bucket Name",
                        configProperty: "actionConfiguration.formData.bucket",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        evaluationSubstitutionType: "TEMPLATE",
                        isRequired: true,
                        initialValue: "",
                      },
                    ],
                  },
                  {
                    controlType: "SECTION",
                    label: "Query",
                    description: "Optional",
                    children: [
                      {
                        label: "File Path",
                        configProperty: "actionConfiguration.path",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "",
                      },
                      {
                        label: "Expiry Duration of Signed URL (Minutes)",
                        configProperty:
                          "actionConfiguration.formData.delete.expiry",
                        controlType: "QUERY_DYNAMIC_INPUT_TEXT",
                        initialValue: "5",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        "5f9169920c6d936f469f4c8a": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "",
                internalLabel: "Query",
                configProperty: "actionConfiguration.body",
                controlType: "QUERY_DYNAMIC_TEXT",
              },
            ],
          },
        ],
        "6138c786168857325f78ef3e": [],
      },
      settingConfigs: {
        "5e687c18fb01e64e6a3f873f": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Run query on page load",
                configProperty: "executeOnLoad",
                controlType: "SWITCH",
                info: "Will refresh data each time the page is loaded",
              },
              {
                label: "Request confirmation before running query",
                configProperty: "confirmBeforeExecute",
                controlType: "SWITCH",
                info:
                  "Ask confirmation from the user each time before refreshing data",
              },
              {
                label: "Smart BSON Substitution",
                info:
                  "Turning on this property fixes the BSON substitution of bindings in the Mongo BSON document by adding/removing quotes intelligently and reduces developer errors",
                configProperty:
                  "actionConfiguration.formData.smartSubstitution",
                controlType: "SWITCH",
                initialValue: true,
              },
              {
                label: "Query timeout (in milliseconds)",
                info: "Maximum time after which the query will return",
                configProperty: "actionConfiguration.timeoutInMillisecond",
                controlType: "INPUT_TEXT",
                dataType: "NUMBER",
              },
            ],
          },
        ],
        "5c9f512f96c1a50004819786": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Run query on page load",
                configProperty: "executeOnLoad",
                controlType: "SWITCH",
                info: "Will refresh data each time the page is loaded",
              },
              {
                label: "Request confirmation before running query",
                configProperty: "confirmBeforeExecute",
                controlType: "SWITCH",
                info:
                  "Ask confirmation from the user each time before refreshing data",
              },
              {
                label: "Use Prepared Statement",
                info:
                  "Turning on Prepared Statement makes your queries resilient against bad things like SQL injections. However, it cannot be used if your dynamic binding contains any SQL keywords like 'SELECT', 'WHERE', 'AND', etc.",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[0].value",
                controlType: "SWITCH",
                initialValue: true,
              },
              {
                label: "Query timeout (in milliseconds)",
                info: "Maximum time after which the query will return",
                configProperty: "actionConfiguration.timeoutInMillisecond",
                controlType: "INPUT_TEXT",
                dataType: "NUMBER",
              },
            ],
          },
        ],
        "5ca385dc81b37f0004b4db85": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Run API on Page load",
                configProperty: "executeOnLoad",
                controlType: "CHECKBOX",
                info: "Will refresh data each time the page is loaded",
              },
              {
                label: "Request confirmation before running API",
                configProperty: "confirmBeforeExecute",
                controlType: "CHECKBOX",
                info:
                  "Ask confirmation from the user each time before refreshing data",
              },
              {
                label: "Encode query params",
                configProperty: "actionConfiguration.encodeParamsToggle",
                controlType: "CHECKBOX",
                info:
                  "Encode query params for all APIs. Also encode form body when Content-Type header is set to x-www-form-encoded",
              },
              {
                label: "Smart JSON Substitution",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[0].value",
                controlType: "CHECKBOX",
                info:
                  "Turning on this property fixes the JSON substitution of bindings in API body by adding/removing quotes intelligently and reduces developer errors",
                initialValue: true,
              },
              {
                label: "API timeout (in milliseconds)",
                info: "Maximum time after which the API will return",
                configProperty: "actionConfiguration.timeoutInMillisecond",
                controlType: "NUMBER_INPUT",
                dataType: "number",
              },
            ],
          },
        ],
        "5fbbc39ad1f71d6666c32e4b": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Run query on page load",
                configProperty: "executeOnLoad",
                controlType: "SWITCH",
                info: "Will refresh data each time the page is loaded",
              },
              {
                label: "Request confirmation before running query",
                configProperty: "confirmBeforeExecute",
                controlType: "SWITCH",
                info:
                  "Ask confirmation from the user each time before refreshing data",
              },
              {
                label: "Query timeout (in milliseconds)",
                info: "Maximum time after which the query will return",
                configProperty: "actionConfiguration.timeoutInMillisecond",
                controlType: "INPUT_TEXT",
                dataType: "NUMBER",
              },
            ],
          },
        ],
        "6080f9266b8cfd602957ba72": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Run query on page load",
                configProperty: "executeOnLoad",
                controlType: "SWITCH",
                info: "Will refresh data each time the page is loaded",
              },
              {
                label: "Request confirmation before running query",
                configProperty: "confirmBeforeExecute",
                controlType: "SWITCH",
                info:
                  "Ask confirmation from the user each time before refreshing data",
              },
              {
                label: "Smart JSON Substitution",
                info:
                  "Turning on this property fixes the JSON substitution of bindings in the Row objects by adding/removing quotes intelligently and reduces developer errors",
                configProperty:
                  "actionConfiguration.pluginSpecifiedTemplates[13].value",
                controlType: "SWITCH",
                initialValue: true,
              },
              {
                label: "Query timeout (in milliseconds)",
                info: "Maximum time after which the query will return",
                configProperty: "actionConfiguration.timeoutInMillisecond",
                controlType: "INPUT_TEXT",
                dataType: "NUMBER",
              },
            ],
          },
        ],
        "6023b4a070eb652de19476d3": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Run query on page load",
                configProperty: "executeOnLoad",
                controlType: "SWITCH",
                info: "Will refresh data each time the page is loaded",
              },
              {
                label: "Request confirmation before running query",
                configProperty: "confirmBeforeExecute",
                controlType: "SWITCH",
                info:
                  "Ask confirmation from the user each time before refreshing data",
              },
              {
                label: "Smart JSON Substitution",
                info:
                  "Turning on this property fixes the JSON substitution of bindings in the Content field by adding/removing quotes intelligently and reduces developer errors",
                configProperty:
                  "actionConfiguration.formData.smartSubstitution",
                controlType: "SWITCH",
                initialValue: true,
              },
              {
                label: "Query timeout (in milliseconds)",
                info: "Maximum time after which the query will return",
                configProperty: "actionConfiguration.timeoutInMillisecond",
                controlType: "INPUT_TEXT",
                dataType: "NUMBER",
              },
            ],
          },
        ],
        "5f9169920c6d936f469f4c8a": [
          {
            sectionName: "",
            id: 1,
            children: [
              {
                label: "Run query on page load",
                configProperty: "executeOnLoad",
                controlType: "SWITCH",
                info: "Will refresh data each time the page is loaded",
              },
              {
                label: "Request confirmation before running query",
                configProperty: "confirmBeforeExecute",
                controlType: "SWITCH",
                info:
                  "Ask confirmation from the user each time before refreshing data",
              },
              {
                label: "Query timeout (in milliseconds)",
                info: "Maximum time after which the query will return",
                configProperty: "actionConfiguration.timeoutInMillisecond",
                controlType: "INPUT_TEXT",
                dataType: "NUMBER",
              },
            ],
          },
        ],
        "6138c786168857325f78ef3e": [],
      },
      dependencies: undefined,
      fetchingSinglePluginForm: {},
    },
    meta: {},
    app: undefined,
    jsActions: [],
  },
};

describe("missing key: where", () => {
  test("getPathAndValueFromActionDiffObject() works correctly", () => {
    const apiId = initialState.entities.actions[0].config.id;
    const action = getAction(initialState, apiId);
    const initialValues = {};
    const { plugins } = initialState.entities;
    const { editorConfigs, settingConfigs } = plugins;
    const pluginId = action?.pluginId ?? "";
    let editorConfig;

    if (editorConfigs && pluginId) {
      editorConfig = editorConfigs[pluginId];
      if (editorConfig) {
        merge(initialValues, getConfigInitialValues(editorConfig));
      }
    }
    let settingConfig;

    if (settingConfigs && pluginId) {
      settingConfig = settingConfigs[pluginId];
    }
    merge(initialValues, getConfigInitialValues(settingConfig));
    merge(initialValues, action);

    const actionObjectDiff = diff(action, initialValues);

    const { path = "", value = "" } = {
      ...getPathAndValueFromActionDiffObject(actionObjectDiff),
    };

    expect(path).toBeTruthy();
    expect(value).toBeTruthy();
    expect(path).toMatch(/actionConfiguration.pluginSpecifiedTemplates/);

    const middlewares = [];
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);
    store.dispatch(
      setActionProperty({
        type: ReduxActionTypes.SET_ACTION_PROPERTY,
        payload: {
          actionId: apiId,
          propertyName: path,
          value: value,
        },
      }),
    );
    //TODO:
    setTimeout(() => {
      const stateAfterSetAction = store.getState();
      expect(stateAfterSetAction).toEqual(finalState);
    }, 2000);
  });
});
