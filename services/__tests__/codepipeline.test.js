
const codepipeline = require('../codepipeline');

describe('codepipeline tests', () => {
    describe('getPipeline tests', () => {
        test('gets a pipeline', () => {
            expect(codepipeline.getPipeline({})).toEqual(expect.objectContaining({
                pipeline: expect.anything(),
            }));
            expect(codepipeline.getPipeline({}).pipeline).toEqual(expect.objectContaining({
                name: "MyFirstPipeline",
            }));
        });

        test('overrides a  pipeline name', () => {
            expect(codepipeline.getPipeline({name: 'MySecondPipeline'})).toEqual(expect.objectContaining({
                pipeline: expect.anything(),
            }));
            expect(codepipeline.getPipeline({}).pipeline).toEqual(expect.objectContaining({
                name: "MyFirstPipeline",
            }));
        });
    });
});

