const menuHelper = require('../../../src/operations/menu-helper');
const keySender = require('robotjs');

describe('Operations -> Menu Helper', () => {
    describe('isReturnOption', () => {
        it('Should return true if the input is 0', () => {
            const returnOption = menuHelper.isReturnOption('0');
            expect(returnOption).toEqual(true);
        });
        it('Should return false if the input is not 0', () => {
            const returnOption = menuHelper.isReturnOption('1');
            expect(returnOption).toEqual(false);
        });
        it('Should return false if the input is undefined', () => {
            const returnOption = menuHelper.isReturnOption(undefined);
            expect(returnOption).toEqual(false);
        });
    });

    describe.only('isReentryOption', () => {
        it('Should return true if the input is s', () => {
            keySender.keyTap('s');
            keySender.keyTap('enter');
            const returnOption = menuHelper.isReentryOption(['test', 'test']);
            expect(returnOption).toEqual(true);
        });
        it('Should return false if the input is n', () => {
            keySender.keyTap('n');
            keySender.keyTap('enter');
            const returnOption = menuHelper.isReentryOption(['test', 'test']);
            expect(returnOption).toEqual(false);
        });
    });
});
