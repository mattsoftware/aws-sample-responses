
// https://docs.aws.amazon.com/cli/latest/reference/ssm/get-parameter.html
module.exports.getParameter = param => {
    return {
        "Parameter": {
            "Name": "helloWorld",
            "Type": "String",
            "Value": "Good day sunshine",
            "Version": 1,
            "LastModifiedDate": 1530018761.888,
            "ARN": "arn:aws:ssm:us-east-1:123456789012:parameter/helloWorld",
            ...param,
        }
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/ssm/get-parameters.html
module.exports.getParameters = params => {
    return {
        "Parameters": params.map(v => ({
            "Name": "helloWorld",
            "Type": "String",
            "Value": "good day sunshine",
            "Version": 1,
            "LastModifiedDate": 1542308384.49,
            "ARN": "arn:aws:ssm:us-east-1:123456789012:parameter/helloWorld",
            ...v
        })),
        "InvalidParameters": []
    }
};

