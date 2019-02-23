const messages = require('../messages');
const { showDatafiltered } = require('../../operations/data-request');
const { buildMenu, reentryMenu } = require('../../operations/menu-helper');
const reentry = require('./reentry-filter');
const fieldNames = require('../field-names');

const cityMenu = returnMenu => {
    const inputUser = buildMenu(messages.cityFilterMessages);

    if (inputUser === '0') return returnMenu();

    showDatafiltered(fieldNames.city, inputUser);

    const reentryOption = reentryMenu(reentry.city);

    if (reentryOption === 's') return cityMenu(returnMenu);

    return returnMenu();
};

const countryMenu = returnMenu => {
    const inputUser = buildMenu(messages.countryFilterMessages);

    if (inputUser === '0') return returnMenu();

    showDatafiltered(fieldNames.country, inputUser);

    const reentryOption = reentryMenu(reentry.country);

    if (reentryOption === 's') return countryMenu(returnMenu);

    return returnMenu();
};

const colorMenu = returnMenu => {
    const inputUser = buildMenu(messages.colorFilterMessages);

    if (inputUser === '0') return returnMenu();

    showDatafiltered(fieldNames.color, inputUser);

    const reentryOption = reentryMenu(reentry.color);

    if (reentryOption === 's') colorMenu(returnMenu);

    return returnMenu();
};

module.exports = { cityMenu, colorMenu, countryMenu };
