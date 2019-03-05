const dataRequest = require('../../../src/operations/data-request');
const fields = require('../../../src/menu/field-names');
const printValues = require('../../../src/operations/print-values');
const groups = require('../../../src/operations/groups');
const sums = require('../../../src/operations/sums');
const filters = require('../../../src/operations/filters');
const sinon = require('sinon');
let spyPrint, spyGroupFilter, spyFilter, spySumsFields, spySumsWithFilter;

describe('Operations -> Data Request', () => {
    beforeEach(() => {
        spyPrint = sinon.spy(printValues, 'print');
        spyGroupFilter = sinon.spy(groups, 'byField');
        spyFilter = sinon.spy(filters, 'byField');
        spySumsFields = sinon.spy(sums, 'byField');
        spySumsWithFilter =  sinon.spy(sums, 'withFilter');
    });

    afterEach(() => {
        spyPrint.restore();
        spyGroupFilter.restore();
        spyFilter.restore();
        spySumsFields.restore();
        spySumsWithFilter.restore();
    });

    describe('showDataGroup', () => {
        it('Should call the values by applying the group filter', () => {
            dataRequest.showDataGroup(fields.band);
            expect(spyPrint.callCount).toEqual(1);
            expect(spyGroupFilter.callCount).toEqual(1);
        });
    });

    describe('showDatafiltered', () => {
        it('Should call the values by applying the filters', () => {
            dataRequest.showDatafiltered(fields.country, 'Brazil');
            expect(spyPrint.callCount).toEqual(1);
            expect(spyFilter.callCount).toEqual(1);
        });
    });

    describe('showSumNoFilter', () => {
        it('Should call the values by applying the filters', () => {
            dataRequest.showSumNoFilter(fields.pets);
            expect(spyPrint.callCount).toEqual(1);
            expect(spySumsFields.callCount).toEqual(1);
        });
    });

    describe('showSumWithFilter', () => {
        it('Should call the values by applying the filters', () => {
            dataRequest.showSumWithFilter(fields.pets, fields.country, 'Brazil');
            expect(spyPrint.callCount).toEqual(1);
            expect(spySumsWithFilter.callCount).toEqual(1);
        });
    });
});
