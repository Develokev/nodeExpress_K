//TRAEMOS el SERVICE - FACILITIES -
const Service = require('../models/serviceModel');
const Facility = require('../models/facilitiesModel');
const {petition} = require('../helpers/fetch');

//FUNCIONES -- CONTROLADORES - Instrucciones
const getIndex = (req,res)=>{
    
    res.render('index', {       
        titleHead: 'VERSUS',
        slogan : 'Playing is caring',

        title: 'INDEX',
        corporate: 'Manufacture, develop and sale of home-gaming entertainment products',
});
};

const getServices =async (req,res) => {

    const {data} = await petition('services','get');

    console.log(data)

    res.render('servicios', {
        services:data
    })
};

const getFacilities =async (req,res) => {
    try {
        const facilities = await Facility.find()
        console.log(instalaciones);
    } catch (error) {
        console.log('Facilities failed')
    }
};

const getProducts = (req,res) => {
    res.render('productos', {
        titleHead: 'VERSUS',
        slogan : 'Playing is sharing',

        title: 'Best RETRO video-games consoles within the 90s',

        corporate: 'Manufacture, develop and sale of home-gaming entertainment products'
});
};

const getContacts = (req,res) => {
    res.render('contactos', {
        titleHead: 'VERSUS',
        slogan : 'Playing is caring',

        subparagraph : 'We have different contact channel',
        title: 'Contacts',

        corporate: 'Manufacture, develop and sale of home-gaming entertainment products'
});
};

//*EXPORT ++++++++++++++++++++++++++++++

module.exports={
    getIndex,
    getContacts,
    getProducts,
    getServices,
    getFacilities
}