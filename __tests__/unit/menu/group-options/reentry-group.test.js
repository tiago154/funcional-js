const reentryGroup = require('../../../../src/menu/group-options/reentry-group')

describe('Menu -> Group Options -> Reentry Group', () => {
    it('Should band valid array', () => {
        expect(reentryGroup.band).toEqual(['Agrupar', 'Quantidade por Bandas']);
    });
    it('Should city valid array', () => {
        expect(reentryGroup.city).toEqual(['Agrupar', 'Quantidade por Cidade']);
    });

    it('Should color valid array', () => {
        expect(reentryGroup.color).toEqual(['Agrupar', 'Quantidade por Cores']);
    });

    it('Should company valid array', () => {
        expect(reentryGroup.company).toEqual(['Agrupar', 'Quantidade por Empresas']);
    });

    it('Should country valid array', () => {
        expect(reentryGroup.country).toEqual(['Agrupar', 'Quantidade por País']);
    });

    it('Should department valid array', () => {
        expect(reentryGroup.department).toEqual(['Agrupar', 'Quantidade por Departamento']);
    });

    it('Should gender valid array', () => {
        expect(reentryGroup.gender).toEqual(['Agrupar', 'Quantidade por Gênero']);
    });
});
