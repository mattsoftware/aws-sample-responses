//@format

const elb = require('../elb');

describe('elb tests', () => {
    describe('describeLoadBalancers tests', () => {
        test('no load balancers', () => {
            expect(elb.describeLoadBalancers([])).toEqual({ LoadBalancerDescriptions: [] });
        });
        test('descibes a load balancer', () => {
            expect(elb.describeLoadBalancers([{}])).toEqual({
                LoadBalancerDescriptions: [
                    expect.objectContaining({ DNSName: 'my-load-balancer-1234567890.us-west-2.elb.amazonaws.com' }),
                ],
            });
        });
        test('descibes custom load balancers', () => {
            expect(elb.describeLoadBalancers([{}, { DNSName: 'somewhere.else.com' }])).toEqual({
                LoadBalancerDescriptions: [
                    expect.objectContaining({ DNSName: 'my-load-balancer-1234567890.us-west-2.elb.amazonaws.com' }),
                    expect.objectContaining({ DNSName: 'somewhere.else.com' }),
                ],
            });
        });
    });

    describe('deregisterInstancesFromLoadBalancer tests', () => {
        test('deregister instance ids', () => {
            expect(elb.deregisterInstancesFromLoadBalancer([])).toEqual({
                Instances: [],
            });
            expect(elb.deregisterInstancesFromLoadBalancer(['i-abc'])).toEqual({
                Instances: [{ InstanceId: 'i-abc' }],
            });
            expect(elb.deregisterInstancesFromLoadBalancer(['i-abc', 'i-123'])).toEqual({
                Instances: [{ InstanceId: 'i-abc' }, { InstanceId: 'i-123' }],
            });
        });
    });
});
