
module.exports.describeAssessmentRuns = (runs, failed) => {
    return {
        "assessmentRuns": runs.map(v => ({
            "arn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE",
            "assessmentTemplateArn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw",
            "completedAt": 1458680301.4,
            "createdAt": 1458680170.035,
            "dataCollected": true,
            "durationInSeconds": 3600,
            "name": "Run 1 for ExampleAssessmentTemplate",
            "notifications": [],
            "rulesPackageArns": [
                "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-X1KXtawP"
            ],
            "startedAt": 1458680170.161,
            "state": "COMPLETED",
            "stateChangedAt": 1458680301.4,
            "stateChanges": [
                {
                    "state": "CREATED",
                    "stateChangedAt": 1458680170.035
                },
                {
                    "state": "START_DATA_COLLECTION_PENDING",
                    "stateChangedAt": 1458680170.065
                },
                {
                    "state": "START_DATA_COLLECTION_IN_PROGRESS",
                    "stateChangedAt": 1458680170.096
                },
                {
                    "state": "COLLECTING_DATA",
                    "stateChangedAt": 1458680170.161
                },
                {
                    "state": "STOP_DATA_COLLECTION_PENDING",
                    "stateChangedAt": 1458680239.883
                },
                {
                    "state": "DATA_COLLECTED",
                    "stateChangedAt": 1458680299.847
                },
                {
                    "state": "EVALUATING_RULES",
                    "stateChangedAt": 1458680300.099
                },
                {
                    "state": "COMPLETED",
                    "stateChangedAt": 1458680301.4
                }
            ],
            "userAttributesForFindings": [],
            ...v,
        })),
        "failedItems": failed.reduce((a,v) => {a[v] = {}; return a;}, {}),
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/inspector/describe-findings.html
module.exports.describeFindings = (findings, failed) => {
    return {
        "failedItems": failed.reduce((a,v) => { a[v] = {retryable: false, failureCode: 'ITEM_DOES_NOT_EXIST'}; return a; }, {}),
        "findings": findings.map(v => ({
            "arn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE/finding/0-HwPnsDm4",
            "assetAttributes": {
                "ipv4Addresses": [],
                "schemaVersion": 1
            },
            "assetType": "ec2-instance",
            "attributes": [],
            "confidence": 10,
            "createdAt": 1458680301.37,
            "description": "Amazon Inspector did not find any potential security issues during this assessment.",
            "indicatorOfCompromise": false,
            "numericSeverity": 0,
            "recommendation": "No remediation needed.",
            "schemaVersion": 1,
            "service": "Inspector",
            "serviceAttributes": {
                "assessmentRunArn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE",
                "rulesPackageArn": "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-X1KXtawP",
                "schemaVersion": 1
            },
            "severity": "Informational",
            "title": "No potential security issues found",
            "updatedAt": 1458680301.37,
            "userAttributes": [],
            ...v,
        })),
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/inspector/list-findings.html
module.exports.listFindings = (findingArns) => {
    return {
        "findingArns": findingArns.map(v => {
            return v || "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE/finding/0-HwPnsDm4";
        })
    };
};

