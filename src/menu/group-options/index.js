const messages = require('../messages');
const { buildMenu, reentryMenu, getGroup } = require('../../operations');
const groups = require('../../groups');

const resultByField = getGroup(groups.groupByField);

const isDescOption = option => option === '2';

const bandQuantityMenu = (returnMenu) => {
    const option = buildMenu(messages.bandQuantityMessages);

    if (option === '0') return returnMenu();

    resultByField('favoriteMetalBand', isDescOption(option));

    const reentryOption = reentryMenu('Agrupar', 'Quantidade de Bandas');

    if (reentryOption === 's') return bandQuantityMenu(returnMenu);

    return returnMenu();
};

const colorQuantityMenu = (returnMenu) => {
    const option = buildMenu(messages.colorQuantityMessages);

    if (option === '0') return returnMenu();

    resultByField('favoriteColour', isDescOption(option));

    const reentryOption = reentryMenu('Agrupar', 'Quantidade de Cores');

    if (reentryOption === 's') return colorQuantityMenu(returnMenu);

    return returnMenu();
};

module.exports = { bandQuantityMenu, colorQuantityMenu };
