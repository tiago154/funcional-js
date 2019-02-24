const database = require('../data/mock-data.json');
const filters = require('./filters');
const fields = require('../menu/field-names');
const allowedFields = [fields.pets];

const byField = (fieldNameSum, data = database) =>
    data.reduce((prev, curr) =>
        allowedFields.includes(fieldNameSum) ? prev + curr[fieldNameSum] : 0, 0);

const withFilter = (fieldNameSum, filterField, inputUser) => {
    const dataFiltered = filters.byField(filterField, inputUser);
    return byField(fieldNameSum, dataFiltered);
};

module.exports = { byField, withFilter };
