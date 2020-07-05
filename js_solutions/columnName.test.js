const { printColName } = require('./columnName');

describe("Print Column Name", () => {
    test("1", () => {
        expect(printColName(1)).toBe('A');
    });

    test("26", () => {
        expect(printColName(26)).toBe('Z');
    });

    test("27", () => {
        expect(printColName(27)).toBe('AA');
    });

    test("51", () => {
        expect(printColName(51)).toBe('AY');
    });

    test("52", () => {
        expect(printColName(52)).toBe('AZ');
    });

    test("80", () => {
        expect(printColName(80)).toBe('CB');
    });

    test("676", () => {
        expect(printColName(676)).toBe('YZ');
    });

    test("702", () => {
        expect(printColName(702)).toBe('ZZ');
    });

    test("703", () => {
        expect(printColName(703)).toBe('AAA');
    });

    test("705", () => {
        expect(printColName(705)).toBe('AAC');
    });

    test("1406", () => {
        expect(printColName(1406)).toBe('BBB');
    });

    test("88888", () => {
        expect(printColName(88888)).toBe('EALT');
    });

    test("234863", () => {
        expect(printColName(234863)).toBe('MIKE');
    });

    test("10000000", () => {
        expect(printColName(10000000)).toBe('UVXWJ');
    });

    test("4815162342", () => {
        expect(printColName(4815162342)).toBe('OOFZIEP');
    });
});

