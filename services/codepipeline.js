
// https://docs.aws.amazon.com/cli/latest/reference/codepipeline/get-pipeline.html
module.exports.getPipeline = pipeline => {
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

