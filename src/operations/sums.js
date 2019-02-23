const database = require('../data/mock-data.json');
const filters = require('./filters');

const byField = (fieldNameSum, data = database) => data.reduce((prev, curr) => prev + curr[fieldNameSum], 0);

const withFilter = (fieldNameSum, filterField, inputUser) => {
    const dataFiltered = filters.byField(filterField, inputUser);
    return byField(fieldNameSum, dataFiltered);
};

module.exports = { byField, withFilter };
