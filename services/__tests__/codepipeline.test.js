//@format
//@flow strict

const codepipeline = require('../codepipeline');

describe('codepipeline tests', () => {
    describe('putJobSuccessResult tests', () => {
        test('returns empty object', () => expect(codepipeline.putJobSuccessResult()).toEqual({}));
    });

    describe('putJobFailureResult tests', () => {
        test('returns empty object', () => expect(codepipeline.putJobFailureResult()).toEqual({}));
    });

    describe('getJobDetails tests', () => {
        test('Returns the job details', () => {
            expect(codepipeline.getJobDetails({}, {})).toEqual({
                jobDetails: expect.objectContaining({
                    accountId: '111111111111',
                    data: expect.objectContaining({ outputArtifacts: [] }),
                }),
            });
        });

        test('Returns the job details overriding the details and the data', () => {
            expect(codepipeline.getJobDetails({ accountId: 'test' }, { outputArtifacts: ['test'] })).toEqual({
                jobDetails: expect.objectContaining({
                    accountId: 'test',
                    data: expect.objectContaining({ outputArtifacts: ['test'] }),
                }),
            });
        });
    });

    describe('getPipeline tests', () => {
        test('gets a pipeline', () => {
            //$FlowFixMe
            expect(codepipeline.getPipeline({})).toEqual(
                expect.objectContaining({
                    pipeline: expect.anything(),
                }),
            );
            //$FlowFixMe
            expect(codepipeline.getPipeline({}).pipeline).toEqual(
                expect.objectContaining({
                    name: 'MyFirstPipeline',
                }),
            );
        });

        test('overrides a  pipeline name', () => {
            //$FlowFixMe
            expect(codepipeline.getPipeline({ name: 'MySecondPipeline' })).toEqual(
                expect.objectContaining({
                    pipeline: expect.anything(),
                }),
            );
            //$FlowFixMe
            expect(codepipeline.getPipeline({}).pipeline).toEqual(
                expect.objectContaining({
                    name: 'MyFirstPipeline',
                }),
            );
        });
    });

    describe('listActionExecutions tests', () => {
        test('Empty list of executions', () => {
            expect(codepipeline.listActionExecutions([])).toEqual({
                actionExecutionDetails: [],
            });
        });

        test('Lists action executions', () => {
            expect(codepipeline.listActionExecutions([{}])).toEqual({
                actionExecutionDetails: [expect.objectContaining({ actionExecutionId: 'xxxxxx-xxxx-xxxxxxxx-xxxxxx' })],
            });
        });

        test('Overrides some data', () => {
            expect(
                codepipeline.listActionExecutions([{ actionExecutionId: 'test1' }, {}, { actionExecutionId: 'test2' }]),
            ).toEqual({
                actionExecutionDetails: [
                    expect.objectContaining({ actionExecutionId: 'test1' }),
                    expect.objectContaining({ actionExecutionId: 'xxxxxx-xxxx-xxxxxxxx-xxxxxx' }),
                    expect.objectContaining({ actionExecutionId: 'test2' }),
                ],
            });
        });
    });
});

describe('Codepipeline event tests', () => {
    describe('event job tests', () => {
        test('event job test', () => {
            //$FlowFixMe
            expect(codepipeline.event_job({}, {}, 'TEST_PARAM')).toEqual({
                'CodePipeline.job': expect.objectContaining({
                    id: '11111111-abcd-1111-abcd-111111abcdef',
                    data: expect.objectContaining({
                        outputArtifacts: [],
                        actionConfiguration: {
                            configuration: {
                                FunctionName: 'MyLambdaFunctionForAWSCodePipeline',
                                UserParameters: 'TEST_PARAM',
                            },
                        },
                    }),
                }),
            });
        });

        test('event job test overrides some data', () => {
            //$FlowFixMe
            expect(codepipeline.event_job({ id: 'testid' }, { outputArtifacts: ['test2'] }, 'TESTING')).toEqual({
                'CodePipeline.job': expect.objectContaining({
                    id: 'testid',
                    data: expect.objectContaining({
                        outputArtifacts: ['test2'],
                        actionConfiguration: {
                            configuration: {
                                FunctionName: 'MyLambdaFunctionForAWSCodePipeline',
                                UserParameters: 'TESTING',
                            },
                        },
                    }),
                }),
            });
        });
    });
});
