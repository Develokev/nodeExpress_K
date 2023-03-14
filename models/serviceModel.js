const {Schema, model} = require('mongoose');

const ServiceSchema = new Schema ({ 
    service: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = model('Service', ServiceSchema)  //1er argumento: Establecemos el nombre del modelo.
                                                  //2do argumento: Llamamos al Schema que serían las reglas instanciadas anteriormente.