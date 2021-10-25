//@flow strict

/*:: import type { AWS_ARN } from './aws'; */

/*:: export type AWS_ECS_Service = {
    serviceArn: AWS_ARN,
    serviceName: string,
    clusterArn: AWS_ARN,
    loadBalancers: Array<{
        targetGroupArn: string,
        loadBalancerName: string,
        containerName: string,
        containerPort: number,
    }>,

    serviceRegistries: Array<{
        registryArn: AWS_ARN,
        port: number,
        containerName: string,
        containerPort: number,
    }>,

    status: "ACTIVE" | "DRAINING" | "INACTIVE",
    desiredCount: number,
    runningCount: number,
    pendingCount: number,

    launchType: string,
    capacityProviderStrategy: Array<{
        capacityProvider: string,
        weight: number,
        base: number,
    }>,
    platformVersion: string,

    taskDefinition: AWS_ARN,

    deploymentConfiguration: {
        deploymentCircuitBreaker: {
            enable: boolean,
            rollback: boolean,
        },
        maximumPercent: number,
        minimumHealthyPercent: number,
    },
    taskSets: Array<{
        id: string,
        taskSetArn: AWS_ARN,
        serviceArn: AWS_ARN,
        clusterArn: AWS_ARN,
        startedBy: string,
        externalId: string,
        status: "PRIMARY" | "ACTIVE" | "DRAINING",
        taskDefinition: string,
        computedDesiredCount: number,
        pendingCount: number,
        runningCount: number,
        createdAt: number,
        updatedAt: number,
        launchType: string,
        capacityProviderStrategy: Array<{
            capacityProvider: string,
            weight: number,
            base: number,
        }>,
        platformVersion: string,
        networkConfiguration: {
            awsvpcConfiguration: {
                subnets: Array<string>,
                securityGroups: Array<string>,
                assignPublicIp: string,
            },
        },
        loadBalancers: Array<{
            targetGroupArn: string,
            loadBalancerName: string,
            containerName: string,
            containerPort: number,
        }>,
        serviceRegistries: Array<{
            registryArn: AWS_ARN,
            port: number,
            containerName: string,
            containerPort: number,
        }>,
        scale: {
            value: number,
            unit: string,
        },
        stabilityStatus: string,
        tags: Array<{
            key: string,
            value: string,
        }>,
    }>,
    deployments: Array< {
        id: string,
        status: "PRIMARY" | "ACTIVE" | "INACTIVE",
        taskDefinition: AWS_ARN,
        desiredCount: number,
        pendingCount: number,
        runningCount: number,
        failedTasks: number,
        createdAt: number,
        updatedAt: number,
        capacityProviderStrategy: Array<{
            capacityProvider: string,
            weight: number,
            base: number,
        }>,
        launchType: string,
        platformVersion: string,
        networkConfiguration: {
            awsvpcConfiguration: {
                subnets: Array<string>,
                securityGroups: Array<string>,
                assignPublicIp: string,
            },
        },
        rolloutState: string,
        rolloutStateReason: string,
    }>,
    roleArn: AWS_ARN,
    events: Array<{
        id: string,
        createdAt: number,
        message: string,
    }>,
    createdAt: number,
    placementConstraints: Array<{
        type: string,
        expression:string,
    }>,
    placementStrategy: Array<{
        type: string,
        field: string,
    }>,
    networkConfiguration: {
        awsvpcConfiguration: {
            subnets: Array<string>,
            securityGroups: Array<string>,
            assignPublicIp: string,
        },
    },
    healthCheckGracePeriodSecods: number,
    schedulingStrategy: "REPLICA" | "DAEMON",
    deploymentController: {
        type: "ECS" | "CODE_DEPLOY" | "EXTERNAL",
    },
    tags: Array<{
        key: string,
        value: string,
    }>,
    createdBy: string,
    enableEcsManagedTags: boolean,
    propogateTags: string,
    enableExecutionCommand: boolean
}; */

