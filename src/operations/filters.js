const database = require('../data/mock-data.json');

const filterData = (fieldName, inputUser) => item => item[fieldName].toLowerCase() === inputUser.toLowerCase();

const byField = (fieldName, inputUser) => database.filter(filterData(fieldName, inputUser));

module.exports = { byField };
