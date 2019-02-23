const messages = require('../messages');
const { showSumNoFilter, showSumWithFilter } = require('../../operations/data-request');
const menuHelper = require('../../operations/menu-helper');
const reentry = require('./reentry-sum');
const fieldNames = require('../field-names');
const buildMenu = menuHelper.buildMenu;
const isReentryOption = menuHelper.isReentryOption;
const isReturnOption = menuHelper.isReturnOption;


const petsMenu = returnMenu => {
    const inputUser = buildMenu(messages.petsSumMessages);

    if (isReturnOption(inputUser)) return returnMenu();
    if (inputUser === '1') {
        showSumNoFilter(fieldNames.pets);

        if (isReentryOption(reentry.pets)) return petsMenu(returnMenu);

        return returnMenu();
    }

    if (inputUser === '2') return sumPetsByCountry(returnMenu);

    return petsMenu(returnMenu);
};

const sumPetsByCountry = returnMenu => {
    const inputUser = buildMenu(messages.petsSumCountryMessages);

    if (isReturnOption(inputUser)) return petsMenu(returnMenu);

    showSumWithFilter(fieldNames.pets, fieldNames.country, inputUser);

    if (isReentryOption(reentry.pets)) return sumPetsByCountry(returnMenu);

    return petsMenu(returnMenu);
};

module.exports = { petsMenu };
