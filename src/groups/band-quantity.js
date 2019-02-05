const _ = require('lodash');

module.exports = (data, fieldName) => _.countBy(_.sortBy(data, fieldName),fieldName)
