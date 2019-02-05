const filterMenu = require('../filter');
const groupMenu = require('../group');
const { mainMessages } = require('../messages');

const mainMenu = (buildMenu) => {
    const option = buildMenu(mainMessages);

    if (option === '1') return filterMenu(buildMenu);
    if (option === '2') return groupMenu(buildMenu);
    if (option === '0') return process.exit(0);

    return mainMenu(buildMenu);
}

module.exports = mainMenu;
