const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'direccion',
            describe: 'direccion para recuperar clima',
            string: true
        }
    })
    .help()
    .alias('ayuda', 'a')
    .argv;

geocode.geocodeDireccion(argv.direccion, (errorMensaje, resultado) => {
    if (errorMensaje) {
        console.log(errorMensaje);
    } else {
        console.log(JSON.stringify(resultado, undefined, 2));
    }
});