const request = require('request');
const site ='https://api.geocod.io/v1.7/geocode?q=los+angeles&limit=1&api_key=ede6e6f32dee6662e22226444262eee6221df6f';
const url = 'http://api.weatherstack.com/current?access_key=9416c59f17dc33e87d34406ab9c48d63&query=37.8267,-122.4233&units=f';
request({ url: url, json: true }, (error, response) => {
    // we're turning the data from the API and only turning the body portion into a string
    // console.log(response.body.current)
    // so body basically represents the object that the API data is stored
    // that's why we can use body.current to retrieve the information from the current key 
    console.log(`It is currently ${response.body.current.temperature} degrees out but it feels like ${response.body.current.feelslike} degrees.`)
})
request({ url: site, json:true }, (error, response) => {
    console.log(`The longitude is ${response.body.results[0].location.lng} and the latitude is ${response.body.results[0].location.lat}`)
})