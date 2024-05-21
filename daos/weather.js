const Weather = require('../models/weather');

module.exports = {};

module.exports.findTemperature = async (location) => {
    const weatherobj = await Weather.findOne({'name':location}).lean()
    return weatherobj
    
};

