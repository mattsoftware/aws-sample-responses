//@format

const ec2 = require('../ec2');

describe('ec2 tests', () => {
    describe('copyImage tests', () => {
        test('copies an image', () => {
            return expect(ec2.copyImage({ ImageId: 'ami-123' })).toEqual({ ImageId: 'ami-123' });
        });
    });

    describe('createImage tests', () => {
        test('creates a pipeline', () => {
            return expect(ec2.createImage('ami-abc')).toEqual({
                ImageId: 'ami-abc',
            });
        });
    });

    describe('createTags tests', () => {
        test('creates a set of tags', () => {
            return expect(ec2.createTags()).toEqual({});
        });
    });

    describe('deregisterImage tests', () => {
        test('should return empty object', () => {
            return expect(ec2.deregisterImage()).toEqual({});
        });
    });

    describe('describeImages tests', () => {
        test('Should list images', () => {
            return expect(ec2.describeImages([{}])).toEqual({
                Images: [
                    {
                        VirtualizationType: 'paravirtual',
                        Name: 'My server',
                        Hypervisor: 'xen',
                        ImageId: 'ami-5731123e',
                        RootDeviceType: 'ebs',
                        State: 'available',
                        BlockDeviceMappings: [
                            {
                                DeviceName: '/dev/sda1',
                                Ebs: {
                                    DeleteOnTermination: true,
                                    SnapshotId: 'snap-1234567890abcdef0',
                                    VolumeSize: 8,
                                    VolumeType: 'standard',
                                },
                            },
                        ],
                        Architecture: 'x86_64',
                        ImageLocation: '123456789012/My server',
                        KernelId: 'aki-88aa75e1',
                        OwnerId: '123456789012',
                        RootDeviceName: '/dev/sda1',
                        Public: false,
                        ImageType: 'machine',
                        Description: 'An AMI for my server',
                    },
                ],
            });
        });
    });

    describe('describeInstances tests', () => {
        test('Should return an array of instances', () => {
            return expect(ec2.describeInstances([{ InstanceId: 'i-124' }, { InstanceId: 'i-abc' }])).toEqual({
                Reservations: [
                    {
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
                    },
                ],
            });
        });
    });

    describe('describeSecurityGroup tests', () => {
        test('Describes security groups', () => {
            return expect(ec2.describeSecurityGroups([{}, { GroupId: 'sg-1234' }])).toEqual({
                SecurityGroups: [
                    {
                        IpPermissionsEgress: [
                            {
                                IpProtocol: '-1',
                                IpRanges: [
                                    {
                                        CidrIp: '0.0.0.0/0',
                                    },
                                ],
                                UserIdGroupPairs: [],
                                PrefixListIds: [],
                            },
                        ],
                        Description: 'My security group',
                        Tags: [
                            {
                                Value: 'SG1',
                                Key: 'Name',
                            },
                        ],
                        IpPermissions: [
                            {
                                IpProtocol: '-1',
                                IpRanges: [],
                                UserIdGroupPairs: [
                                    {
                                        UserId: '123456789012',
                                        GroupId: 'sg-903004f8',
                                    },
                                ],
                                PrefixListIds: [],
                            },
                            {
                                PrefixListIds: [],
                                FromPort: 22,
                                IpRanges: [
                                    {
                                        Description: 'Access from NY office',
                                        CidrIp: '203.0.113.0/24',
                                    },
                                ],
                                ToPort: 22,
                                IpProtocol: 'tcp',
                                UserIdGroupPairs: [],
                            },
                        ],
                        GroupName: 'MySecurityGroup',
                        VpcId: 'vpc-1a2b3c4d',
                        OwnerId: '123456789012',
                        GroupId: 'sg-903004f8',
                    },
                    {
                        IpPermissionsEgress: [
                            {
                                IpProtocol: '-1',
                                IpRanges: [
                                    {
                                        CidrIp: '0.0.0.0/0',
                                    },
                                ],
                                UserIdGroupPairs: [],
                                PrefixListIds: [],
                            },
                        ],
                        Description: 'My security group',
                        Tags: [
                            {
                                Value: 'SG1',
                                Key: 'Name',
                            },
                        ],
                        IpPermissions: [
                            {
                                IpProtocol: '-1',
                                IpRanges: [],
                                UserIdGroupPairs: [
                                    {
                                        UserId: '123456789012',
                                        GroupId: 'sg-903004f8',
                                    },
                                ],
                                PrefixListIds: [],
                            },
                            {
                                PrefixListIds: [],
                                FromPort: 22,
                                IpRanges: [
                                    {
                                        Description: 'Access from NY office',
                                        CidrIp: '203.0.113.0/24',
                                    },
                                ],
                                ToPort: 22,
                                IpProtocol: 'tcp',
                                UserIdGroupPairs: [],
                            },
                        ],
                        GroupName: 'MySecurityGroup',
                        VpcId: 'vpc-1a2b3c4d',
                        OwnerId: '123456789012',
                        GroupId: 'sg-1234',
                    },
                ],
            });
        });

        test('describeSecurityGroups_ipPermission tests', () => {
            return expect(ec2.describeSecurityGroups_ipPermission()).toEqual({
                IpProtocol: '-1',
                IpRanges: [],
                PrefixListIds: [],
                UserIdGroupPairs: [{ GroupId: 'sg-903004f8', UserId: '123456789012' }],
            });
        });
    });

    describe('describeTags tests', () => {
        test('Empty tags', () => {
            return expect(ec2.describeTags([])).toEqual({
                Tags: [],
            });
        });
        test('describes default tag', () => {
            return expect(ec2.describeTags([{}])).toEqual({
                Tags: [
                    {
                        ResourceType: 'instance',
                        ResourceId: 'i-1234567890abcdef8',
                        Value: 'Test',
                        Key: 'Stack',
                    },
                ],
            });
        });
        test('describes multiple default tags', () => {
            return expect(ec2.describeTags([{}, {}])).toEqual({
                Tags: [
                    {
                        ResourceType: 'instance',
                        ResourceId: 'i-1234567890abcdef8',
                        Value: 'Test',
                        Key: 'Stack',
                    },
                    {
                        ResourceType: 'instance',
                        ResourceId: 'i-1234567890abcdef8',
                        Value: 'Test',
                        Key: 'Stack',
                    },
                ],
            });
        });
        test('overrides tag values', () => {
            return expect(
                ec2.describeTags([{ ResourceType: 'image', ResourceId: 'ami-test' }, { ResourceId: 'i-test123' }]),
            ).toEqual({
                Tags: [
                    {
                        ResourceType: 'image',
                        ResourceId: 'ami-test',
                        Value: 'Test',
                        Key: 'Stack',
                    },
                    {
                        ResourceType: 'instance',
                        ResourceId: 'i-test123',
                        Value: 'Test',
                        Key: 'Stack',
                    },
                ],
            });
        });
    });
});

describe('ec2 spot events tests', () => {
    test('returns a spot event', () => {
        expect(ec2.event_spot_interruption()).toEqual(
            expect.objectContaining({ detail: expect.objectContaining({ 'instance-id': 'i-1234567890abcdef0' }) }),
        );
    });

    test('returns a custom spot event', () => {
        expect(ec2.event_spot_interruption({ detail: { 'instance-id': 'i-abc' } })).toEqual(
            expect.objectContaining({ detail: expect.objectContaining({ 'instance-id': 'i-abc' }) }),
        );
    });
});
