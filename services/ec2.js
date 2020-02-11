
// https://docs.aws.amazon.com/cli/latest/reference/ec2/copy-image.html
module.exports.copyImage = image => {
    return {
        "ImageId": "ami-438bea42",
        ...image,
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/ec2/create-image.html
module.exports.createImage = imageId => {
    return {
        "ImageId": imageId,
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/ec2/create-tags.html
module.exports.createTags = () => ({});

// https://docs.aws.amazon.com/cli/latest/reference/ec2/deregister-image.html
module.exports.deregisterImage = () => ({});

// https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html
module.exports.describeImages = images => {
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

// https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-tags.html
module.exports.describeTags = tags => {
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

