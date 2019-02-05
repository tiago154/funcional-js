const { mainMenu, operationsMenu } = require('./menu');

const init = (buildMenu) => mainMenu(buildMenu);

init(operationsMenu.buildMenu);
