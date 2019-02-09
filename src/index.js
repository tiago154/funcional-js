const { mainMenu } = require('./menu');

process.on('exit', (message) => console.info(message));

const init = () => mainMenu();

init();
