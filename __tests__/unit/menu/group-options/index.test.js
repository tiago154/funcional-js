const groupOptions = require('../../../../src/menu/group-options');
const keySender = require('robotjs');

const menuReturnMock = () => 'teste';

describe('Menu -> Sum Options -> Index', () => {
    describe('Menu Bandas', () => {
        it('Should return the function passed by parameter, when the option is 0', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = groupOptions.bandGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should return the function passed by parameter, when the option is 0', () => {
            keySender.keyTap('9');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = groupOptions.bandGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });

    describe('Menu Cores', () => {
        it('Should return the function passed by parameter, when the option is 0', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = groupOptions.colorGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });

    describe('Menu Empresas', () => {
        it('Should return the function passed by parameter, when the option is 0', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = groupOptions.companyGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });

    describe('Menu Paises', () => {
        it('Should return the function passed by parameter, when the option is 0', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = groupOptions.countryGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });

    describe('Menu Setores', () => {
        it('Should return the function passed by parameter, when the option is 0', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = groupOptions.departmentGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });

    describe('Menu Genero', () => {
        it('Should return the function passed by parameter, when the option is 0', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = groupOptions.genderGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });
});
