module.exports = (data, countryName) => data.filter(d => d.country.toLowerCase() === countryName.toLowerCase());
