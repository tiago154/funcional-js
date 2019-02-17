const colors = require('../../operations/colors-text');

const filterMessages = [
    colors.title('Filtrar por ...\n'),
    colors.option('1 - Cidade'),
    colors.option('2 - País'),
    colors.option('3 - Cor'),
    colors.option('0 - Voltar\n'),
    colors.information('Escolha uma opção\n')
];

const mainMessages = [
    colors.title('Programação Funcional - Menu\n'),
    colors.option('1 - Filtro'),
    colors.option('2 - Agrupar'),
    colors.option('0 - Sair\n'),
    colors.information('Escolha uma opção\n')
];

const cityMessages = [
    colors.title('Filtrar Cidade - Menu\n'),
    colors.information('Digite o nome da cidade ou 0 para voltar\n')
];

const countryMessages = [
    colors.title('Filtrar País - Menu\n'),
    colors.information('Digite o nome do país ou 0 para voltar\n')
];

const colorMessages = [
    colors.title('Filtrar Cor - Menu\n'),
    colors.information('Digite o nome da cor ou 0 para voltar\n')
];

const groupMessages = [
    colors.title('Agrupar por ...\n'),
    colors.option('1 - Bandas'),
    colors.option('2 - Cores'),
    colors.option('3 - Empresas'),
    colors.option('4 - Departamento'),
    colors.option('5 - Gênero'),
    colors.option('6 - Cidade'),
    colors.option('7 - País'),
    colors.option('0 - Voltar\n'),
    colors.information('Escolha uma opção\n')
];

const bandGroupMessages = [
    colors.title('Agrupar por Bandas - Menu\n'),
    colors.option('1 - Ordem crescente'),
    colors.option('2 - Ordem descrente'),
    colors.option('0 - para voltar\n')
];

const colorGroupMessages = [
    colors.title('Agrupar por Cores - Menu\n'),
    colors.option('1 - Ordem crescente'),
    colors.option('2 - Ordem descrente'),
    colors.option('0 - para voltar\n')
];

const companyGroupMessages = [
    colors.title('Agrupar por Empresas - Menu\n'),
    colors.option('1 - Ordem crescente'),
    colors.option('2 - Ordem descrente'),
    colors.option('0 - para voltar\n')
];

const departmentGroupMessages = [
    colors.title('Agrupar por Departamento - Menu\n'),
    colors.option('1 - Ordem crescente'),
    colors.option('2 - Ordem descrente'),
    colors.option('0 - para voltar\n')
];

const genderGroupMessages = [
    colors.title('Agrupar por Gênero - Menu\n'),
    colors.option('1 - Ordem crescente'),
    colors.option('2 - Ordem descrente'),
    colors.option('0 - para voltar\n')
];

const cityGroupMessages = [
    colors.title('Agrupar por Cidade - Menu\n'),
    colors.option('1 - Ordem crescente'),
    colors.option('2 - Ordem descrente'),
    colors.option('0 - para voltar\n')
];

const countryGroupMessages = [
    colors.title('Agrupar por País - Menu\n'),
    colors.option('1 - Ordem crescente'),
    colors.option('2 - Ordem descrente'),
    colors.option('0 - para voltar\n')
];

module.exports = {
    bandGroupMessages,
    cityGroupMessages,
    cityMessages,
    colorGroupMessages,
    colorMessages,
    companyGroupMessages,
    countryGroupMessages,
    countryMessages,
    departmentGroupMessages,
    filterMessages,
    genderGroupMessages,
    groupMessages,
    mainMessages
};
