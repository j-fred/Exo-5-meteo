const express = require("express");
const app = express();
const request = require('request');

const port = 7856;

app.use("/static", express.static('static'));


/**
 * Route vers index.html 
 */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

/**
 * traitement des données
 */
app.get('/get_meteo', function (req, res) {
    const apiKey = "2805743dc9cc7f2c6abc0c2699aa9e1a";
    const run = "6690283";
    const par = "2988507";
    const mar = "2995469";
    const mos = "524901";
    const url = "http://api.openweathermap.org/data/2.5/group?id=" + run + "," + par + "," + mar + "," + mos + "&lang=fr&units=metric&appid=" + apiKey;
    request(url, function (err, response, body) {
        if (err) {
            console.log(err);
        } else {
            const weather = JSON.parse(body);
            res.json(weather.list);
        }
    })

});


function getWeather(){

}
/**
 * Port d'écoute du serveur
 */
const listener = app.listen(port, function () {
    console.log('Serveur demarré sur le port ' + listener.address().port);
})