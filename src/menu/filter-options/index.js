const messages = require('../messages');
const { buildMenu, reentryMenu, getFilter } = require('../../operations');
const filters = require('../../filters');

const resultByField = getFilter(filters.filterByField);


const cityMenu = returnMenu => {
    const option = buildMenu(messages.cityMessages);

    if (option === '0') return returnMenu();

    resultByField('city', option);

    const reentryOption = reentryMenu('Filtro', 'Cidade');

    if (reentryOption === 's') return cityMenu(returnMenu);

    return returnMenu();
};

const countryMenu = returnMenu => {
    const option = buildMenu(messages.countryMessages);

    if (option === '0') return returnMenu();

    resultByField('country', option);

    const reentryOption = reentryMenu('Filtro', 'País');

    if (reentryOption === 's') return countryMenu(returnMenu);

    return returnMenu();
};

const colorMenu = returnMenu => {
    const option = buildMenu(messages.colorMessages);

    if (option === '0') return returnMenu();

    resultByField('favoriteColour', option);

    const reentryOption = reentryMenu('Filtro', 'Cor');

    if (reentryOption === 's') colorMenu(returnMenu);

    return returnMenu();
};

module.exports = { cityMenu, colorMenu, countryMenu };
