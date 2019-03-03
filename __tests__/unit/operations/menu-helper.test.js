const menuHelper = require('../../../src/operations/menu-helper');
const keySender = require('node-key-sender');

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

    describe('isReentryOption', () => {
        it('Should return true if the input is s', () => {
            keySender.sendText('s');
            keySender.sendKey('enter');
            const returnOption = menuHelper.isReentryOption(['test', 'test']);
            expect(returnOption).toEqual(true);
        });
        it('Should return false if the input is n', () => {
            keySender.sendText('n');
            keySender.sendKey('enter');
            const returnOption = menuHelper.isReentryOption(['test', 'test']);
            expect(returnOption).toEqual(false);
        });
    });
});
