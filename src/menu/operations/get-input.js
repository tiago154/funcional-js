const readLineSync = require('readline-sync');

module.exports = (type) => {
    if (type === 'Reentry')
        return readLineSync.question('', { limit: ['s', 'n'], limitMessage: 'Digite [S/N]' });
    if (type === 'Prompt')
        return readLineSync.prompt({ prompt: '=> ' });
    if (type === 'Sort')
        return readLineSync.question('', { limit: ['c', 'd'], limitMessage: 'Digite [C/D]' });

    return ''; ''
}
