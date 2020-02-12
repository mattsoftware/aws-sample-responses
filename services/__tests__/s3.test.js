//@format

const s3 = require('../s3');

describe('S3 tests', () => {
    describe('getObject tests', () => {
        test('get object test', () => {
            const object = s3.getObject({}, 'test');
            expect(object).toEqual(expect.objectContaining({ContentType: 'image/jpeg', Body: Buffer.from('test')}));
            expect(object.Body.toString()).toEqual('test');
        });

        test('object with overrides', () => {
            const object = s3.getObject({ContentType: 'text/plain'}, 'test');
            expect(object).toEqual(expect.objectContaining({ContentType: 'text/plain'}));
        });
    });

    describe('headObject tests', () => {
        test('object test', () => {
            const object = s3.headObject({});
            expect(object).toEqual(expect.objectContaining({ContentType: 'text/html'}));
        });

        test('object with overrides', () => {
            const object = s3.headObject({ContentType: 'text/plain'});
            expect(object).toEqual(expect.objectContaining({ContentType: 'text/plain'}));
        });
    });

    describe('putObject tests', () => {
        test('put test', () => {
            expect(s3.putObject()).toEqual(expect.objectContaining({ETag: '"6805f2cfc46c0f04559748bb039d69ae"'}));
        });

        test('put test with override', () => {
            expect(s3.putObject({ETag: 'override'})).toEqual(expect.objectContaining({ETag: 'override'}));
        });
    });
});

describe('s3 event tests', () => {
    describe('event deleted', () => {
        test('event deleted no events', () => {
            const event = s3.event_delete([]);
            expect(event).toEqual(
                expect.objectContaining({
                    Records: [],
                }),
            );
        });
        test('event deleted', () => {
            const event = s3.event_delete([{}]);
            expect(event).toEqual(
                expect.objectContaining({
                    Records: [expect.objectContaining({awsRegion: 'us-east-1'})],
                }),
            );
        });
        test('event deleted multiple objects (with overrides)', () => {
            const event = s3.event_delete([{}, {}, {awsRegion: 'ap-southeast-2'}]);
            expect(event).toEqual(
                expect.objectContaining({
                    Records: [
                        expect.objectContaining({awsRegion: 'us-east-1'}),
                        expect.objectContaining({awsRegion: 'us-east-1'}),
                        expect.objectContaining({awsRegion: 'ap-southeast-2'}),
                    ],
                }),
            );
        });
    });

    describe('event put', () => {
        test('event put no events', () => {
            const event = s3.event_put([]);
            expect(event).toEqual(
                expect.objectContaining({
                    Records: [],
                }),
            );
        });
        test('event put', () => {
            const event = s3.event_put([{}]);
            expect(event).toEqual(
                expect.objectContaining({
                    Records: [expect.objectContaining({awsRegion: 'us-east-1'})],
                }),
            );
        });
        test('event put multiple objects (with overrides)', () => {
            const event = s3.event_put([{}, {awsRegion: 'ap-southeast-2'}]);
            expect(event).toEqual(
                expect.objectContaining({
                    Records: [
                        expect.objectContaining({awsRegion: 'us-east-1'}),
                        expect.objectContaining({awsRegion: 'ap-southeast-2'}),
                    ],
                }),
            );
        });
    });
});
