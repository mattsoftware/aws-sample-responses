
// https://docs.aws.amazon.com/cli/latest/reference/ec2/copy-image.html
module.exports.copyImage = image => {
    return {
        "ImageId": "ami-12345678",
        ...image,
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html
module.exports.describeImages = images => {
    return {
        "Images": images.map(v => ({
            "VirtualizationType": "paravirtual",
            "Name": "My server",
            "Hypervisor": "xen",
            "ImageId": "ami-1234567890abcdef0",
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
            "KernelId": "aki-1234567a",
            "OwnerId": "123456789012",
            "RootDeviceName": "/dev/sda1",
            "Public": false,
            "ImageType": "machine",
            "Description": "An AMI for my server",
            ...v,
        })),
    };
};

