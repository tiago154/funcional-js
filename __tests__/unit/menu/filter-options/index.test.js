const filterOptions = require('../../../../src/menu/filter-options');
const keySender = require('robotjs');

const menuReturnMock = () => 'teste';

describe('Menu -> Sum Options -> Index', () => {
    describe('Menu Bandas', () => {
        it('Should return the function passed by parameter, when the option is 0', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = filterOptions.cityMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should return the function passed by parameter, when the option is 0', () => {
            keySender.keyTap('9');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = filterOptions.cityMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });

    describe('Menu Cores', () => {
        it('Should return the function passed by parameter, when the option is 0', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = filterOptions.colorMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });

    describe('Menu Cores', () => {
        it('Should return the function passed by parameter, when the option is 0', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = filterOptions.countryMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });
});
