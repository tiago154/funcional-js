const messages = require('../messages');
const { showSumNoFilter, showSumWithFilter } = require('../../operations/data-request');
const { buildMenu, reentryMenu } = require('../../operations/menu-helper');
const reentry = require('./reentry-sum');
const fieldNames = require('../field-names');


const petsMenu = returnMenu => {
    const inputUser = buildMenu(messages.petsSumMessages);

    if (inputUser === '0') return returnMenu();
    if (inputUser === '1') {
        showSumNoFilter(fieldNames.pets);

        const reentryOption = reentryMenu(reentry.pets);

        if (reentryOption === 's') return petsMenu(returnMenu);

        return returnMenu();
    }

    if (inputUser === '2') return sumPetsByCountry(returnMenu);

    return petsMenu(returnMenu);
};

const sumPetsByCountry = returnMenu => {
    const inputUser = buildMenu(messages.petsSumCountryMessages);

    if (inputUser === '0') return petsMenu(returnMenu);

    showSumWithFilter(fieldNames.pets, fieldNames.country, inputUser);

    const reentryOption = reentryMenu(reentry.pets);

    if (reentryOption === 's') return sumPetsByCountry(returnMenu);

    return petsMenu(returnMenu);
};

module.exports = { petsMenu };
