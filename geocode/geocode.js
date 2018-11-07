const solicitud = require('request');

const geocodeDireccion = (direccion, callback) => {
    var direccionEncoded = encodeURIComponent(direccion);
    
    //http://www.mapquestapi.com - API
    solicitud({
        url:  `http://www.mapquestapi.com/geocoding/v1/address?key=XkIbA1CGDKyRVcthTT1L8Pyoa5zA3Aql&location=${direccionEncoded}`,
        json: true
    }, (error, response, body) => {
        if(body.info.statuscode === 400) { callback('no puede estar vacia'); }
        else if(body.results[0].locations[0].street === '') { callback('no es una direccion valida'); }
        else {
            callback(undefined, {
                Direccion: body.results[0].locations[0].street,
                Latitud: body.results[0].locations[0].latLng.lat,
                Longitud: body.results[0].locations[0].latLng.lng,
                Ciudad: body.results[0].locations[0].adminArea4,
            })
        }
        // (error) {console.log('no se puede conectar al api'); }
        // if( body.results[0].locations[0].street === '' ) {
        //     callback('no puede estar vacia');
        // } 
        // else if (body.info.statuscode === 0) {
        //     callback(undefined, {
        //         Direccion: body.results[0].locations[0].street,
        //         Latitud: body.results[0].locations[0].latLng.lat,
        //         Longitud: body.results[0].locations[0].latLng.lng,
        //         Ciudad: body.results[0].locations[0].adminArea4,
        //     })
        // }
         
    });      
}
module.exports = { geocodeDireccion}