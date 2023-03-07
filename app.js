const express = require('express');
const app = express(); //sirve de psuedo instanciador del express.

const port =process.env.PORT || 3000; //las url se guardan como variables de entorno, en el servidor.

app.get('/',(req,res)=>{     //el '/' indica el INDEX.
    res.send('respuesta desde Express') //le pedimos al servidor la respuesta, se hace la solicitud a través del INDEX
  } )

app.get('/servicios', (req,res) => {
    res.send('Acceso a la página de servicios')
});

//poner al servidor a la escucha.
app.listen(port, () => {
    console.log(`Servidor a la escuha del puerto ${port}`)
});