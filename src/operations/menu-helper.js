const readLineSync = require('readline-sync');
const colors = require('./colors-text');

const printMessage = m => console.log(m);

const buildMenu = (messages, type = 'Prompt') => {
    console.clear();
    messages.map(printMessage);
    return getInput(type);
};

const getInput = (type) => {
    if (type === 'Reentry')
        return readLineSync.question('', { limit: ['s', 'n'], limitMessage: colors.information('Digite [S/N]') });
    if (type === 'Prompt')
        return readLineSync.prompt({ prompt: colors.prompt('=> ') });
    return '';
};

const reentryMenu = ([operation, menuName]) => {
    console.log(colors.prompt('Deseja Realizar uma nova pesquisa?\n'));
    console.log(colors.option('\'S\' - SIM\n\'N\' - NÃO\n'));
    console.log(colors.information(`Operação: ${operation}`));
    console.log(colors.information(`Menu: ${menuName}\n`));
    const optionUser = getInput('Reentry');
    console.clear();
    return optionUser;
};

module.exports = {
    buildMenu,
    getInput,
    reentryMenu
};
