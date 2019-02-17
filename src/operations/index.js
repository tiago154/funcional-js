const readLineSync = require('readline-sync');
const data = require('../data/mock-data.json');
const R = require('ramda');
const colors = require('./colors-text');

const printMessage = m => console.log(m);

const getInput = (type) => {
    if (type === 'Reentry')
        return readLineSync.question('', { limit: ['s', 'n'], limitMessage: colors.information('Digite [S/N]') });
    if (type === 'Prompt')
        return readLineSync.prompt({ prompt: colors.prompt('=> ') });
    return '';
};
const buildMenu = (messages, type = 'Prompt') => {
    console.clear();
    messages.map(printMessage);
    return getInput(type);
};

const isEmptyOrIsNill = (isEmpty, isNil) => values => (isEmpty(values) || isNil(values));
const isInvalidValues = isEmptyOrIsNill(R.isEmpty, R.isNil);

const printValues = values => isInvalidValues(values) ?
    console.log(colors.graceless('\nDados não localizados\n')) :
    console.log(colors.result(`\n${JSON.stringify(values, null, 4)}\n`));

const reentryMenu = ([operation, menuName]) => {
    console.log(colors.prompt('Deseja Realizar uma nova pesquisa?\n'));
    console.log(colors.option('\'S\' - SIM\n\'N\' - NÃO\n'));
    console.log(colors.information(`Operação: ${operation}`));
    console.log(colors.information(`Menu: ${menuName}\n`));
    const optionUser = getInput('Reentry');
    console.clear();
    return optionUser;
};

const getFilter = functionFilter => (filterField, inputUser) => printValues(functionFilter(data, filterField, inputUser));
const getGroup = functionGroup => (groupField, desc) => printValues(functionGroup(data, groupField, desc));
const getSumNoFilter = functionSum => sumField => printValues(functionSum(data, sumField));
const getSumWithFilter = (functionSum, sumField, functionFilter) => (filterField, inputUser) => {
    const filter = functionFilter(data, filterField, inputUser);
    return printValues(functionSum(filter, sumField));
};

module.exports = {
    buildMenu,
    getFilter,
    getGroup,
    getInput,
    getSumNoFilter,
    getSumWithFilter,
    printValues,
    reentryMenu
};
