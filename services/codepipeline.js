//@flow strict

/*:: import type {AWS_CodePipeline_Job, AWS_CodePipeline_Job_Data, AWS_CodePipeline_Pipeline} from '../types/codepipeline.js' */


// https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutJobSuccessResult.html
module.exports.putJobSuccessResult = () => {
    return {};
};

// https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutJobFailureResult.html
module.exports.putJobFailureResult = () => {
    return {};
};

// https://docs.aws.amazon.com/cli/latest/reference/codepipeline/get-job-details.html
module.exports.getJobDetails = (details/*: any */, data/*:any*/) => {
    return {
        "jobDetails": {
          "accountId": "111111111111",
          "data": {
            "actionConfiguration": {
              "configuration": {
                "ProjectName": "MyJenkinsExampleTestProject"
                //"FunctionName": "MyLambdaFunctionName",
                //"UserParameters": "{\"testing\": true}"
              }
            },
            "actionTypeId": {
              "category": "Test",
              "owner": "Custom",
              "provider": "MyJenkinsProviderName",
              "version": "1"
              //"category": "Invoke",
              //"owner": "AWS",
              //"provider": "Lambda",
            },
            "artifactCredentials": {
              "accessKeyId": "AKIAIOSFODNN7EXAMPLE",
              "secretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
              "sessionToken": "fICCQD6m7oRw0uXOjANBgkqhkiG9w0BAQUFADCBiDELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAldBMRAwDgYDVQQHEwdTZWF0dGxlMQ8wDQYDVQQKEwZBbWF6b24xFDASBgNVBAsTC0lBTSBDb25zb2xlMRIwEAYDVQQDEwlUZXN0Q2lsYWMxHzAdBgkqhkiG9w0BCQEWEG5vb25lQGFtYXpvbi5jb20wHhcNMTEwNDI1MjA0NTIxWhcNMTIwNDI0MjA0NTIxWjCBiDELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAldBMRAwDgYDVQQHEwdTZWF0dGxlMQ8wDQYDVQQKEwZBbWF6b24xFDASBgNVBAsTC0lBTSBDb25zb2xlMRIwEAYDVQQDEwlUZXN0Q2lsYWMxHzAdBgkqhkiG9w0BCQEWEG5vb25lQGFtYXpvbi5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMaK0dn+a4GmWIWJ21uUSfwfEvySWtC2XADZ4nB+BLYgVIk60CpiwsZ3G93vUEIO3IyNoH/f0wYK8m9TrDHudUZg3qX4waLG5M43q7Wgc/MbQITxOUSQv7c7ugFFDzQGBzZswY6786m86gpEIbb3OhjZnzcvQAaRHhdlQWIMm2nrAgMBAAEwDQYJKoZIhvcNAQEFBQADgYEAtCu4nUhVVxYUntneD9+h8Mg9q6q+auNKyExzyLwaxlAoo7TJHidbtS4J5iNmZgXL0FkbFFBjvSfpJIlJ00zbhNYS5f6GuoEDmFJl0ZxBHjJnyp378OD8uTs7fLvjx79LjSTbNYiytVbZPQUQ5Yaxu2jXnimvw3rrszlaEXAMPLE="
            },
            "inputArtifacts": [
              {
                "location": {
                  "s3Location": {
                    "bucketName": "codepipeline-us-east-1-11EXAMPLE11",
                    "objectKey": "MySecondPipeline/MyAppBuild/EXAMPLE"
                  },
                  "type": "S3"
                },
                "name": "MyAppBuild"
              }
            ],
            "outputArtifacts": [],
            "pipelineContext": {
              "action": {
                "name": "MyJenkinsTest-Action"
                //"actionExecutionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
              },
              "pipelineName": "MySecondPipeline",
              "stage": {
                "name": "Testing"
                //"name": "Build"
              },
              //"pipelineArn": "arn:aws:codepipeline:ap-southeast-2:232528047142:MyPipeline",
              "pipelineExecutionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // real world example
            },
            //"encryptionKey": {
            //    "id": "arn:aws:kms:ap-southeast-2:1:key/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            //    "type": "KMS"
            //}
            ...data,
          },
          "id": "f4f4ff82-2d11-EXAMPLE",
          ...details,
        }
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/codepipeline/get-pipeline.html
module.exports.getPipeline = (pipeline /*: AWS_CodePipeline_Pipeline*/) => {
    return {
        "pipeline": {
            "roleArn": "arn:aws:iam::111111111111:role/AWS-CodePipeline-Service",
            "stages": [
                {
                    "name": "Source",
                    "actions": [
                        {
                            "inputArtifacts": [],
                            "name": "Source",
                            "actionTypeId": {
                                "category": "Source",
                                "owner": "AWS",
                                "version": "1",
                                "provider": "S3"
                            },
                            "outputArtifacts": [
                                {
                                    "name": "MyApp"
                                }
                            ],
                            "configuration": {
                                "S3Bucket": "awscodepipeline-demo-bucket",
                                "S3ObjectKey": "aws-codepipeline-s3-aws-codedeploy_linux.zip"
                            },
                            "runOrder": 1
                        }
                    ]
                },
                {
                    "name": "Beta",
                    "actions": [
                        {
                            "inputArtifacts": [
                                {
                                    "name": "MyApp"
                                }
                            ],
                            "name": "CodePipelineDemoFleet",
                            "actionTypeId": {
                                "category": "Deploy",
                                "owner": "AWS",
                                "version": "1",
                                "provider": "CodeDeploy"
                            },
                            "outputArtifacts": [],
                            "configuration": {
                                "ApplicationName": "CodePipelineDemoApplication",
                                "DeploymentGroupName": "CodePipelineDemoFleet"
                            },
                            "runOrder": 1
                        }
                    ]
                }
            ],
            "artifactStore": {
                "type": "S3",
                "location": "codepipeline-us-east-1-11EXAMPLE11"
            },
            "name": "MyFirstPipeline",
            "version": 1,
            ...pipeline,
        }
    };
};

// https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListActionExecutions.html
module.exports.listActionExecutions = (details/*: Array<Object> */) /*: {} */ => {
    return {
       "actionExecutionDetails": details.map(v => (
          {
             "actionExecutionId": "xxxxxx-xxxx-xxxxxxxx-xxxxxx",
             "actionName": "MyAction",
             "input": { 
                "actionTypeId": { 
                   "category": "Deploy",
                   "owner": "11111111",
                   "provider": "AWS",
                   "version": "1"
                },
                "configuration": {
                },
                "inputArtifacts": [ 
                   { 
                      "name": "test",
                      "s3location": { 
                         "bucket": "testbucket",
                         "key": "test/deploy"
                      }
                   }
                ],
                "namespace": "testNamespace",
                "region": "ap-southeast-2",
                "resolvedConfiguration": { 
                },
                "roleArn": "arn:aws:iam::11111111:role/TestDeployRole"
             },
             "lastUpdateTime": 1592011736,
             "output": {
                "executionResult": {
                   "externalExecutionId": "xxxxxxx-xxxxxx-xxxxxxxxx-xxx",
                   "externalExecutionSummary": "Success",
                   "externalExecutionUrl": "http://execution.com/result.html"
                },
                "outputArtifacts": [
                   {
                      "name": "testoutput",
                      "s3location": { 
                         "bucket": "testbucket",
                         "key": "test/output"
                      }
                   }
                ],
                "outputVariables": {
                }
             },
             "pipelineExecutionId": "yyyyy-yyyyyyy-yyy",
             "pipelineVersion": 1,
             "stageName": "Deploy",
             "startTime": 1592011736,
             "status": "Success",
              ...v
          }
       )),
    };
};

// https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListPipelineExecutions.html
module.exports.listPipelineExecutions = (summaries/*: Array<Object> */) /*: {} */ => {
    return {
        pipelineExecutionSummaries: summaries.map(v => (
            {
                "pipelineExecutionId": "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy",
                "status": "Succeeded",
                "startTime": "2020-06-18T13:50:26.668000+10:00",
                "lastUpdateTime": "2020-06-18T14:15:57.834000+10:00",
                "sourceRevisions": [
                    {
                        "actionName": "ActionOne",
                        "revisionId": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                        "revisionSummary": "Amazon S3 version id: zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
                    },
                    {
                        "actionName": "ActionTwo",
                        "revisionId": "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv",
                        "revisionSummary": "Amazon S3 version id: uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"
                    }
                ],
                "trigger": {
                    "triggerType": "CloudWatchEvent",
                    "triggerDetail": "arn:aws:events:ap-southeast-2:111111111111:rule/DeploymentWatch"
                },
                ...v,
            }
        )),
    };
};

// https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-invoke-lambda-function.html#actions-invoke-lambda-function-json-event-example
module.exports.event_job = (job/*: AWS_CodePipeline_Job */, jobData/*: AWS_CodePipeline_Job_Data */, userParams/*:string*/) => {
    return ({
        "CodePipeline.job": {
            "id": "11111111-abcd-1111-abcd-111111abcdef",
            "accountId": "111111111111",
            "data": {
                "actionConfiguration": {
                    "configuration": {
                        "FunctionName": "MyLambdaFunctionForAWSCodePipeline",
                        "UserParameters": userParams
                    }
                },
                "inputArtifacts": [
                    {
                        "location": {
                            "s3Location": {
                                "bucketName": "the name of the bucket configured as the pipeline artifact store in Amazon S3, for example codepipeline-us-east-2-1234567890",
                                "objectKey": "the name of the application, for example CodePipelineDemoApplication.zip"
                            },
                            "type": "S3"
                        },
                        "revision": null,
                        "name": "ArtifactName"
                    }
                ],
                "outputArtifacts": [],
                "artifactCredentials": {
                    "secretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
                    "sessionToken": `MIICiTCCAfICCQD6m7oRw0uXOjANBgkqhkiG9w
     0BAQUFADCBiDELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAldBMRAwDgYDVQQHEwdTZ
     WF0dGxlMQ8wDQYDVQQKEwZBbWF6b24xFDASBgNVBAsTC0lBTSBDb25zb2xlMRIw
     EAYDVQQDEwlUZXN0Q2lsYWMxHzAdBgkqhkiG9w0BCQEWEG5vb25lQGFtYXpvbi5
     jb20wHhcNMTEwNDI1MjA0NTIxWhcNMTIwNDI0MjA0NTIxWjCBiDELMAkGA1UEBh
     MCVVMxCzAJBgNVBAgTAldBMRAwDgYDVQQHEwdTZWF0dGxlMQ8wDQYDVQQKEwZBb
     WF6b24xFDASBgNVBAsTC0lBTSBDb25zb2xlMRIwEAYDVQQDEwlUZXN0Q2lsYWMx
     HzAdBgkqhkiG9w0BCQEWEG5vb25lQGFtYXpvbi5jb20wgZ8wDQYJKoZIhvcNAQE
     BBQADgY0AMIGJAoGBAMaK0dn+a4GmWIWJ21uUSfwfEvySWtC2XADZ4nB+BLYgVI
     k60CpiwsZ3G93vUEIO3IyNoH/f0wYK8m9TrDHudUZg3qX4waLG5M43q7Wgc/MbQ
     ITxOUSQv7c7ugFFDzQGBzZswY6786m86gpEIbb3OhjZnzcvQAaRHhdlQWIMm2nr
     AgMBAAEwDQYJKoZIhvcNAQEFBQADgYEAtCu4nUhVVxYUntneD9+h8Mg9q6q+auN
     KyExzyLwaxlAoo7TJHidbtS4J5iNmZgXL0FkbFFBjvSfpJIlJ00zbhNYS5f6Guo
     EDmFJl0ZxBHjJnyp378OD8uTs7fLvjx79LjSTbNYiytVbZPQUQ5Yaxu2jXnimvw
     3rrszlaEXAMPLE=`,
                    "accessKeyId": "AKIAIOSFODNN7EXAMPLE"
                },
                "continuationToken": "A continuation token if continuing job",
                "encryptionKey": {
                  "id": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
                  "type": "KMS"
                },
                ...jobData,
            },
            ...job,
        }
    });
};

