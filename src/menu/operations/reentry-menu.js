const readLineSync = require('readline-sync');

module.exports = (operation, menuName) => {
    console.log(`Deseja Realizar uma nova pesquisa?\n`);
    console.log(`'s' - SIM\n'n' - NÃO\n`);
    console.log(`Operação: ${operation}`);
    console.log(`Menu: ${menuName}\n`);
    optionUser = readLineSync.question('', { limit: ['s', 'n'], limitMessage: 'Digite [S/N]' });
    console.clear();
    return optionUser;
}
