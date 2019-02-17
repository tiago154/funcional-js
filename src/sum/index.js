const sumByField = (data, fieldNameSum) => data.reduce((prev, curr) => prev + curr[fieldNameSum], 0);

module.exports = { sumByField };
