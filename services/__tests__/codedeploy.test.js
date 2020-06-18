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
});
