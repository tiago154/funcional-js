const { mainMenu } = require('./menu');

process.on('exit', (message) => console.info(message));

const start = () => mainMenu();

module.exports = { start };
