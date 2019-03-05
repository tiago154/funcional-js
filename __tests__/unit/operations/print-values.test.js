const printValues = require('../../../src/operations/print-values');
const sinon = require('sinon');
let spyPrint;

describe('Operations -> Print Values', () => {

    beforeEach(() => {
        spyPrint = sinon.spy(printValues, 'print');
    });

    afterEach(() => {
        spyPrint.restore();
    });

    it('Should only call printValues with object null once and return no parameters', () => {
        printValues.print({});
        expect(spyPrint.calledOnceWith({})).toEqual(true);
        expect(spyPrint.callCount).toEqual(1);
    });

    it('Should only call printValues once and return no parameters', () => {
        printValues.print({ a: 'teste' });
        expect(spyPrint.calledOnceWith({ a: 'teste' })).toEqual(true);
        expect(spyPrint.callCount).toEqual(1);
    });
});
