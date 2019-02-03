const { filterMessages } = require('../messages');
const cityMenu = require('./city')
const countryMenu = require('./country');

const filterMenu = (buildMenu) => {
    const option = buildMenu(filterMessages);
    if (option === '1') return cityMenu(buildMenu);
    if (option === '2') return countryMenu(buildMenu);
    if (option === '0') return require('../index').mainMenu(buildMenu);
    return filterMenu(buildMenu);
}

module.exports = filterMenu;


