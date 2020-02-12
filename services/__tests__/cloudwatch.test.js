//@format

const cloudwatch = require('../cloudwatch');

describe('Cloudwatch tests', () => {
    describe('DescribeAlarms tests', () => {
        test('no alarms test', () => {
            const alarms = cloudwatch.describeAlarms([]);
            expect(alarms).toEqual({MetricAlarms: []});
        });

        test('some alarms test', () => {
            const alarms = cloudwatch.describeAlarms([{}]);
            expect(alarms).toEqual({MetricAlarms: [expect.objectContaining({EvaluationPeriods: 2})]});
        });

        test('some alarms test with overrides', () => {
            const alarms = cloudwatch.describeAlarms([{EvaluationPeriods: 3}]);
            expect(alarms).toEqual({MetricAlarms: [expect.objectContaining({EvaluationPeriods: 3})]});
        });
    });
});
