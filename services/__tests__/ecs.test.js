//@format

const ecs = require('../ecs');

describe('ecs tests', () => {
    describe('describeServices tests', () => {
        test('Describes empty services', () => {
            return expect(ecs.describeServices([], [])).toEqual({ services: [], failures: [] });
        });

        test('Describes default services', () => {
            return expect(ecs.describeServices([{}], [])).toEqual({
                services: [
                    expect.objectContaining({
                        clusterArn: 'arn:aws:ecs:us-west-2:123456789012:cluster/default',
                    }),
                ],
                failures: [],
            });
        });

        test('Describes services with override', () => {
            return expect(
                ecs.describeServices([{ clusterArn: 'arn:aws:ecs:us-west-2:123456789012:cluster/boo' }], []),
            ).toEqual({
                services: [
                    expect.objectContaining({
                        clusterArn: 'arn:aws:ecs:us-west-2:123456789012:cluster/boo',
                    }),
                ],
                failures: [],
            });
        });
    });

    describe('updateService tests', () => {
        test('Update service', () => {
            return expect(ecs.updateService({})).toEqual(
                expect.objectContaining({
                    clusterArn: 'arn:aws:ecs:us-west-2:123456789012:cluster/default',
                }),
            );
        });

        test('Update service with override', () => {
            return expect(ecs.updateService({ clusterArn: 'arn:aws:ecs:us-west-2:123456789012:cluster/boo' })).toEqual(
                expect.objectContaining({
                    clusterArn: 'arn:aws:ecs:us-west-2:123456789012:cluster/boo',
                }),
            );
        });
    });
});
