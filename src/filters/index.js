const filterData = (fieldName, inputUser) => item => item[fieldName].toLowerCase() === inputUser.toLowerCase();

const filterByField = (data, fieldName, inputUser) => data.filter(filterData(fieldName, inputUser));

module.exports = { filterByField };
