const sums = require('../../../src/operations/sums');
const fields = require('../../../src/menu/field-names');

describe('Operations -> Sums', () => {
    describe('By Field', () => {
        it('Should return Zero if the field does not exist in the database', () => {
            const result = sums.byField('test');
            expect(typeof (result)).toBe('number');
            expect(result).toEqual(0);
        });
        it('Should return Number and greater zero if the field is pets', () => {
            const result = sums.byField(fields.pets);
            expect(typeof (result)).toBe('number');
            expect(result).toBeGreaterThan(0);
        });
        it('Should return Zero if the field is not pets', () => {
            const result = sums.byField(fields.department);
            expect(typeof (result)).toBe('number');
            expect(result).toEqual(0);
        });
        it('Should return Zero if the field is undefined', () => {
            const result = sums.byField(undefined);
            expect(typeof (result)).toBe('number');
            expect(result).toEqual(0);
        });
    });

    describe('With Filter', () => {
        it('Should return Zero if the field does not exist in the database', () => {
            const result = sums.withFilter('test', fields.country, 'test');
            expect(typeof (result)).toBe('number');
            expect(result).toEqual(0);
        });
        it('Should return Number and greater zero if the field is pets', () => {
            const result = sums.withFilter(fields.pets, fields.country, 'brazil');
            expect(typeof (result)).toBe('number');
            expect(result).toBeGreaterThan(0);
        });
        it('Should return Zero if the field is not pets', () => {
            const result = sums.withFilter(fields.firstName, fields.country, 'brazil');
            expect(typeof (result)).toBe('number');
            expect(result).toEqual(0);
        });
        it('Should return Zero if the field is undefined', () => {
            const result = sums.withFilter(undefined, fields.country, 'brazil');
            expect(typeof (result)).toBe('number');
            expect(result).toEqual(0);
        });
    });
});
