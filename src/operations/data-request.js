const filters = require('./filters');
const groups = require('./groups');
const sums = require('./sums');
const printValues = require('./print-values');

const showDatafiltered = (filterField, inputUser) => printValues(filters.byField(filterField, inputUser));
const showDataGroup = (groupField, desc) => printValues(groups.byField(groupField, desc));
const showSumNoFilter = (sumField) => printValues(sums.byField(sumField));
const showSumWithFilter = (sumField, filterField, inputUser) =>
    printValues(sums.withFilter(sumField, filterField, inputUser));

module.exports = {
    showDataGroup,
    showDatafiltered,
    showSumNoFilter,
    showSumWithFilter
};
