const printValues = require('../../../src/operations/print-values');
const sinon = require('sinon');

describe('Operations -> Print Values', () => {
    it('Should only call printValues with object null once and return no parameters', () => {
        const spy = sinon.spy(printValues);
        spy({});
        expect(spy.called).toEqual(true);
        expect(spy.returned()).toEqual(true);
    });

    it('Should only call printValues once and return no parameters', () => {
        const spy = sinon.spy(printValues);
        spy({ a: 'teste' });
        expect(spy.called).toEqual(true);
        expect(spy.returned()).toEqual(true);
    });
});
