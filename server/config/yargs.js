
const argv = require('yargs')
    .command('getCountry', 'impreme en consola el nombre del pais', {
        description: {
            alias: 'd',
            desc: 'Se obtiene la información del país',
            demand: true
        }
    })
    .command('getCountries', 'Imprime en consola los nombres de los paises que guarden similitud con la busqueda', {
        description: {
            alias: 'd',
            desc: 'Se obtiene todos los paises que posean parte de la palabra de busqueda',
            demand: true
        }
    })
    .help()
    .argv;


module.exports = argv