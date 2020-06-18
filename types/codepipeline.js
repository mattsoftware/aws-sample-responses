//@flow strict

/*:: import type { AWS_ARN } from './aws'; */

/*:: export type AWS_CodePipeline_Pipeline = {
    "roleArn": AWS_ARN,
    "stages": [
        {
            "name": string,
            "actions": [
                {
                    "inputArtifacts": [],
                    "name": string,
                    "actionTypeId": {
                        "category": "Source"|"Deploy",
                        "owner": "AWS",
                        "version": number,
                        "provider": "S3"|"CodeDeploy"
                    },
                    "outputArtifacts": [
                        {
                            "name": string
                        }
                    ],
                    "configuration": {
                        "S3Bucket"?: string,
                        "S3ObjectKey"?: string,
                        "ApplicationName"?: string,
                        "DeploymentGroupName"?: string,
                    },
                    "runOrder": number
                }
            ]
        },
    ],
    "artifactStore": {
        "type": "S3",
        "location": string
    },
    "name": string,
    "version": number,
}; */

/*:: export type AWS_CodePipeline_Job_Data = {
    "actionConfiguration": {
        "configuration": {
            "FunctionName": string,
            "UserParameters": string
        }
    },
    "inputArtifacts": [
        {
            "location": {
                "s3Location": {
                    "bucketName": string,
                    "objectKey": string,
                },
                "type": "S3"
            },
            "revision": null,
            "name": string,
        }
    ],
    "outputArtifacts": [],
    "artifactCredentials": {
        "secretAccessKey": string,
        "sessionToken": string,
        "accessKeyId": string,
    },
    "continuationToken": string,
    "encryptionKey": { 
        "id": AWS_ARN,
        "type": "KMS"
    },

}; */

/*:: export type AWS_CodePipeline_Job = {
    "id": string,
    "accountId": string,
    "data": AWS_CodePipeline_Job_Data,
};*/

/*:: export type AWS_CodePipeline_Event = {
    "CodePipeline.job": AWS_CodePipeline_Job;
}; */
