const groupOptions = require('../../../../src/menu/group-options');
const keySender = require('robotjs');

const menuReturnMock = () => 'teste';

describe('Menu -> Groups Options -> Index', () => {
    describe('Menu Bandas', () => {
        it('Should go through the output stream when we enter the zero', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = groupOptions.bandGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put an invalid option and then exit the menu', () => {
            keySender.keyTap('9');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = groupOptions.bandGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });

    describe('Menu Cidade', () => {
        it('Should go through the output stream when we enter the zero', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = groupOptions.cityGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put an invalid option and then exit the menu', () => {
            keySender.keyTap('9');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = groupOptions.cityGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });

    describe('Menu Cores', () => {
        it('Should go through the output stream when we enter the zero', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = groupOptions.colorGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put an invalid option and then exit the menu', () => {
            keySender.keyTap('9');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = groupOptions.colorGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });

    describe('Menu Empresas', () => {
        it('Should go through the output stream when we enter the zero', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = groupOptions.companyGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put an invalid option and then exit the menu', () => {
            keySender.keyTap('9');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = groupOptions.companyGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });

    describe('Menu Paises', () => {
        it('Should go through the output stream when we enter the zero', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = groupOptions.countryGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put an invalid option and then exit the menu', () => {
            keySender.keyTap('9');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = groupOptions.countryGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });

    describe('Menu Setores', () => {
        it('Should go through the output stream when we enter the zero', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = groupOptions.departmentGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put an invalid option and then exit the menu', () => {
            keySender.keyTap('9');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = groupOptions.departmentGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });

    describe('Menu Genero', () => {
        it('Should go through the output stream when we enter the zero', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = groupOptions.genderGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should put an invalid option and then exit the menu', () => {
            keySender.keyTap('9');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = groupOptions.genderGroupMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });
});
