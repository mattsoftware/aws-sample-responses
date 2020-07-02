//@format
//@flow strict

const ip_ranges = require('../ip_ranges');

describe('IpRanges tests', () => {
    test('ip ranges changed event tests', () => {
        expect(ip_ranges.event_changed()).toEqual(
            expect.objectContaining({ url: 'https://ip-ranges.amazonaws.com/ip-ranges.json' }),
        );
        expect(ip_ranges.event_changed({ url: 'ip_changed.com' })).toEqual(
            expect.objectContaining({ url: 'ip_changed.com' }),
        );
    });

    test('ip range file tests', () => {
        expect(ip_ranges.ip_ranges()).toEqual(
            expect.objectContaining({
                syncToken: '1582830791',
                prefixes: [expect.objectContaining({ service: 'AMAZON' })],
            }),
        );
        expect(ip_ranges.ip_ranges({ syncToken: 'test' })).toEqual(
            expect.objectContaining({ syncToken: 'test', prefixes: [expect.objectContaining({ service: 'AMAZON' })] }),
        );
        expect(ip_ranges.ip_ranges({ prefixes: [] })).toEqual(
            expect.objectContaining({
                syncToken: '1582830791',
                prefixes: [],
            }),
        );
        expect(ip_ranges.ip_ranges({ prefixes: [ip_ranges.ip_ranges_prefix()] })).toEqual(
            expect.objectContaining({
                syncToken: '1582830791',
                prefixes: [expect.objectContaining({ service: 'AMAZON' })],
            }),
        );
        expect(
            ip_ranges.ip_ranges({
                prefixes: [ip_ranges.ip_ranges_prefix(), ip_ranges.ip_ranges_prefix({ service: 'TEST' })],
            }),
        ).toEqual(
            expect.objectContaining({
                syncToken: '1582830791',
                prefixes: [
                    expect.objectContaining({ service: 'AMAZON' }),
                    expect.objectContaining({ service: 'TEST' }),
                ],
            }),
        );
    });

    test('iprange prefix tests', () => {
        expect(ip_ranges.ip_ranges_prefix()).toEqual(expect.objectContaining({ service: 'AMAZON' }));
        expect(ip_ranges.ip_ranges_prefix({ service: 'MSW' })).toEqual(expect.objectContaining({ service: 'MSW' }));
    });
});
