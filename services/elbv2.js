//@flow strict
//@format

// https://docs.aws.amazon.com/cli/latest/reference/elbv2/describe-target-groups.html
module.exports.describeTargetGroups = (tgs /*: any */) => {
    return {
        TargetGroups: tgs.map(tg => ({
            TargetGroupName: 'my-targets',
            Protocol: 'HTTP',
            Port: 80,
            VpcId: 'vpc-3ac0fb5f',
            TargetType: 'instance',
            HealthCheckEnabled: true,
            UnhealthyThresholdCount: 2,
            HealthyThresholdCount: 5,
            HealthCheckPath: '/',
            Matcher: {
                HttpCode: '200',
            },
            HealthCheckProtocol: 'HTTP',
            HealthCheckPort: 'traffic-port',
            HealthCheckIntervalSeconds: 30,
            HealthCheckTimeoutSeconds: 5,
            TargetGroupArn:
                'arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067',
            LoadBalancerArns: [
                'arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188',
            ],
            ...tg,
        })),
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/elbv2/describe-target-health.html
module.exports.describeTargetHealth = (healthDescriptions /*: any */) => {
    return {
        TargetHealthDescriptions: healthDescriptions.map(health => ({
            HealthCheckPort: '80',
            Target: {
                Id: 'i-ceddcd4d',
                Port: 80,
            },
            TargetHealth: {
                State: 'healthy',
            },
            ...health,
        })),
    };
};
