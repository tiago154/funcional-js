module.exports = (data, cityName) => data.filter(d => d.city.toLowerCase() === cityName.toLowerCase());

