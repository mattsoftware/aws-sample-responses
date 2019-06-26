
const cloudwatch = require('../cloudwatch');

describe('Cloudwatch tests', () => {
    describe('DescribeAlerts tests', () => {
        test('no alerts test', () => {
            const alerts = cloudwatch.describeAlerts([])
            expect(alerts).toEqual({MetricAlarms: []});
        });

        test('some alerts test', () => {
            const alerts = cloudwatch.describeAlerts([{}])
            expect(alerts).toEqual({MetricAlarms: [expect.objectContaining({EvaluationPeriods: 2})]});
        });

        test('some alerts test with overrides', () => {
            const alerts = cloudwatch.describeAlerts([{EvaluationPeriods: 3}])
            expect(alerts).toEqual({MetricAlarms: [expect.objectContaining({EvaluationPeriods: 3})]});
        });
    });
});
