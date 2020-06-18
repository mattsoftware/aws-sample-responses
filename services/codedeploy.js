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

