const filters = require('./filters');
const groups = require('./groups');
const sums = require('./sums');
const printValues = require('./print-values');

const showDatafiltered = (filterField, inputUser) =>
    printValues.print(filters.byField(filterField, inputUser));
const showDataGroup = (groupField, desc) =>
    printValues.print(groups.byField(groupField, desc));
const showSumNoFilter = (sumField) => printValues.print(sums.byField(sumField));
const showSumWithFilter = (sumField, filterField, inputUser) =>
    printValues.print(sums.withFilter(sumField, filterField, inputUser));

module.exports = {
    showDataGroup,
    showDatafiltered,
    showSumNoFilter,
    showSumWithFilter
};
