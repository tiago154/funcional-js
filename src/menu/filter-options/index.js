const messages = require('../messages');
const { showDatafiltered } = require('../../operations/data-request');
const menuHelper = require('../../operations/menu-helper');
const reentry = require('./reentry-filter');
const fieldNames = require('../field-names');
const buildMenu = menuHelper.buildMenu;
const isReentryOption = menuHelper.isReentryOption;
const isReturnOption = menuHelper.isReturnOption;

const cityMenu = returnMenu => {
    const inputUser = buildMenu(messages.cityFilterMessages);

    if (isReturnOption(inputUser)) return returnMenu();

    showDatafiltered(fieldNames.city, inputUser);

    if (isReentryOption(reentry.city)) return cityMenu(returnMenu);

    return returnMenu();
};

const countryMenu = returnMenu => {
    const inputUser = buildMenu(messages.countryFilterMessages);

    if (isReturnOption(inputUser)) return returnMenu();

    showDatafiltered(fieldNames.country, inputUser);

    if (isReentryOption(reentry.country)) return countryMenu(returnMenu);

    return returnMenu();
};

const colorMenu = returnMenu => {
    const inputUser = buildMenu(messages.colorFilterMessages);

    if (isReturnOption(inputUser)) return returnMenu();

    showDatafiltered(fieldNames.color, inputUser);

    if (isReentryOption(reentry.color)) colorMenu(returnMenu);

    return returnMenu();
};

module.exports = { cityMenu, colorMenu, countryMenu };
