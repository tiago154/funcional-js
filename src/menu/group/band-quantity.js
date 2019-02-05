const { bandQuantityMessages } = require('../messages');
const { bandQuantity } = require('../../groups');
const data = require('../../data/mock-data.json');
const { getData, reentryMenu } = require('../operations');

const bandQuantityMenu = (buildMenu) => {
    const option = buildMenu(bandQuantityMessages);

    if (option === '0') return require('../index').filterMenu(buildMenu);

    getData(bandQuantity, data, 'favoriteMetalBand');

    const reentryOption = reentryMenu('Agrupar', 'Quantidade de Bandas');

    if (reentryOption !== 's') require('../index').groupMenu(buildMenu);

    return bandQuantityMenu(buildMenu);
}

module.exports = bandQuantityMenu;
