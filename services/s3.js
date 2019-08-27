
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property
module.exports.getObject = (data, body) => {
    return {
        AcceptRanges: "bytes",
        ContentLength: body.length,
        ContentType: "image/jpeg",
        ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
        LastModified: new Date(),
        Metadata: {
        },
        TagCount: 2,
        VersionId: "null",
        Body: Buffer.from(body),
        ...data,
    }
};

// https://docs.aws.amazon.com/cli/latest/reference/s3api/head-object.html
module.exports.headObject = head => {
    return {
        "AcceptRanges": "bytes",
        "ContentType": "text/html",
        "LastModified": "Thu, 16 Apr 2015 18:19:14 GMT",
        "ContentLength": 77,
        "VersionId": "null",
        "ETag": "\"30a6ec7e1a9ad79c203d05a589c8b400\"",
        "Metadata": {},
        ...head,
    }
};

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
module.exports.putObject = data => {
    return ({
        ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
        VersionId: "Kirh.unyZwjQ69YxcQLA8z4F5j3kJJKr",
        ...data,
    });
};

// sam local generate-event s3 delete
module.exports.event_delete = s3 => {
    return ({
        "Records": s3.map(v => ({
            "eventVersion": "2.0",
            "eventSource": "aws:s3",
            "awsRegion": "us-east-1",
            "eventTime": "1970-01-01T00:00:00.000Z",
            "eventName": "ObjectRemoved:Delete",
            "userIdentity": {
                "principalId": "EXAMPLE"
            },
            "requestParameters": {
                "sourceIPAddress": "127.0.0.1"
            },
            "responseElements": {
                "x-amz-request-id": "EXAMPLE123456789",
                "x-amz-id-2": "EXAMPLE123/5678abcdefghijklambdaisawesome/mnopqrstuvwxyzABCDEFGH"
            },
            "s3": {
                "s3SchemaVersion": "1.0",
                "configurationId": "testConfigRule",
                "bucket": {
                    "name": "example-bucket",
                    "ownerIdentity": {
                        "principalId": "EXAMPLE"
                    },
                    "arn": "arn:aws:s3:::example-bucket"
                },
                "object": {
                    "key": "test/key",
                    "sequencer": "0A1B2C3D4E5F678901"
                }
            },
            ...v,
        })),
    });
};

// sam local generate-event s3 put
module.exports.event_put = s3 => {
    return ({
        "Records": s3.map(v => ({
            "eventVersion": "2.0",
            "eventSource": "aws:s3",
            "awsRegion": "us-east-1",
            "eventTime": "1970-01-01T00:00:00.000Z",
            "eventName": "ObjectCreated:Put",
            "userIdentity": {
                "principalId": "EXAMPLE"
            },
            "requestParameters": {
                "sourceIPAddress": "127.0.0.1"
            },
            "responseElements": {
                "x-amz-request-id": "EXAMPLE123456789",
                "x-amz-id-2": "EXAMPLE123/5678abcdefghijklambdaisawesome/mnopqrstuvwxyzABCDEFGH"
            },
            "s3": {
                "s3SchemaVersion": "1.0",
                "configurationId": "testConfigRule",
                "bucket": {
                    "name": "example-bucket",
                    "ownerIdentity": {
                        "principalId": "EXAMPLE"
                    },
                    "arn": "arn:aws:s3:::example-bucket"
                },
                "object": {
                    "key": "test/key",
                    "size": 1024,
                    "eTag": "0123456789abcdef0123456789abcdef",
                    "sequencer": "0A1B2C3D4E5F678901"
                }
            },
            ...v,
        })),
    });
};

