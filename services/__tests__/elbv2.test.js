//@format

const elbv2 = require('../elbv2');

describe('elbv2 tests', () => {
    describe('describeTargetGroups tests', () => {
        test('describeTargetGroups returns correct info', () => {
            expect(elbv2.describeTargetGroups([])).toEqual({ TargetGroups: [] });
            expect(elbv2.describeTargetGroups([{}])).toEqual({
                TargetGroups: [expect.objectContaining({ TargetGroupName: 'my-targets' })],
            });
            expect(elbv2.describeTargetGroups([{}, { TargetGroupName: 'test' }])).toEqual({
                TargetGroups: [
                    expect.objectContaining({ TargetGroupName: 'my-targets' }),
                    expect.objectContaining({ TargetGroupName: 'test' }),
                ],
            });
        });
    });

    describe('describeTargetHealth tests', () => {
        test('describeTargetHealth returns correct info', () => {
            expect(elbv2.describeTargetHealth([])).toEqual({ TargetHealthDescriptions: [] });
            expect(elbv2.describeTargetHealth([{}])).toEqual({
                TargetHealthDescriptions: [expect.objectContaining({ Target: { Id: 'i-ceddcd4d', Port: 80 } })],
            });
            expect(elbv2.describeTargetHealth([{}, { Target: { Id: 'i-id' } }])).toEqual({
                TargetHealthDescriptions: [
                    expect.objectContaining({ Target: { Id: 'i-ceddcd4d', Port: 80 } }),
                    expect.objectContaining({ Target: { Id: 'i-id' } }),
                ],
            });
        });
    });
});
