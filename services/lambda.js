//@format
//@flow strict

/*:: import type { AWS_Lambda_Context } from '../types/lambda'; */

module.exports.event_context = (context /*: $Shape<AWS_Lambda_Context> */) /*: AWS_Lambda_Context */ => {
    return {
        functionName: 'TestLambdaFunction',
        functionVersion: '1.0',
        invokedFunctionArn: 'arn:aws:lambda:us-west-2:111122223333:function/TestLambdaFunction',
        memoryLimitInMB: 128,
        awsRequestId: 'xxxxx-xxxxx-xxx-xxxxxx-xxxxx',
        logGroupName: '/aws/lambda/TestLambdaFunction',
        logStreamName: '2020/06/10/[$LATEST]xxxxxxxxxxxxxxxx',
        callbackWaitsForEmptyEventLoop: false,
        ...context,
    };
};
