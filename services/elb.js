//@flow strict
//@format

// https://docs.aws.amazon.com/cli/latest/reference/elb/deregister-instances-from-load-balancer.html
module.exports.deregisterInstancesFromLoadBalancer = (instanceIds /*:Array<string>*/) /*:any*/ => {
    return {
        Instances: instanceIds.map(iid => ({
            InstanceId: iid,
        })),
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/elb/describe-load-balancers.html
module.exports.describeLoadBalancers = (lbs /*: any */) => {
    return {
        LoadBalancerDescriptions: lbs.map(lb => ({
            Subnets: ['subnet-15aaab61'],
            CanonicalHostedZoneNameID: 'Z3DZXE0EXAMPLE',
            CanonicalHostedZoneName: 'my-load-balancer-1234567890.us-west-2.elb.amazonaws.com',
            ListenerDescriptions: [
                {
                    Listener: {
                        InstancePort: 80,
                        LoadBalancerPort: 80,
                        Protocol: 'HTTP',
                        InstanceProtocol: 'HTTP',
                    },
                    PolicyNames: [],
                },
                {
                    Listener: {
                        InstancePort: 443,
                        SSLCertificateId: 'arn:aws:iam::123456789012:server-certificate/my-server-cert',
                        LoadBalancerPort: 443,
                        Protocol: 'HTTPS',
                        InstanceProtocol: 'HTTPS',
                    },
                    PolicyNames: ['ELBSecurityPolicy-2015-03'],
                },
            ],
            HealthCheck: {
                HealthyThreshold: 2,
                Interval: 30,
                Target: 'HTTP:80/png',
                Timeout: 3,
                UnhealthyThreshold: 2,
            },
            VPCId: 'vpc-a01106c2',
            BackendServerDescriptions: [
                {
                    InstancePort: 80,
                    PolicyNames: ['my-ProxyProtocol-policy'],
                },
            ],
            Instances: [
                {
                    InstanceId: 'i-207d9717',
                },
                {
                    InstanceId: 'i-afefb49b',
                },
            ],
            DNSName: 'my-load-balancer-1234567890.us-west-2.elb.amazonaws.com',
            SecurityGroups: ['sg-a61988c3'],
            Policies: {
                LBCookieStickinessPolicies: [
                    {
                        PolicyName: 'my-duration-cookie-policy',
                        CookieExpirationPeriod: 60,
                    },
                ],
                AppCookieStickinessPolicies: [],
                OtherPolicies: [
                    'my-PublicKey-policy',
                    'my-authentication-policy',
                    'my-SSLNegotiation-policy',
                    'my-ProxyProtocol-policy',
                    'ELBSecurityPolicy-2015-03',
                ],
            },
            LoadBalancerName: 'my-load-balancer',
            CreatedTime: '2015-03-19T03:24:02.650Z',
            AvailabilityZones: ['us-west-2a'],
            Scheme: 'internet-facing',
            SourceSecurityGroup: {
                OwnerAlias: '123456789012',
                GroupName: 'my-elb-sg',
            },
            ...lb,
        })),
    };
};
