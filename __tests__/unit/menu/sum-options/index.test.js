const sumOptions = require('../../../../src/menu/sum-options');
const keySender = require('robotjs');

const menuReturnMock = () => 'teste';

describe('Menu -> Sum Options -> Index', () => {
    describe('Menu Pets', () => {
        it('Should return the function passed by parameter, when the option is 0', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = sumOptions.petsMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Toda a base', () => {
            keySender.keyTap('1');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = sumOptions.petsMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Toda a base', () => {
            keySender.keyTap('1');
            keySender.keyTap('enter');
            keySender.keyTap('s');
            keySender.keyTap('enter');
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = sumOptions.petsMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Por Pais', () => {
            keySender.keyTap('2');
            keySender.keyTap('enter');
            keySender.typeString('brazil');
            keySender.keyTap('enter');
            keySender.keyTap('s');
            keySender.keyTap('enter');
            keySender.keyTap('0');
            keySender.keyTap('enter');
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = sumOptions.petsMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Por Pais', () => {
            keySender.keyTap('2');
            keySender.keyTap('enter');
            keySender.typeString('brazil');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = sumOptions.petsMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Opção Invalida', () => {
            keySender.keyTap('3');
            keySender.keyTap('enter');
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = sumOptions.petsMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });
});
