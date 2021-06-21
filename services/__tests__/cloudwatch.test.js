//@format

const cloudwatch = require('../cloudwatch');

describe('Cloudwatch tests', () => {
    describe('DescribeAlarms tests', () => {
        test('no alarms test', () => {
            const alarms = cloudwatch.describeAlarms([]);
            expect(alarms).toEqual({ MetricAlarms: [] });
        });

        test('some alarms test', () => {
            const alarms = cloudwatch.describeAlarms([{}]);
            expect(alarms).toEqual({ MetricAlarms: [expect.objectContaining({ EvaluationPeriods: 2 })] });
        });

        test('some alarms test with overrides', () => {
            const alarms = cloudwatch.describeAlarms([{ EvaluationPeriods: 3 }]);
            expect(alarms).toEqual({ MetricAlarms: [expect.objectContaining({ EvaluationPeriods: 3 })] });
        });
    });

    describe('getMetricStatistics tests', () => {
        test('default stats', () => {
            const stats = cloudwatch.getMetricStatistics();
            expect(stats).toEqual({
                Datapoints: [{ Maximum: 44.79, Timestamp: '2014-04-09T11:18:00Z', Unit: 'Percent' }],
                Label: 'CPUUtilization',
            });
        });

        test('overrides', () => {
            const stats = cloudwatch.getMetricStatistics('MyLabel', 'Average', [{ Unit: 'Count' }]);
            expect(stats).toEqual({
                Datapoints: [{ Average: 44.79, Timestamp: '2014-04-09T11:18:00Z', Unit: 'Count' }],
                Label: 'MyLabel',
            });
        });

        test('multiple stats', () => {
            const stats = cloudwatch.getMetricStatistics(undefined, undefined, [{}, {}, {}]);
            expect(stats).toEqual({
                Datapoints: [
                    { Maximum: 44.79, Timestamp: '2014-04-09T11:18:00Z', Unit: 'Percent' },
                    { Maximum: 44.79, Timestamp: '2014-04-09T11:18:00Z', Unit: 'Percent' },
                    { Maximum: 44.79, Timestamp: '2014-04-09T11:18:00Z', Unit: 'Percent' },
                ],
                Label: 'CPUUtilization',
            });
        });
    });

    describe('putMetricData tests', () => {
        expect(cloudwatch.putMetricData()).toEqual({});
    });
});
