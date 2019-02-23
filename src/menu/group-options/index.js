const messages = require('../messages');
const { showDataGroup } = require('../../operations/data-request');
const { buildMenu, reentryMenu } = require('../../operations/menu-helper');
const fieldNames = require('../field-names');
const reentry = require('./reentry-group');


const isDescOption = option => option === '2';

const bandGroupMenu = (returnMenu) => {
    const inputUser = buildMenu(messages.bandGroupMessages);

    if (inputUser === '0') return returnMenu();

    showDataGroup(fieldNames.band, isDescOption(inputUser));

    const reentryOption = reentryMenu(reentry.band);

    if (reentryOption === 's') return bandGroupMenu(returnMenu);

    return returnMenu();
};

const colorGroupMenu = (returnMenu) => {
    const inputUser = buildMenu(messages.colorGroupMessages);

    if (inputUser === '0') return returnMenu();

    showDataGroup(fieldNames.color, isDescOption(inputUser));

    const reentryOption = reentryMenu(reentry.color);

    if (reentryOption === 's') return colorGroupMenu(returnMenu);

    return returnMenu();
};

const companyGroupMenu = (returnMenu) => {
    const inputUser = buildMenu(messages.companyGroupMessages);

    if (inputUser === '0') return returnMenu();

    showDataGroup(fieldNames.company, isDescOption(inputUser));

    const reentryOption = reentryMenu(reentry.company);

    if (reentryOption === 's') return companyGroupMenu(returnMenu);

    return returnMenu();
};

const departmentGroupMenu = (returnMenu) => {
    const inputUser = buildMenu(messages.departmentGroupMessages);

    if (inputUser === '0') return returnMenu();

    showDataGroup(fieldNames.department, isDescOption(inputUser));

    const reentryOption = reentryMenu(reentry.department);

    if (reentryOption === 's') return departmentGroupMenu(returnMenu);

    return returnMenu();
};

const genderGroupMenu = (returnMenu) => {
    const inputUser = buildMenu(messages.genderGroupMessages);

    if (inputUser === '0') return returnMenu();

    showDataGroup(fieldNames.gender, isDescOption(inputUser));

    const reentryOption = reentryMenu(reentry.gender);

    if (reentryOption === 's') return genderGroupMenu(returnMenu);

    return returnMenu();
};

const cityGroupMenu = (returnMenu) => {
    const inputUser = buildMenu(messages.cityGroupMessages);

    if (inputUser === '0') return returnMenu();

    showDataGroup(fieldNames.city, isDescOption(inputUser));

    const reentryOption = reentryMenu(reentry.city);

    if (reentryOption === 's') return cityGroupMenu(returnMenu);

    return returnMenu();
};

const countryGroupMenu = (returnMenu) => {
    const inputUser = buildMenu(messages.countryGroupMessages);

    if (inputUser === '0') return returnMenu();

    showDataGroup(fieldNames.country, isDescOption(inputUser));

    const reentryOption = reentryMenu(reentry.country);

    if (reentryOption === 's') return countryGroupMenu(returnMenu);

    return returnMenu();
};

module.exports = {
    bandGroupMenu,
    cityGroupMenu,
    colorGroupMenu,
    companyGroupMenu,
    countryGroupMenu,
    departmentGroupMenu,
    genderGroupMenu
};
