//*Configura el servidor -- IMPORTACIONES
const express = require('express');
const app = express(); //sirve de psuedo instanciador del express.
const cors = require('cors');

const {connection} = require('./helpers/dbConnect')

require('dotenv').config();  //requiriendo el .ENV
app.use(cors());

const port =process.env.PORT || 3000; //las url se guardan como variables de entorno, en el servidor.

//Conexión  //una vez establecida la conección con el SERVER, requerimos la conección en APP.JS y la llamamos aquí.
connection();

//*FUNCIONES +++++++++++++++++++++++++++++++++++++++++++++++
//*establece la carpeta estática
app.use(express.static('public'));
 //"__dirname" nos da la ruta absoluta hasta el punto en donde estemos.

//*establecer template engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views'); //actua como un SET ATTRIBUTE, recibe como primer argumento el atributo "views" y luego el nombre de la carpeta contenedora que elijamos. Por Convencionalismo también se llamará "views".

//* Parse application/x-www-form-urlencoded traduciendo a POSTMAN
app.use(express.urlencoded({ extended: false }));

//* Parse application/json
app.use(express.json());

//*RUTA enlazada a la subruta del otro archivo que creamos JS.
app.use('/', require('./routers/routerFront'));

//*BACKEND MiddleWare 
app.use('/api/v1/services', require('./routers/routerAPI')); //!conexión con API SERVICIOS
app.use('/api/v1/users', require('./routers/routerAPIusers')); //!conexión con API USERS
app.use('/admin', require('./routers/routerADMIN')) //!conexión con ADMIN area

//*404 ERROR
app.use((req,res,next) => {
    res.status(404).render('404', {
        error: '404',
        msg: 'Wrong way, kid. Turn back.'
    })
})

//*poner al servidor a la escucha.
app.listen(port, () => {
    console.log(`Servidor a la escuha del puerto ${port}`)
});