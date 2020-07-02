//@format
//@flow

// https://aws.amazon.com/blogs/aws/subscribe-to-aws-public-ip-address-changes-via-amazon-sns/
module.exports.event_changed = (ip_changed /*:any*/) => {
    return {
        'create-time': '2020-02-26T06:46:23+00:00',
        synctoken: '0123456789',
        md5: '6a45316e8bc9463c9e926d5d37836d33',
        url: 'https://ip-ranges.amazonaws.com/ip-ranges.json',
        ...ip_changed,
    };
};

// The fetched file from https://ip-ranges.amazonaws.com/ip-ranges.json looks like this...
module.exports.ip_ranges = (range /*:any*/) => {
    return {
        syncToken: '1582830791',
        createDate: '2020-02-27-19-13-11',
        prefixes: [module.exports.ip_ranges_prefix()],
        ...range,
    };
};

module.exports.ip_ranges_prefix = (prefix /*:any*/) => {
    return {
        ip_prefix: '254.254.254.254/32',
        region: 'us-east-1',
        service: 'AMAZON',
        ...prefix,
    };
};
