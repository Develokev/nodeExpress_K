const Service = require('../models/serviceModel');
const {petition} = require('../helpers/fetch')

//Show Services - en donde muestra los servicios, y la posibilidad de editar
const showServicesAD =async (req,res) => {
    
    
    try {
        const servicios = await Service.find();
        res.render('./services/nuevoServicioAD', {
            servicios:services
    })

    }catch (error) {
        console.log('FAILED showing services to edit')
}}

//mostrar form
const formulario = (req,res) =>{
    res.render("./adminViews/mostrarServiciosAD.ejs")

}

//Create Service
const createServiceAD =async (req,res) => {

    try {
        await petition('/services', 'post', req.body)
        const {service,description} = req.body
        const body={
            service,
            description
        }
        
        
    } catch (error) {
        console.log(error)
    }
    
    res.redirect('/admin/services/show-services')
}

module.exports={
    showServicesAD,
    createServiceAD,
    formulario
}