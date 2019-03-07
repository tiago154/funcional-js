const reentryFilter = require('../../../../src/menu/filter-options/reentry-filter')

describe('Menu -> Filter Options -> Reentry Filter', () => {
    describe('City', () => {
        it('Should city valid array', () => {
            expect(reentryFilter.city).toEqual(["Filtro", "Cidade"]);
        });

        it('Should color valid array', () => {
            expect(reentryFilter.color).toEqual(["Filtro", "Cor"]);
        });

        it('Should country valid array', () => {
            expect(reentryFilter.country).toEqual(["Filtro", "País"]);
        });
    });
});
