const messages = require('../messages');
const { showDataGroup } = require('../../operations/data-request');
const menuHelper = require('../../operations/menu-helper');
const fieldNames = require('../field-names');
const reentry = require('./reentry-group');
const buildMenu = menuHelper.buildMenu;
const isReentryOption = menuHelper.isReentryOption;
const isReturnOption = menuHelper.isReturnOption;


const isDescOption = option => option === '2';

const bandGroupMenu = (returnMenu) => {
    const inputUser = buildMenu(messages.bandGroupMessages);

    if (isReturnOption(inputUser)) return returnMenu();

    showDataGroup(fieldNames.band, isDescOption(inputUser));

    if (isReentryOption(reentry.band)) return bandGroupMenu(returnMenu);

    return returnMenu();
};

const colorGroupMenu = (returnMenu) => {
    const inputUser = buildMenu(messages.colorGroupMessages);

    if (isReturnOption(inputUser)) return returnMenu();

    showDataGroup(fieldNames.color, isDescOption(inputUser));

    if (isReentryOption(reentry.color)) return colorGroupMenu(returnMenu);

    return returnMenu();
};

const companyGroupMenu = (returnMenu) => {
    const inputUser = buildMenu(messages.companyGroupMessages);

    if (isReturnOption(inputUser)) return returnMenu();

    showDataGroup(fieldNames.company, isDescOption(inputUser));

    if (isReentryOption(reentry.company)) return companyGroupMenu(returnMenu);

    return returnMenu();
};

const departmentGroupMenu = (returnMenu) => {
    const inputUser = buildMenu(messages.departmentGroupMessages);

    if (isReturnOption(inputUser)) return returnMenu();

    showDataGroup(fieldNames.department, isDescOption(inputUser));

    if (isReentryOption(reentry.department)) return departmentGroupMenu(returnMenu);

    return returnMenu();
};

const genderGroupMenu = (returnMenu) => {
    const inputUser = buildMenu(messages.genderGroupMessages);

    if (isReturnOption(inputUser)) return returnMenu();

    showDataGroup(fieldNames.gender, isDescOption(inputUser));

    if (isReentryOption(reentry.gender)) return genderGroupMenu(returnMenu);

    return returnMenu();
};

const cityGroupMenu = (returnMenu) => {
    const inputUser = buildMenu(messages.cityGroupMessages);

    if (isReturnOption(inputUser)) return returnMenu();

    showDataGroup(fieldNames.city, isDescOption(inputUser));

    if (isReentryOption(reentry.city)) return cityGroupMenu(returnMenu);

    return returnMenu();
};

const countryGroupMenu = (returnMenu) => {
    const inputUser = buildMenu(messages.countryGroupMessages);

    if (isReturnOption(inputUser)) return returnMenu();

    showDataGroup(fieldNames.country, isDescOption(inputUser));

    if (reentry.city(reentry.country)) return countryGroupMenu(returnMenu);

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
