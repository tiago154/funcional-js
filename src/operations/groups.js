const database = require('../data/mock-data.json');

// eslint-disable-next-line no-unused-vars
const getUniqueFields = (fieldName, list) =>
    [...new Set(list.map(item => item[fieldName]))];

const sortDesc = (fieldName, a, b) => {
    if (b[fieldName] < a[fieldName])
        return -1;
    if (b[fieldName] > a[fieldName])
        return 1;
    return 0;
};

const sortAsc = (fieldName, a, b) => {
    if (a[fieldName] < b[fieldName])
        return -1;
    if (a[fieldName] > b[fieldName])
        return 1;
    return 0;
};

const compareSort = (fieldName, desc) => (a, b) =>
    desc ? sortDesc(fieldName, a, b) : sortAsc(fieldName, a, b);

const countBy = (fieldName, list) => {
    let object = {};

    list.forEach((item) => item[fieldName] in object ?
        ++object[item[fieldName]] :
        object[item[fieldName]] = 1);

    return object;
};

const byField = (fieldName, desc) => {
    const orderedData = database.sort(compareSort(fieldName, desc));
    return countBy(fieldName, orderedData);
};

module.exports = { byField };
