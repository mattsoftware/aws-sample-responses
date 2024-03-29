//@flow strict

// https://docs.aws.amazon.com/cli/latest/reference/deploy/get-deployment.html
module.exports.getDeployment = (deployment/*:any*/) => {
    return {
        "deploymentInfo": {
            "applicationName": "WordPress_App",
            "status": "Succeeded",
            "deploymentOverview": {
                "Failed": 0,
                "InProgress": 0,
                "Skipped": 0,
                "Succeeded": 1,
                "Pending": 0
            },
            "deploymentConfigName": "CodeDeployDefault.OneAtATime",
            "creator": "user",
            "description": "My WordPress app deployment",
            "revision": {
                "revisionType": "S3",
                "s3Location":  {
                "bundleType": "zip",
                "eTag": "\"dd56cfdEXAMPLE8e768f9d77fEXAMPLE\"",
                "bucket": "CodeDeployDemoBucket",
                "key": "WordPressApp.zip"
                }
            },
            "deploymentId": "d-A1B2C3123",
            "deploymentGroupName": "WordPress_DG",
            "createTime": 1409764576.589,
            "completeTime": 1409764596.101,
            "ignoreApplicationStopFailures": false,
            ...deployment,
        },
    }
};

// https://docs.aws.amazon.com/cli/latest/reference/deploy/get-deployment-group.html
// EDIT: autoScalingGroups may also be an object
module.exports.getDeploymentGroup = (group/*:any*/) => {
    return {
        "deploymentGroupInfo": {
            "applicationName": "WordPress_App",
            "autoScalingGroups": [
                "CodeDeployDemo-ASG",
                {
                    "hook": "CodeDeploy-managed-automatic-launch-deployment-hook-WordPressDG-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                    "name": "CodeDeployDemo-ASG-2"
                }
            ],
            "deploymentConfigName": "CodeDeployDefault.OneAtATime",
            "ec2TagFilters": [
                {
                    "Type": "KEY_AND_VALUE",
                    "Value": "CodeDeployDemo",
                    "Key": "Name"
                }
            ],
            "deploymentGroupId": "a1b2c3d4-5678-90ab-cdef-11111EXAMPLE",
            "serviceRoleArn": "arn:aws:iam::123456789012:role/CodeDeployDemoRole",
            "deploymentGroupName": "WordPress_DG",
            ...group,
        }
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/deploy/get-deployment-target.html
module.exports.getDeploymentTarget = (target/*:any*/) => {
    return {
        "deploymentTarget": {
            "deploymentTargetType": "InstanceTarget",
            "instanceTarget": {
                "lastUpdatedAt": 1556918687.504,
                "targetId": "i-a1b2c3d4e5f611111",
                "targetArn": "arn:aws:ec2:us-west-2:123456789012:instance/i-a1b2c3d4e5f611111",
                "status": "Succeeded",
                "lifecycleEvents": [
                    {
                        "status": "Succeeded",
                        "diagnostics": {
                            "errorCode": "Success",
                            "message": "Succeeded",
                            "logTail": "",
                            "scriptName": ""
                        },
                        "lifecycleEventName": "ApplicationStop",
                        "startTime": 1556918592.162,
                        "endTime": 1556918592.247
                    },
                    {
                        "status": "Succeeded",
                        "diagnostics": {
                            "errorCode": "Success",
                            "message": "Succeeded",
                            "logTail": "",
                            "scriptName": ""
                        },
                        "lifecycleEventName": "DownloadBundle",
                        "startTime": 1556918593.193,
                        "endTime": 1556918593.981
                    },
                    {
                        "status": "Succeeded",
                        "diagnostics": {
                            "errorCode": "Success",
                            "message": "Succeeded",
                            "logTail": "",
                            "scriptName": ""
                        },
                        "lifecycleEventName": "BeforeInstall",
                        "startTime": 1556918594.805,
                        "endTime": 1556918681.807
                    },
                    {
                        "status": "Succeeded",
                        "diagnostics": {
                            "errorCode": "Success",
                            "message": "Succeeded",
                            "logTail": "",
                            "scriptName": ""
                        },
                        "lifecycleEventName": "Install",
                        "startTime": 1556918682.696,
                        "endTime": 1556918683.005
                    },
                    {
                        "status": "Succeeded",
                        "diagnostics": {
                            "errorCode": "Success",
                            "message": "Succeeded",
                            "logTail": "",
                            "scriptName": ""
                        },
                        "lifecycleEventName": "AfterInstall",
                        "startTime": 1556918684.135,
                        "endTime": 1556918684.216
                    },
                    {
                        "status": "Succeeded",
                        "diagnostics": {
                            "errorCode": "Success",
                            "message": "Succeeded",
                            "logTail": "",
                            "scriptName": ""
                        },
                        "lifecycleEventName": "ApplicationStart",
                        "startTime": 1556918685.211,
                        "endTime": 1556918685.295
                    },
                    {
                        "status": "Succeeded",
                        "diagnostics": {
                            "errorCode": "Success",
                            "message": "Succeeded",
                            "logTail": "",
                            "scriptName": ""
                        },
                        "lifecycleEventName": "ValidateService",
                        "startTime": 1556918686.65,
                        "endTime": 1556918686.747
                    }
                ],
                "deploymentId": "d-A1B2C3111",
                ...target
            }
        }
    };
}
