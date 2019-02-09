const messages = require('../messages');
const { buildMenu, reentryMenu, getData } = require('../../operations');
const filters = require('../../filters');

const cityMenu = returnMenu => {
    const option = buildMenu(messages.cityMessages);

    if (option === '0') return returnMenu();

    getData(filters.cityFilter, option);

    const reentryOption = reentryMenu('Filtro', 'Cidade');

    if (reentryOption === 's') return cityMenu(returnMenu);

    return returnMenu();
}

const countryMenu = returnMenu => {
    const option = buildMenu(messages.countryMessages);

    if (option === '0') return returnMenu();

    getData(filters.countryFilter, option);

    const reentryOption = reentryMenu('Filtro', 'País');

    if (reentryOption === 's') return countryMenu(returnMenu);

    return returnMenu();
}

const colorMenu = returnMenu => {
    const option = buildMenu(messages.colorMessages);

    if (option === '0') return returnMenu();

    getData(filters.colorFilter, option);

    const reentryOption = reentryMenu('Filtro', 'Cor');

    if (reentryOption === 's') colorMenu(returnMenu);

    return returnMenu();
}

module.exports = { colorMenu, countryMenu, cityMenu };
