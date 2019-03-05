const fieldNames = require('../../../../src/menu/field-names');

describe('Menu -> Field Names', () => {
    it('Should fieldNames is not null', () => {
        expect(fieldNames).not.toBeNull();
    });

    it('Should fieldNames is object', () => {
        expect(typeof(fieldNames)).toEqual('object');
    });
});
