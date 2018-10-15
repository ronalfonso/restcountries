const Country = require("request");
const Countries = require("request");

exports.getPlaceCountry = function (country) {
    let name = country;
    let countrydUrl = encodeURI(name);
    const url = `https://restcountries.eu/rest/v2/name/${countrydUrl}?fullText=true`;
    return new Promise ((resolve, reject) => {
        Country.get(url, (error, response, body) => {

            if(error) {
                reject (error);
            }
            var country = JSON.parse(body);
            var pais = {
                name: country[0].name,
                lat: country[0].latlng[0],
                lng: country[0].latlng[1],
                region: country[0].region,
                subregion: country[0].subregion,
                capital: country[0].capital,
                alpha3Code: country[0].alpha3Code,
                population: country[0].population,
                timezones: country[0].timezones[0],
                numericCode: parseInt(country[0].numericCode),
                flag: country[0].flag
            };
           resolve(pais);
        });
    })
};

exports.getPlaceCountries = function(countries, callback) {

    var prueba = countries.split(";");
    function getCountry(countries) {
        return new Promise(function(resolve, reject) {
            var countrydUrl = countries;
            countrydUrl = countrydUrl.toLowerCase();
            Countries.get('https://restcountries.eu/rest/v2/name/' + countrydUrl, (err, resp, prueba) => {
                if (err) return res.status(500).send(err.message);
                var country = [];
                var obj = JSON.parse(prueba);
                obj.map(function({name, altSpellings, capital, region, flag}){
                    const objeto = {name, altSpellings, capital, region, flag};
                    country.push(objeto);
                });
                resolve(country);
            });
        });
    }

    var paises = [];
    for (var i = 0; i < prueba.length; i++) {
        paises.push(getCountry(prueba[i]));
    }
    Promise.all(paises).then(function(results) {
        callback(results);

    });
};









