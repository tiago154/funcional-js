const getInput = require('./get-input');

module.exports = (operation, menuName, type = 'Reentry') => {
    console.log(`Deseja Realizar uma nova pesquisa?\n`);
    console.log(`'s' - SIM\n'n' - NÃO\n`);
    console.log(`Operação: ${operation}`);
    console.log(`Menu: ${menuName}\n`);
    optionUser = getInput(type);
    console.clear();
    return optionUser;
}
