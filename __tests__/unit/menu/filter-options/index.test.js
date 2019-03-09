const filterOptions = require('../../../../src/menu/filter-options');
const keySender = require('robotjs');

const menuReturnMock = () => 'teste';

describe('Menu -> Filter Options -> Index', () => {
    describe('Menu Cidades', () => {
        it('Should go through the output stream when we enter the zero', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = filterOptions.cityMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put an invalid option and then exit the menu', () => {
            keySender.keyTap('9');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = filterOptions.cityMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put a valid option and then exit the menu', () => {
            keySender.typeString('prado');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = filterOptions.cityMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put a valid option and then re-enter with a new option and exit the menu',
            () => {
                keySender.typeString('prado');
                keySender.keyTap('enter');
                keySender.keyTap('s');
                keySender.keyTap('enter');
                keySender.typeString('brumado');
                keySender.keyTap('enter');
                keySender.keyTap('n');
                keySender.keyTap('enter');
                const result = filterOptions.cityMenu(menuReturnMock);
                expect(result).toEqual('teste');
            }
        );
    });

    describe('Menu Cores', () => {
        it('Should go through the output stream when we enter the zero', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = filterOptions.colorMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put an invalid option and then exit the menu', () => {
            keySender.keyTap('9');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = filterOptions.colorMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put a valid option and then exit the menu', () => {
            keySender.typeString('blue');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = filterOptions.colorMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put a valid option and then re-enter with a new option and exit the menu',
            () => {
                keySender.typeString('blue');
                keySender.keyTap('enter');
                keySender.keyTap('s');
                keySender.keyTap('enter');
                keySender.typeString('red');
                keySender.keyTap('enter');
                keySender.keyTap('n');
                keySender.keyTap('enter');
                const result = filterOptions.colorMenu(menuReturnMock);
                expect(result).toEqual('teste');
            }
        );
    });

    describe('Menu Países', () => {
        it('Should go through the output stream when we enter the zero', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = filterOptions.countryMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put an invalid option and then exit the menu', () => {
            keySender.keyTap('9');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = filterOptions.countryMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put a valid option and then exit the menu', () => {
            keySender.typeString('brazil');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = filterOptions.countryMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put a valid option and then re-enter with a new option and exit the menu',
            () => {
                keySender.typeString('brazil');
                keySender.keyTap('enter');
                keySender.keyTap('s');
                keySender.keyTap('enter');
                keySender.typeString('japan');
                keySender.keyTap('enter');
                keySender.keyTap('n');
                keySender.keyTap('enter');
                const result = filterOptions.countryMenu(menuReturnMock);
                expect(result).toEqual('teste');
            }
        );
    });
});
