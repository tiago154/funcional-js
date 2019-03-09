const database = require('../data/mock-data.json');

// const getUniqueFields = (fieldName, list) =>
//     [...new Set(list.map(item => item[fieldName]))];

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

const countByField = (fieldName, list) => list.reduce((prev, curr) => {
    if (!curr[fieldName]) return {};
    curr[fieldName] in prev ? prev[curr[fieldName]]++ : prev[curr[fieldName]] = 1;
    return prev;
}, {});

const byField = (fieldName, desc) => {
    const orderedData = database.sort(compareSort(fieldName, desc));
    return countByField(fieldName, orderedData);
};

module.exports = { byField };
