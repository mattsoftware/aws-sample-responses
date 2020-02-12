//@format

const codedeploy = require('../codedeploy');

describe('codedeploy tests', () => {
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
            const group = codedeploy.getDeploymentGroup({applicationName: 'MyApp'});
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
