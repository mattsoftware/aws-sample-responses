//@flow strict

// https://docs.aws.amazon.com/cli/latest/reference/ec2/copy-image.html
module.exports.copyImage = (image/*:any*/) => {
    return {
        "ImageId": "ami-438bea42",
        ...image,
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/ec2/create-image.html
module.exports.createImage = (imageId/*:any*/) => {
    return {
        "ImageId": imageId,
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/ec2/create-tags.html
module.exports.createTags = () => ({});

// https://docs.aws.amazon.com/cli/latest/reference/ec2/deregister-image.html
module.exports.deregisterImage = () => ({});

// https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html
module.exports.describeImages = (images/*:any*/) => {
    return {
        "Images": images.map(v => ({
            "VirtualizationType": "paravirtual",
            "Name": "My server",
            "Hypervisor": "xen",
            "ImageId": "ami-5731123e",
            "RootDeviceType": "ebs",
            "State": "available",
            "BlockDeviceMappings": [
                {
                    "DeviceName": "/dev/sda1",
                    "Ebs": {
                        "DeleteOnTermination": true,
                        "SnapshotId": "snap-1234567890abcdef0",
                        "VolumeSize": 8,
                        "VolumeType": "standard"
                    }
                }
            ],
            "Architecture": "x86_64",
            "ImageLocation": "123456789012/My server",
            "KernelId": "aki-88aa75e1",
            "OwnerId": "123456789012",
            "RootDeviceName": "/dev/sda1",
            "Public": false,
            "ImageType": "machine",
            "Description": "An AMI for my server",
            ...v,
        })),
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-instances.html
// NOTE: This output is truncated
module.exports.describeInstances = (instances/*:any*/) => {
    return {
        "Reservations": [
            {
                "Instances": instances.map(i => ({
                    "InstanceId": "i-0123a456700123456",
                    "InstanceType": "r4.large",
                    "Placement": {
                        "AvailabilityZone": "us-east-1c",
                        "GroupName": "HDFS-Group-A",
                        "PartitionNumber": 7,
                        "Tenancy": "default"
                    },
                    ...i,
                })),
            },
        ],
    };
};

//https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-security-groups.html
module.exports.describeSecurityGroups = (groups/*:any*/) => {
    return {
        "SecurityGroups": groups.map(g => ({
            "IpPermissionsEgress": [
                {
                    "IpProtocol": "-1",
                    "IpRanges": [
                        {
                            "CidrIp": "0.0.0.0/0"
                        }
                    ],
                    "UserIdGroupPairs": [],
                    "PrefixListIds": []
                }
            ],
            "Description": "My security group",
            "Tags": [
                {
                    "Value": "SG1",
                    "Key": "Name"
                 }
            ],
            "IpPermissions": [
                {
                    "IpProtocol": "-1",
                    "IpRanges": [],
                    "UserIdGroupPairs": [
                        {
                             "UserId": "123456789012",
                             "GroupId": "sg-903004f8"
                        }
                    ],
                    "PrefixListIds": []
                },
                {
                    "PrefixListIds": [],
                    "FromPort": 22,
                    "IpRanges": [
                        {
                            "Description": "Access from NY office",
                            "CidrIp": "203.0.113.0/24"
                        }
                    ],
                    "ToPort": 22,
                    "IpProtocol": "tcp",
                    "UserIdGroupPairs": []
                  }
            ],
            "GroupName": "MySecurityGroup",
            "VpcId": "vpc-1a2b3c4d",
            "OwnerId": "123456789012",
            "GroupId": "sg-903004f8",
            ...g,
        }))
    };
};

module.exports.describeSecurityGroups_ipPermission = (permission/*:any*/) => {
    return {
        "IpProtocol": "-1",
        "IpRanges": [],
        "UserIdGroupPairs": [
            {
                 "UserId": "123456789012",
                 "GroupId": "sg-903004f8"
            }
        ],
        "PrefixListIds": [],
        ...permission,
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-tags.html
module.exports.describeTags = (tags /*: any */) => {
    return {
        "Tags": tags.map(v => ({
            "ResourceType": "instance",
            "ResourceId": "i-1234567890abcdef8",
            "Value": "Test",
            "Key": "Stack",
            ...v
        })),
    };
};

// https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html
// instance-action can be hibernate, stop or terminate
/*:: type EC2_Event_SpotInterruption_Action = "hibernate"|"stop"|"terminate" */
/*:: type EC2_Event_SpotInterruption = {
    version: number,
    id: string,
    'detail-type': string,
    source: "aws.ec2",
    account: string,
    time: string,
    region: string,
    resources: Array<string>,
    detail: {
        'instance-id': string,
        'instance-action': EC2_Event_SpotInterruption_Action,
    },
} */
module.exports.event_spot_interruption = (spot/*: EC2_Event_SpotInterruption */, action/*:EC2_Event_SpotInterruption_Action*/) => {
    return (
        {
            "version": "0",
            "id": "12345678-1234-1234-1234-123456789012",
            "detail-type": "EC2 Spot Instance Interruption Warning",
            "source": "aws.ec2",
            "account": "123456789012",
            "time": "yyyy-mm-ddThh:mm:ssZ",
            "region": "us-east-2",
            "resources": ["arn:aws:ec2:us-east-2:123456789012:instance/i-1234567890abcdef0"],
            "detail": {
                "instance-id": "i-1234567890abcdef0",
                "instance-action": action
            },
            ...spot,
        }
    );
};

