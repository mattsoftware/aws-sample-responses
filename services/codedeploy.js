
// https://docs.aws.amazon.com/cli/latest/reference/deploy/get-deployment-group.html
// EDIT: autoScalingGroups may also be an object
module.exports.getDeploymentGroup = group => {
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

