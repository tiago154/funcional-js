const messages = require('../messages');
const { buildMenu, reentryMenu, getFilter } = require('../../operations');
const filters = require('../../filters');
const reentry = require('./reentry-filter');
const fieldNames = require('../field-names');

const resultByField = getFilter(filters.filterByField);


const cityMenu = returnMenu => {
    const option = buildMenu(messages.cityFilterMessages);

    if (option === '0') return returnMenu();

    resultByField(fieldNames.city, option);

    const reentryOption = reentryMenu(reentry.city);

    if (reentryOption === 's') return cityMenu(returnMenu);

    return returnMenu();
};

const countryMenu = returnMenu => {
    const option = buildMenu(messages.countryFilterMessages);

    if (option === '0') return returnMenu();

    resultByField(fieldNames.country, option);

    const reentryOption = reentryMenu(reentry.country);

    if (reentryOption === 's') return countryMenu(returnMenu);

    return returnMenu();
};

const colorMenu = returnMenu => {
    const option = buildMenu(messages.colorFilterMessages);

    if (option === '0') return returnMenu();

    resultByField(fieldNames.color, option);

    const reentryOption = reentryMenu(reentry.color);

    if (reentryOption === 's') colorMenu(returnMenu);

    return returnMenu();
};

module.exports = { cityMenu, colorMenu, countryMenu };
