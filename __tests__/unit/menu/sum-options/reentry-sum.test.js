const reentrySum = require('../../../../src/menu/sum-options/reentry-sum')

describe('Menu -> Sum Options -> Reentry Sum', () => {
    describe('Pets', () => {
        it('Should pets valid array', () => {
            expect(reentrySum.pets).toEqual(['Soma', 'Pets']);
        });
    });
});
