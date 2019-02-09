const readLineSync = require('readline-sync');
const data = require('../data/mock-data.json');
const R = require('ramda');

const printMessage = m => console.log(m);

const getInput = (type) => {
    if (type === 'Reentry')
        return readLineSync.question('', { limit: ['s', 'n'], limitMessage: 'Digite [S/N]' });
    if (type === 'Prompt')
        return readLineSync.prompt({ prompt: '=> ' });
    if (type === 'Sort')
        return readLineSync.question('', { limit: ['c', 'd'], limitMessage: 'Digite [C/D]' });
    return '';
}
const buildMenu = (messages, type = 'Prompt') => {
    console.clear();
    messages.map(printMessage);
    return getInput(type);
}

const isEmptyOrIsNill = (isEmpty,isNil) => values => !(isEmpty(values) || isNil(values));
const validateValues = isEmptyOrIsNill(R.isEmpty,R.isNil);

const printValues = values => validateValues(values) ?
    console.log(`\n${JSON.stringify(values, null, 4)}\n`) :
    console.log('\nDados não localizados\n');

const reentryMenu = (operation, menuName) => {
    console.log(`Deseja Realizar uma nova pesquisa?\n`);
    console.log(`'s' - SIM\n'n' - NÃO\n`);
    console.log(`Operação: ${operation}`);
    console.log(`Menu: ${menuName}\n`);
    optionUser = getInput('Reentry');
    console.clear();
    return optionUser;
}

const getData = (functionOrigin, inputUser) => printValues(functionOrigin(data, inputUser));

module.exports = {
    getInput,
    getData,
    buildMenu,
    printValues,
    reentryMenu
}
