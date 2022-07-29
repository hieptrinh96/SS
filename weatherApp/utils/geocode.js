const request = require('request');
const geocode = (address, cb) => {
    const url = 'https://api.geocod.io/v1.7/geocode?q=' + address + '&limit=1&api_key=ede6e6f32dee6662e22226444262eee6221df6f';
    request({ url, json: true }, (error, { body }) => {
        if (error) cb('Unable to connect to location services!'.undefined);
        // we're turning the data from the API and only turning the body portion into a string
        // console.log(response.body.current)
        // so body basically represents the object that the API data is stored
        // that's why we can use body.current to retrieve the information from the current key 
        else if (body.results.length === 0) cb('Unable to find location. Try another search.', undefined);
        else cb(undefined, {
            latitude: body.results[0].location.lat,
            longitude: body.results[0].location.lng,
            location: body.results[0].formatted_address
        })
    })
}
module.exports = geocode;