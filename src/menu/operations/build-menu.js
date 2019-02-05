const getInput = require('./get-input');

const printMessage = (m) => console.log(m);

module.exports = (messages, type = 'Prompt') => {
    console.clear();
    messages.map(printMessage);
    return getInput(type);
}


