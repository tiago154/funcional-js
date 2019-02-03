const { countryMessages } = require('../messages');
const { countryFilter } = require('../../filters');
const data = require('../../data/mock-data.json');
const { getFilter, reentryMenu } = require('../operations');

const countryMenu = (buildMenu) => {
    const option = buildMenu(countryMessages);

    if (option === '0') return require('../index').filterMenu(buildMenu);

    getFilter(countryFilter, data, option);

    const reentryOption = reentryMenu('Filtro', 'Cidade');

    if (reentryOption !== 's') require('../index').filterMenu(buildMenu);

    return countryMenu(buildMenu);
}

module.exports = countryMenu;
