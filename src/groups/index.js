// eslint-disable-next-line no-unused-vars
const getUniqueFields = (list, fieldName) => [...new Set(list.map(item => item[fieldName]))];

const sortDesc = (a, b, fieldName) => {
    if (b[fieldName] < a[fieldName])
        return -1;
    if (b[fieldName] > a[fieldName])
        return 1;
    return 0;
};

const sortAsc = (a, b, fieldName) => {
    if (a[fieldName] < b[fieldName])
        return -1;
    if (a[fieldName] > b[fieldName])
        return 1;
    return 0;
};

const compareSort = (fieldName, desc = false) => (a, b) =>
    desc ? sortDesc(a, b, fieldName) : sortAsc(a, b, fieldName);

const countBy = (list, fieldName) => {
    let object = {};

    list.forEach((item) =>
        item[fieldName] in object ? ++object[item[fieldName]] : object[item[fieldName]] = 1);

    return object;
};

const groupByField = (data, fieldName, desc) => {
    const ordered = data.sort(compareSort(fieldName, desc));
    return countBy(ordered, fieldName);
};

module.exports = { groupByField };
