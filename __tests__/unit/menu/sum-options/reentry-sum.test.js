const reentrySum = require('../../../../src/menu/sum-options/reentry-sum')

describe('Menu -> Sum Options -> Reentry Sum', () => {
    describe('City', () => {
        it('Should city valid array', () => {
            expect(reentrySum.pets).toEqual(['Soma', 'Pets']);
        });
    });
});
