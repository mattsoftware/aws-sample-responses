
// https://docs.aws.amazon.com/cli/latest/reference/sns/publish.html
module.exports.publish = message => {
    return {
        "MessageId": "12345678",
        ...message,
    };
};

