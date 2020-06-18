//@format
//@flow strict

const lambda = require('../lambda');

describe('Lambda event tests', () => {
    describe('context tests', () => {
        test('returns context', () => {
            expect(lambda.event_context({})).toEqual(
                expect.objectContaining({
                    functionName: 'TestLambdaFunction',
                }),
            );
        });

        test('overrides the context', () => {
            expect(lambda.event_context({ functionName: 'FunctionOverride' })).toEqual(
                expect.objectContaining({
                    functionName: 'FunctionOverride',
                }),
            );
        });
    });
});
