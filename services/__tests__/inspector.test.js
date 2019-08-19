
const inspector = require('../inspector');

describe('Inspector tests', () => {
    describe('DescribeAssessmentRuns tests', () => {
        test('no runs tests', () => {
            const runs = inspector.describeAssessmentRuns([], []);
            expect(runs).toEqual({assessmentRuns: [], failedItems: {}});
        });

        test('some runs tests', () => {
            const runs = inspector.describeAssessmentRuns([{}], []);
            expect(runs).toEqual({
                assessmentRuns: [expect.objectContaining({state: 'COMPLETED'})],
                failedItems: {},
            });
        });

        test('some runs with overrides', () => {
            const runs = inspector.describeAssessmentRuns([{state: 'STARTED'}], []);
            expect(runs).toEqual({
                assessmentRuns: [expect.objectContaining({state: 'STARTED'})],
                failedItems: {},
            });
        });

        test('some failures', () => {
            const runs = inspector.describeAssessmentRuns([], ['arn:failed']);
            expect(runs).toEqual({
                assessmentRuns: [],
                failedItems: {'arn:failed': {}},
            });
        });
    });

    describe('DescribeFindings tests', () => {
        test('no findings test', () => {
            const findings = inspector.describeFindings([], [])
            expect(findings).toEqual({findings: [], failedItems: {}});
        });

        test('some findings test', () => {
            const findings = inspector.describeFindings([{}], [])
            expect(findings).toEqual({
                findings: [expect.objectContaining({severity: 'Informational'})], 
                failedItems: {}
            });
        });

        test('some findings with overrides', () => {
            const findings = inspector.describeFindings([{severity: 'High'}], [])
            expect(findings).toEqual({
                findings: [expect.objectContaining({severity: 'High'})], 
                failedItems: {}
            });
        });

        test('Inject some failures', () => {
            const findings = inspector.describeFindings([], ['arn:aws:inspector:unknown'])
            expect(findings).toEqual({
                findings: [],
                failedItems: {'arn:aws:inspector:unknown': {retryable: false, failureCode: "ITEM_DOES_NOT_EXIST"}}
            });
        });
    });
});
