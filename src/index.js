const { buildMenu } = require('./menu/operations');
const { mainMenu } = require('./menu');

const init = () => mainMenu(buildMenu);

init();




