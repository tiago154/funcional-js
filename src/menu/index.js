const messages = require('./messages');
const { buildMenu } = require('../operations');
const filterOptions = require('./filter-options');
const groupOptions = require('./group-options');

const mainMenu = () => {
    const option = buildMenu(messages.mainMessages);

    if (option === '1') return filterMenu();
    if (option === '2') return groupMenu();
    if (option === '0') return process.exit('\nDesligando...');

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

    if (option === '1') return groupOptions.bandQuantityMenu(groupMenu);
    if (option === '0') return mainMenu();

    return filterMenu();
};

module.exports = { mainMenu };

