//@flow strict

/*:: import type { AWS_ARN } from './aws'; */

// https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html
/*:: export type AWS_Lambda_Context = {
    functionName: string,
    functionVersion: string,
    invokedFunctionArn: AWS_ARN,
    memoryLimitInMB: number,
    awsRequestId: string,
    logGroupName: string,
    logStreamName: string,
    identity?: {
        cognitoIdentityId: string,
        cognitoIdentityPoolId: string,
    },
    clientContext?: {
        "client.installation_id": string,
        "client.app_title": string,
        "client.app_version_name": string,
        "client.app_version_code": string,
        "client.app_package_name": string,
        "env.platform_version": string,
        "env.platform": string,
        "env.make": string,
        "env.model": string,
        "env.locale": string,
        Custom: any,
    },
    callbackWaitsForEmptyEventLoop: boolean,
}; */

