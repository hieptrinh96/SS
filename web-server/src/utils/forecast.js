const request = require('request');

const forecast = (latitude, longitude, cb) => {
    const url = 'http://api.weatherstack.com/current?access_key=9416c59f17dc33e87d34406ab9c48d63&query=' + latitude + ',' + longitude + '&units=f';

    request({ url: url, json: true}, (error, { body }) => {
        if (error) cb('Unable to connect to weather service!', undefined);
        else if (body.error) cb('Unable to find location', undefined)
        else cb(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain.');
    })
}

module.exports = forecast;