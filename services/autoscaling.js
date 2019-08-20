
// https://docs.aws.amazon.com/cli/latest/reference/autoscaling/describe-auto-scaling-groups.html
module.exports.describeAutoScalingGroups = groups => {
    return {
        "AutoScalingGroups": groups.map(v => ({
            "AutoScalingGroupARN": "arn:aws:autoscaling:us-west-2:123456789012:autoScalingGroup:930d940e-891e-4781-a11a-7b0acd480f03:autoScalingGroupName/my-auto-scaling-group",
            "HealthCheckGracePeriod": 300,
            "SuspendedProcesses": [],
            "DesiredCapacity": 1,
            "Tags": [],
            "EnabledMetrics": [],
            "LoadBalancerNames": [],
            "AutoScalingGroupName": "my-auto-scaling-group",
            "DefaultCooldown": 300,
            "MinSize": 0,
            "Instances": [
                {
                    "InstanceId": "i-4ba0837f",
                    "AvailabilityZone": "us-west-2c",
                    "HealthStatus": "Healthy",
                    "LifecycleState": "InService",
                    "LaunchConfigurationName": "my-launch-config"
                }
            ],
            "MaxSize": 1,
            "VPCZoneIdentifier": null,
            "TerminationPolicies": [
                "Default"
            ],
            "LaunchConfigurationName": "my-launch-config",
            "CreatedTime": "2013-08-19T20:53:25.584Z",
            "AvailabilityZones": [
                "us-west-2c"
            ],
            "HealthCheckType": "EC2",
            "NewInstancesProtectedFromScaleIn": false,
            ...v,
        })),
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/autoscaling/update-auto-scaling-group.html
module.exports.updateAutoScalingGroup = group => {
    // Actually, the result is None
    return {
        ...group,
    };
};


