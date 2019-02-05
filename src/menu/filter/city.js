const { cityMessages } = require('../messages');
const { cityFilter } = require('../../filters');
const data = require('../../data/mock-data.json');
const { getData, reentryMenu } = require('../operations');

const cityMenu = (buildMenu) => {
    const option = buildMenu(cityMessages);

    if (option === '0') return require('../index').filterMenu(buildMenu);

    getData(cityFilter, data, option);

    const reentryOption = reentryMenu('Filtro', 'Cidade');

    if (reentryOption !== 's') require('../index').filterMenu(buildMenu);

    return cityMenu(buildMenu);
}

module.exports = cityMenu;
