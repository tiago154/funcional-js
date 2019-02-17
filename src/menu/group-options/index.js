const messages = require('../messages');
const { buildMenu, reentryMenu, getGroup } = require('../../operations');
const groups = require('../../groups');
const fieldNames = require('../field-names');
const reentry = require('./reentry-group');

const resultByField = getGroup(groups.groupByField);

const isDescOption = option => option === '2';

const bandGroupMenu = (returnMenu) => {
    const option = buildMenu(messages.bandGroupMessages);

    if (option === '0') return returnMenu();

    resultByField(fieldNames.band, isDescOption(option));

    const reentryOption = reentryMenu(reentry.band);

    if (reentryOption === 's') return bandGroupMenu(returnMenu);

    return returnMenu();
};

const colorGroupMenu = (returnMenu) => {
    const option = buildMenu(messages.colorGroupMessages);

    if (option === '0') return returnMenu();

    resultByField(fieldNames.color, isDescOption(option));

    const reentryOption = reentryMenu(reentry.color);

    if (reentryOption === 's') return colorGroupMenu(returnMenu);

    return returnMenu();
};

const companyGroupMenu = (returnMenu) => {
    const option = buildMenu(messages.companyGroupMessages);

    if (option === '0') return returnMenu();

    resultByField(fieldNames.company, isDescOption(option));

    const reentryOption = reentryMenu(reentry.company);

    if (reentryOption === 's') return companyGroupMenu(returnMenu);

    return returnMenu();
};

const departmentGroupMenu = (returnMenu) => {
    const option = buildMenu(messages.departmentGroupMessages);

    if (option === '0') return returnMenu();

    resultByField(fieldNames.department, isDescOption(option));

    const reentryOption = reentryMenu(reentry.department);

    if (reentryOption === 's') return departmentGroupMenu(returnMenu);

    return returnMenu();
};

const genderGroupMenu = (returnMenu) => {
    const option = buildMenu(messages.genderGroupMessages);

    if (option === '0') return returnMenu();

    resultByField(fieldNames.gender, isDescOption(option));

    const reentryOption = reentryMenu(reentry.gender);

    if (reentryOption === 's') return genderGroupMenu(returnMenu);

    return returnMenu();
};

const cityGroupMenu = (returnMenu) => {
    const option = buildMenu(messages.cityGroupMessages);

    if (option === '0') return returnMenu();

    resultByField(fieldNames.city, isDescOption(option));

    const reentryOption = reentryMenu(reentry.city);

    if (reentryOption === 's') return cityGroupMenu(returnMenu);

    return returnMenu();
};

const countryGroupMenu = (returnMenu) => {
    const option = buildMenu(messages.countryGroupMessages);

    if (option === '0') return returnMenu();

    resultByField(fieldNames.country, isDescOption(option));

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
