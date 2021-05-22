const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=79f642be682178cbeb2d65fac9136639&query=vijayawada";

request(url,  (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current);
})