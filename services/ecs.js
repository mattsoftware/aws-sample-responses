//@flow strict

/*:: import type { AWS_ARN } from '../types/aws'; */
/*:: import type { AWS_ECS_Service } from '../types/ecs'; */
/*:: type AWS_ECS_Service_Failure = {
    arn: AWS_ARN,
    reason: string,
    detail: string,
}*/
// https://docs.aws.amazon.com/cli/latest/reference/ecs/describe-services.html
module.exports.describeServices = (services /*:Array<AWS_ECS_Service>*/, failures /*:Array<AWS_ECS_Service_Failure>*/) /*:{services: Array<AWS_ECS_Service>, failures: Array<AWS_ECS_Service_Failure> }*/ =>  {
    return {
        "services": services.map(service => ({
            "status": "ACTIVE",
            "taskDefinition": "arn:aws:ecs:us-west-2:123456789012:task-definition/amazon-ecs-sample:1",
            "pendingCount": 0,
            "loadBalancers": [],
            "desiredCount": 10,
            "createdAt": 1466801808.595,
            "serviceName": "my-http-service",
            "clusterArn": "arn:aws:ecs:us-west-2:123456789012:cluster/default",
            "serviceArn": "arn:aws:ecs:us-west-2:123456789012:service/my-http-service",
            "deployments": [
                {
                    "status": "PRIMARY",
                    "pendingCount": 0,
                    "createdAt": 1466801808.595,
                    "desiredCount": 10,
                    "taskDefinition": "arn:aws:ecs:us-west-2:123456789012:task-definition/amazon-ecs-sample:1",
                    "updatedAt": 1428326312.703,
                    "id": "ecs-svc/1234567890123456789",
                    "runningCount": 10
                }
            ],
            "events": [
                {
                    "message": "(service my-http-service) has reached a steady state.",
                    "id": "a1b2c3d4-5678-90ab-cdef-11111EXAMPLE",
                    "createdAt": 1466801812.435
                }
            ],
            "runningCount": 10,
            ...service,
        })),
        "failures": failures.map(failure => ({...failure})),
    };
};

// https://docs.aws.amazon.com/cli/latest/reference/ecs/update-service.html
module.exports.updateService = (service /*:AWS_ECS_Service*/) => {
    return {
       "status": "ACTIVE",
       "taskDefinition": "arn:aws:ecs:us-west-2:123456789012:task-definition/amazon-ecs-sample:1",
       "pendingCount": 0,
       "loadBalancers": [],
       "desiredCount": 10,
       "createdAt": 1466801808.595,
       "serviceName": "my-http-service",
       "clusterArn": "arn:aws:ecs:us-west-2:123456789012:cluster/default",
       "serviceArn": "arn:aws:ecs:us-west-2:123456789012:service/my-http-service",
       "deployments": [
           {
               "status": "PRIMARY",
               "pendingCount": 0,
               "createdAt": 1466801808.595,
               "desiredCount": 10,
               "taskDefinition": "arn:aws:ecs:us-west-2:123456789012:task-definition/amazon-ecs-sample:1",
               "updatedAt": 1428326312.703,
               "id": "ecs-svc/1234567890123456789",
               "runningCount": 10
           }
       ],
       "events": [
           {
               "message": "(service my-http-service) has reached a steady state.",
               "id": "a1b2c3d4-5678-90ab-cdef-11111EXAMPLE",
               "createdAt": 1466801812.435
           }
       ],
       "runningCount": 10,
       ...service,
    };
};

