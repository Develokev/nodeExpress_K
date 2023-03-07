//Configura el servidor
const express = require('express');
const app = express(); //sirve de psuedo instanciador del express.

const port =process.env.PORT || 3000; //las url se guardan como variables de entorno, en el servidor.

//FUNCIONES +++++++++++++++++++++++++++++++++++++++++++++++
//establece la carpeta estática
app.use(express.static('public'));
 //"__dirname" nos da la ruta absoluta hasta el punto en donde estemos.

//establecer template engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');

//renderizar
app.get('/',(req,res)=>{     //el '/' indica el INDEX. //le pedimos al servidor la respuesta, se hace la solicitud a través del INDEX
    res.render('index', {
        titleHead: 'Gaming Universe',
        subparagraph : 'Playing is sharing',
        title: 'INDEX',
        p: 'Index paragrpah',
        footer: 'This is the footer',
}); 
});

app.get('/servicios', (req,res) => {
    res.render('servicios', {
        titleHead: 'Gaming Universe',
        subparagraph : 'Playing is sharing',
        footer: 'This is the footer',
        serviceList: 'This is the list of services we provide',
        title: 'SERVICE'
    })
});

app.get('/productos', (req,res) => {
    res.render('productos', {
        titleHead: 'Gaming Universe',
        subparagraph : 'Playing is sharing',
        title: 'Best video-games consoles within the 90s',
        footer: 'This is the footer'
});
});

app.get('/contactos', (req,res) => {

})

//poner al servidor a la escucha.
app.listen(port, () => {
    console.log(`Servidor a la escuha del puerto ${port}`)
});