const reentryGroup = require('../../../../src/menu/group-options/reentry-group')

describe('Menu -> Group Options -> Reentry Group', () => {
    describe('City', () => {
        it('Should city valid array', () => {
            expect(reentryGroup.city).toEqual(['Agrupar', 'Quantidade por Cidade']);
        });
    });
});
