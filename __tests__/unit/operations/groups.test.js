const groups = require('../../../src/operations/groups');
const fields = require('../../../src/menu/field-names');

describe('Operations -> Groups', () => {
    describe('By Field', () => {
        it('Should return object empty if the field does not exist in the database', () => {
            const result = groups.byField('test');
            expect(typeof (result)).toBe('object');
            expect(result).toEqual({});
        });
        it('Should return object and not null if the field is band', () => {
            const result = groups.byField(fields.band);
            expect(typeof (result)).toBe('object');
            expect(result).not.toBeNull();
        });
        it('Should return object and not null if the field is city', () => {
            const result = groups.byField(fields.city);
            expect(typeof (result)).toBe('object');
            expect(result).not.toBeNull();
        });
        it('Should return object and not null if the field is color', () => {
            const result = groups.byField(fields.color);
            expect(typeof (result)).toBe('object');
            expect(result).not.toBeNull();
        });
        it('Should return object and not null if the field is company', () => {
            const result = groups.byField(fields.company);
            expect(typeof (result)).toBe('object');
            expect(result).not.toBeNull();
        });
        it('Should return object and not null if the field is country', () => {
            const result = groups.byField(fields.country);
            expect(typeof (result)).toBe('object');
            expect(result).not.toBeNull();
        });
        it('Should return object and not null if the field is department', () => {
            const result = groups.byField(fields.department);
            expect(typeof (result)).toBe('object');
            expect(result).not.toBeNull();
        });
        it('Should return object and not null if the field is gender', () => {
            const result = groups.byField(fields.gender);
            expect(typeof (result)).toBe('object');
            expect(result).not.toBeNull();
        });
        it('Should return Zero if the field is undefined', () => {
            const result = groups.byField(undefined);
            expect(typeof (result)).toBe('object');
            expect(result).toEqual({});
        });
    });

    describe('By Field with desc', () => {
        it('Should return object empty if the field does not exist in the database', () => {
            const result = groups.byField('test', true);
            expect(typeof (result)).toBe('object');
            expect(result).toEqual({});
        });
        it('Should return object and not null if the field is band', () => {
            const result = groups.byField(fields.band, true);
            expect(typeof (result)).toBe('object');
            expect(result).not.toBeNull();
        });
        it('Should return object and not null if the field is city', () => {
            const result = groups.byField(fields.city, true);
            expect(typeof (result)).toBe('object');
            expect(result).not.toBeNull();
        });
        it('Should return object and not null if the field is color', () => {
            const result = groups.byField(fields.color, true);
            expect(typeof (result)).toBe('object');
            expect(result).not.toBeNull();
        });
        it('Should return object and not null if the field is company', () => {
            const result = groups.byField(fields.company, true);
            expect(typeof (result)).toBe('object');
            expect(result).not.toBeNull();
        });
        it('Should return object and not null if the field is country', () => {
            const result = groups.byField(fields.country, true);
            expect(typeof (result)).toBe('object');
            expect(result).not.toBeNull();
        });
        it('Should return object and not null if the field is department', () => {
            const result = groups.byField(fields.department, true);
            expect(typeof (result)).toBe('object');
            expect(result).not.toBeNull();
        });
        it('Should return object and not null if the field is gender', () => {
            const result = groups.byField(fields.gender, true);
            expect(typeof (result)).toBe('object');
            expect(result).not.toBeNull();
        });
        it('Should return Zero if the field is undefined', () => {
            const result = groups.byField(undefined, true);
            expect(typeof (result)).toBe('object');
            expect(result).toEqual({});
        });
    });
});
