const messages = require('../messages');
const { buildMenu, reentryMenu, getData } = require('../../operations');
const groups = require('../../groups');

const bandQuantityMenu = (returnMenu) => {
    const option = buildMenu(messages.bandQuantityMessages);

    if (option === '0') return returnMenu();

    getData(groups.bandQuantity, 'favoriteMetalBand');

    const reentryOption = reentryMenu('Agrupar', 'Quantidade de Bandas');

    if (reentryOption === 's') return bandQuantityMenu(returnMenu);

    return returnMenu();
}

module.exports = { bandQuantityMenu }
