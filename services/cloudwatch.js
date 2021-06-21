
// https://docs.aws.amazon.com/cli/latest/reference/cloudwatch/describe-alarms.html
module.exports.describeAlarms = alarms => {
    return {
        "MetricAlarms": alarms.map(v => ({
            "EvaluationPeriods": 2,
            "AlarmArn": "arn:aws:cloudwatch:us-east-1:123456789012:alarm:myalarm",
            "StateUpdatedTimestamp": "2014-04-09T18:59:06.442Z",
            "AlarmConfigurationUpdatedTimestamp": "2012-12-27T00:49:54.032Z",
            "ComparisonOperator": "GreaterThanThreshold",
            "AlarmActions": [
                "arn:aws:sns:us-east-1:123456789012:myHighCpuAlarm"
            ],
            "Namespace": "AWS/EC2",
            "AlarmDescription": "CPU usage exceeds 70 percent",
            "StateReasonData": "{\"version\":\"1.0\",\"queryDate\":\"2014-04-09T18:59:06.419+0000\",\"startDate\":\"2014-04-09T18:44:00.000+0000\",\"statistic\":\"Average\",\"period\":300,\"recentDatapoints\":[38.958,40.292],\"threshold\":70.0}",
            "Period": 300,
            "StateValue": "OK",
            "Threshold": 70.0,
            "AlarmName": "myalarm",
            "Dimensions": [
                {
                    "Name": "InstanceId",
                    "Value": "i-0c986c72"
                }
            ],
            "Statistic": "Average",
            "StateReason": "Threshold Crossed: 2 datapoints were not greater than the threshold (70.0). The most recent datapoints: [38.958, 40.292].",
            "InsufficientDataActions": [],
            "OKActions": [],
            "ActionsEnabled": true,
            "MetricName": "CPUUtilization",
            ...v,
        })),
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/cloudwatch/get-metric-statistics.html
module.exports.getMetricStatistics = (
    label /*:string*/ = "CPUUtilization",
    metric /*:string*/ = "Maximum",
    datapoints/*:Array<any>*/ = [{}]
) => {
    return {
        "Datapoints": datapoints.map(v => {
            const datapoint = {
                "Timestamp": "2014-04-09T11:18:00Z",
                "Unit": "Percent",
            };
            datapoint[metric] = 44.79;
            return {
                ...datapoint,
                ...v,
            };
        }),
        "Label": label,
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/cloudwatch/put-metric-data.html
module.exports.putMetricData = () => ({});

