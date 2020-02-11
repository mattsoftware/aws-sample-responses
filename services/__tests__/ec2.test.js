
const ec2 = require('../ec2');

describe('ec2 tests', () => {
    describe('createImage tests', () => {
        test('creates a pipeline', () => {
            expect(ec2.createImage('ami-abc')).toEqual({
                ImageId: 'ami-abc',
            });
        });
    });

    describe('createTags tests', () => {
        test('creates a set of tags', () => {
            expect(ec2.createTags()).toEqual({});
        });
    });

    describe ('deregisterImage tests', () => {
        test('should return empty object', () => {
            return expect(ec2.deregisterImage()).toEqual({});
        });
    });

    describe('describeInstances tests', () => {
        test('Should return an array of instances', () => {
            return expect(ec2.describeInstances([{InstanceId: 'i-124'}, {InstanceId: 'i-abc'}])).toEqual({
                Instances: [
                    {
                        InstanceId: 'i-124',
                        InstanceType: 'r4.large',
                        Placement: {
                            AvailabilityZone: 'us-east-1c',
                            GroupName: 'HDFS-Group-A',
                            PartitionNumber: 7,
                            Tenancy: 'default',
                        },
                    },
                    {
                        InstanceId: 'i-abc',
                        InstanceType: 'r4.large',
                        Placement: {
                            AvailabilityZone: 'us-east-1c',
                            GroupName: 'HDFS-Group-A',
                            PartitionNumber: 7,
                            Tenancy: 'default',
                        },
                    },
                ],
            });
        });
    });

    describe('describeTags tests', () => {
        test('Empty tags', () => {
            expect(ec2.describeTags([])).toEqual({
                Tags: [
                ],
            });
        });
        test('describes default tag', () => {
            expect(ec2.describeTags([{}])).toEqual({
                Tags: [
                    {
                        "ResourceType": "instance",
                        "ResourceId": "i-1234567890abcdef8",
                        "Value": "Test",
                        "Key": "Stack",
                    }
                ],
            });
        });
        test('describes multiple default tags', () => {
            expect(ec2.describeTags([{}, {}])).toEqual({
                Tags: [
                    {
                        "ResourceType": "instance",
                        "ResourceId": "i-1234567890abcdef8",
                        "Value": "Test",
                        "Key": "Stack",
                    },
                    {
                        "ResourceType": "instance",
                        "ResourceId": "i-1234567890abcdef8",
                        "Value": "Test",
                        "Key": "Stack",
                    }
                ],
            });
        });
        test('overrides tag values', () => {
            expect(ec2.describeTags([{ResourceType: 'image', ResourceId: 'ami-test'}, {ResourceId: 'i-test123'}])).toEqual({
                Tags: [
                    {
                        "ResourceType": "image",
                        "ResourceId": "ami-test",
                        "Value": "Test",
                        "Key": "Stack",
                    },
                    {
                        "ResourceType": "instance",
                        "ResourceId": "i-test123",
                        "Value": "Test",
                        "Key": "Stack",
                    }
                ],
            });
        });
    });
});

