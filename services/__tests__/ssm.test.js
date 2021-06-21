//@format

const ssm = require('../ssm');

describe('S3 tests', () => {
    describe('getParameter tests', () => {
        test('get parameter test', () => {
            const parameters = ssm.getParameter({});
            expect(parameters).toEqual({
                Parameter: {
                    Name: 'helloWorld',
                    Type: 'String',
                    Value: 'Good day sunshine',
                    Version: 1,
                    LastModifiedDate: 1530018761.888,
                    ARN: 'arn:aws:ssm:us-east-1:123456789012:parameter/helloWorld',
                },
            });
        });

        test('paramter with overrides', () => {
            const parameters = ssm.getParameter({ Name: '/different' });
            expect(parameters).toEqual({
                Parameter: {
                    Name: '/different',
                    Type: 'String',
                    Value: 'Good day sunshine',
                    Version: 1,
                    LastModifiedDate: 1530018761.888,
                    ARN: 'arn:aws:ssm:us-east-1:123456789012:parameter/helloWorld',
                },
            });
        });
    });

    describe('getParameters tests', () => {
        test('get parameters test', () => {
            const parameters = ssm.getParameters([{}]);
            expect(parameters).toEqual({
                InvalidParameters: [],
                Parameters: [
                    {
                        Name: 'helloWorld',
                        Type: 'String',
                        Value: 'good day sunshine',
                        Version: 1,
                        LastModifiedDate: 1542308384.49,
                        ARN: 'arn:aws:ssm:us-east-1:123456789012:parameter/helloWorld',
                    },
                ],
            });
        });

        test('get multiple parameters test', () => {
            const parameters = ssm.getParameters([{}, {}]);
            expect(parameters).toEqual({
                InvalidParameters: [],
                Parameters: [
                    {
                        Name: 'helloWorld',
                        Type: 'String',
                        Value: 'good day sunshine',
                        Version: 1,
                        LastModifiedDate: 1542308384.49,
                        ARN: 'arn:aws:ssm:us-east-1:123456789012:parameter/helloWorld',
                    },
                    {
                        Name: 'helloWorld',
                        Type: 'String',
                        Value: 'good day sunshine',
                        Version: 1,
                        LastModifiedDate: 1542308384.49,
                        ARN: 'arn:aws:ssm:us-east-1:123456789012:parameter/helloWorld',
                    },
                ],
            });
        });

        test('paramters with overrides', () => {
            const parameters = ssm.getParameters([{ Name: '/different' }]);
            expect(parameters).toEqual({
                InvalidParameters: [],
                Parameters: [
                    {
                        Name: '/different',
                        Type: 'String',
                        Value: 'good day sunshine',
                        Version: 1,
                        LastModifiedDate: 1542308384.49,
                        ARN: 'arn:aws:ssm:us-east-1:123456789012:parameter/helloWorld',
                    },
                ],
            });
        });
    });

    describe('getParametersByPath tests', () => {
        test('get parameters by path test', () => {
            const parameters = ssm.getParametersByPath([{}]);
            expect(parameters).toEqual({
                InvalidParameters: [],
                Parameters: [
                    {
                        Name: 'helloWorld',
                        Type: 'String',
                        Value: "Don't worry, be happy!",
                        Version: 1,
                        LastModifiedDate: 1542308384.555,
                        ARN: 'arn:aws:ssm:us-east-1:123456789012:parameter/helloWorld',
                    },
                ],
            });
        });

        test('get multiple parameters by path test', () => {
            const parameters = ssm.getParametersByPath([{}, {}]);
            expect(parameters).toEqual({
                InvalidParameters: [],
                Parameters: [
                    {
                        Name: 'helloWorld',
                        Type: 'String',
                        Value: "Don't worry, be happy!",
                        Version: 1,
                        LastModifiedDate: 1542308384.555,
                        ARN: 'arn:aws:ssm:us-east-1:123456789012:parameter/helloWorld',
                    },
                    {
                        Name: 'helloWorld',
                        Type: 'String',
                        Value: "Don't worry, be happy!",
                        Version: 1,
                        LastModifiedDate: 1542308384.555,
                        ARN: 'arn:aws:ssm:us-east-1:123456789012:parameter/helloWorld',
                    },
                ],
            });
        });

        test('parameters with overrides', () => {
            const parameters = ssm.getParametersByPath([{ Name: '/different' }]);
            expect(parameters).toEqual({
                InvalidParameters: [],
                Parameters: [
                    {
                        Name: '/different',
                        Type: 'String',
                        Value: "Don't worry, be happy!",
                        Version: 1,
                        LastModifiedDate: 1542308384.555,
                        ARN: 'arn:aws:ssm:us-east-1:123456789012:parameter/helloWorld',
                    },
                ],
            });
        });
    });
});
