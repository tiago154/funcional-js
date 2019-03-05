const reentryFilter = require('../../../../src/menu/filter-options/reentry-filter')

describe('Menu -> Filter Options -> Reentry Filter', () => {
    describe('City', () => {
        it('Should city valid array', () => {
            expect(reentryFilter.city).toEqual(["Filtro", "Cidade"]);
        });
    });
});
