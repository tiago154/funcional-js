const { colorMessages } = require('../messages');
const { colorFilter } = require('../../filters');
const data = require('../../data/mock-data.json');
const { getData, reentryMenu } = require('../operations');

const countryMenu = (buildMenu) => {
    const option = buildMenu(colorMessages);

    if (option === '0') return require('../index').filterMenu(buildMenu);

    getData(colorFilter, data, option);

    const reentryOption = reentryMenu('Filtro', 'Cor');

    if (reentryOption !== 's') require('../index').filterMenu(buildMenu);

    return countryMenu(buildMenu);
}

module.exports = countryMenu;
