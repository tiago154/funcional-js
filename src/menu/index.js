const messages = require('./messages');
const { buildMenu } = require('../operations/menu-helper');
const filterOptions = require('./filter-options');
const groupOptions = require('./group-options');
const sumOptions = require('./sum-options');

const mainMenu = () => {
    const option = buildMenu(messages.mainMessages);

    if (option === '1') return filterMenu();
    if (option === '2') return groupMenu();
    if (option === '3') return sumMenu();
    if (option === '0') return process.exit('\nDesligando...'.gray);

    return mainMenu();
};

const filterMenu = () => {
    const option = buildMenu(messages.filterMessages);

    if (option === '1') return filterOptions.cityMenu(filterMenu);
    if (option === '2') return filterOptions.countryMenu(filterMenu);
    if (option === '3') return filterOptions.colorMenu(filterMenu);
    if (option === '0') return mainMenu();

    return filterMenu();
};

const groupMenu = () => {
    const option = buildMenu(messages.groupMessages);

    if (option === '1') return groupOptions.bandGroupMenu(groupMenu);
    if (option === '2') return groupOptions.colorGroupMenu(groupMenu);
    if (option === '3') return groupOptions.companyGroupMenu(groupMenu);
    if (option === '4') return groupOptions.departmentGroupMenu(groupMenu);
    if (option === '5') return groupOptions.genderGroupMenu(groupMenu);
    if (option === '6') return groupOptions.cityGroupMenu(groupMenu);
    if (option === '7') return groupOptions.countryGroupMenu(groupMenu);
    if (option === '0') return mainMenu();

    return groupMenu();
};

const sumMenu = () => {
    const option = buildMenu(messages.sumMessages);

    if (option === '1') return sumOptions.petsMenu(sumMenu);
    if (option === '0') return mainMenu();

    return sumMenu();
};

module.exports = { mainMenu };

