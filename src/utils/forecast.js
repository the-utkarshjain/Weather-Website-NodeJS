const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=fe7aa738c617b5d61d6ca80028cd320d&query=' + encodeURIComponent(latitude) + ',' +encodeURIComponent(longitude)

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress celsius out. It feels like ' + body.current.feelslike + 'degree celsius.')
        }
    })
}

module.exports = forecast