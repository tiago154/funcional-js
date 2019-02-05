const { groupMessages } = require('../messages');
const bandQuantityMenu = require('./band-quantity');

const groupMenu = (buildMenu) => {
    const option = buildMenu(groupMessages);
    if (option === '1') return bandQuantityMenu(buildMenu);
    if (option === '0') return require('../index').mainMenu(buildMenu);
    return filterMenu(buildMenu);
}

module.exports = groupMenu;


