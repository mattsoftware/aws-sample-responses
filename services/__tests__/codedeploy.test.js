//@format
//@flow strict

const codedeploy = require('../codedeploy');

describe('codedeploy tests', () => {
    describe('getDeployment tests', () => {
        test('gets a deployment', () => {
            expect(codedeploy.getDeployment({})).toEqual({
                deploymentInfo: expect.objectContaining({
                    applicationName: 'WordPress_App',
                }),
            });
        });

        test('gets a deployment with overrides', () => {
            expect(codedeploy.getDeployment({ applicationName: 'TestApp' })).toEqual({
                deploymentInfo: expect.objectContaining({
                    applicationName: 'TestApp',
                }),
            });
        });
    });

    describe('getDeploymentGroup tests', () => {
        test('gets a deployment group', () => {
            const group = codedeploy.getDeploymentGroup({});
            expect(group).toEqual(
                expect.objectContaining({
                    deploymentGroupInfo: expect.anything(),
                }),
            );
            expect(group.deploymentGroupInfo).toEqual(
                expect.objectContaining({
                    applicationName: 'WordPress_App',
                }),
            );
        });

        test('overrides deployment group response', () => {
            const group = codedeploy.getDeploymentGroup({ applicationName: 'MyApp' });
            expect(group).toEqual(
                expect.objectContaining({
                    deploymentGroupInfo: expect.anything(),
                }),
            );
            expect(group.deploymentGroupInfo).toEqual(
                expect.objectContaining({
                    applicationName: 'MyApp',
                }),
            );
        });
    });

    describe('getDeploymentTarget tests', () => {
        test('Gets a deployment target', () => {
            const result = codedeploy.getDeploymentTarget({});
            expect(result).toEqual({
                deploymentTarget: {
                    deploymentTargetType: 'InstanceTarget',
                    instanceTarget: expect.objectContaining({
                        status: 'Succeeded',
                        targetId: 'i-a1b2c3d4e5f611111',
                    }),
                },
            });
        });

        test('overrides a deployment target', () => {
            const result = codedeploy.getDeploymentTarget({ targetId: 'i-abc' });
            expect(result).toEqual({
                deploymentTarget: {
                    deploymentTargetType: 'InstanceTarget',
                    instanceTarget: expect.objectContaining({
                        status: 'Succeeded',
                        targetId: 'i-abc',
                    }),
                },
            });
        });
    });
});
