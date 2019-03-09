const R = require('ramda');
const colors = require('./colors-text');

const isEmptyOrIsNill = values => (R.isEmpty(values) || R.isNil(values));

const print = values => isEmptyOrIsNill(values) ?
    console.log(colors.graceless('\nDados não localizados\n')) :
    console.log(colors.result(`\n${JSON.stringify(values, null, 4)}\n`));

module.exports = { print };
