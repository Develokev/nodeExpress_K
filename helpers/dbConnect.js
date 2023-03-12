const mongoose = require('mongoose');

const connection =async () => {
    try {

        const respuesta = await mongoose.connect(process.env.URI_CONNECT);
        console.log('Conectado a la base de datos')
        return respuesta;
        
    } catch (error) {
        return {
            ok: false,
            msg: 'error con la conexión',
            error
        }
    }
}



module.exports = { //Es un objeto
    connection
}

