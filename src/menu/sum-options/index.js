const messages = require('../messages');
const { buildMenu, reentryMenu, getSumNoFilter, getSumWithFilter } = require('../../operations');
const sum = require('../../sum');
const reentry = require('./reentry-sum');
const fieldNames = require('../field-names');
const filter = require('../../filters');

const sumNoFilter = getSumNoFilter(sum.sumByField);
const sumWithFilter = getSumWithFilter(sum.sumByField, fieldNames.pets, filter.filterByField);

const petsMenu = returnMenu => {
    const option = buildMenu(messages.petsSumMessages);

    if (option === '0') return returnMenu();
    if (option === '1') {
        sumNoFilter(fieldNames.pets);

        const reentryOption = reentryMenu(reentry.pets);

        if (reentryOption === 's') return petsMenu(returnMenu);

        return returnMenu();
    }

    if (option === '2') return sumPetsByCountry(returnMenu);

    return petsMenu(returnMenu);
};

const sumPetsByCountry = returnMenu => {
    const option = buildMenu(messages.petsSumCountryMessages);

    if (option === '0') return petsMenu(returnMenu);

    sumWithFilter(fieldNames.country, option);

    const reentryOption = reentryMenu(reentry.pets);

    if (reentryOption === 's') return sumPetsByCountry(returnMenu);

    return petsMenu(returnMenu);
};

module.exports = { petsMenu };
