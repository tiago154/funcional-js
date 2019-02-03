const printValues = require('./print-values');

module.exports = (fn, data, inputUser) => printValues(fn(data, inputUser));
