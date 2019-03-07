const sumOptions = require('../../../../src/menu/sum-options');
const keySender = require('robotjs');

const menuReturnMock = () => 'teste';

describe('Menu -> Sum Options -> Index', () => {
    describe('Menu Pets', () => {
        it('Should go through the output stream when we enter the zero', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = sumOptions.petsMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should go through the base and leave the menu', () => {
            keySender.keyTap('1');
            keySender.keyTap('enter');
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const result = sumOptions.petsMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should go through the base, re-enter the menu and then leave', () => {
            keySender.keyTap('1');
            keySender.keyTap('enter');
            keySender.keyTap('s');
            keySender.keyTap('enter');
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = sumOptions.petsMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });

        it('Should filter the data by country, re-enter the menu and then exit', () => {
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

        it('Should filter the data by country and then exit', () => {
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

        it('Should put an invalid option and then leave the menu', () => {
            keySender.keyTap('3');
            keySender.keyTap('enter');
            keySender.keyTap('0');
            keySender.keyTap('enter');
            const result = sumOptions.petsMenu(menuReturnMock);
            expect(result).toEqual('teste');
        });
    });
});
