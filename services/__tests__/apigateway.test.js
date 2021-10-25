//@format

const apigateway = require('../apigateway');

describe('apigateway event tests', () => {
    describe('event aws proxy', () => {
        test('aws proxy event', () => {
            const event = apigateway.event_awsproxy({});
            expect(event).toEqual(expect.objectContaining({ body: 'eyJ0ZXN0IjoiYm9keSJ9' }));
        });

        test('aws proxy event with override', () => {
            const event = apigateway.event_awsproxy({ body: 'TEST' });
            expect(event).toEqual(expect.objectContaining({ body: 'TEST' }));
        });
    });
});
