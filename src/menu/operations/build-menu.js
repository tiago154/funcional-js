const readLineSync = require('readline-sync');

const printMessage = (m) => console.log(m);

module.exports = (messages) => {
    console.clear();
    messages.map(printMessage);
    return readLineSync.prompt({ prompt: '=> ' });
}


