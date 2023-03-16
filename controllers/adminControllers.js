const Service = require('../models/serviceModel');
const {petition} = require('../helpers/fetch')

//Show Services - en donde muestra los servicios, y la posibilidad de editar
const showServicesAD =async (req,res) => {    
     try {
    
    const {data} = await petition('services','get');

    res.render('./adminViews/nuevoServicioAD.ejs', {
        services:data
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
        const {service,description} = req.body
        const body={
            service,
            description
        }
        console.log(body)
        await petition('services', 'post', body)
        
    } catch (error) {
        console.log(error)
    }
    
    res.redirect('/admin/services/show-services')
}

//mostrar form de UPDATE
const formUpdate = (req,res) =>{
    res.render("./adminViews/updateServiceAD.ejs")
}

//update service
const updateServiceAD =async (req,res) =>{
    
    try {

        const id = req.params.id
        const urlUpdate = "/services/"+`${id}`

        const {service,description} = req.body
        const body={
            service,
            description
        }
        
        const serviceFound = await petition(urlUpdate, 'put', body)

        console.log(serviceFound)

        return serviceFound
    } catch (error) {
        console.log('FAILED updating Service')
    }

}

module.exports={
    showServicesAD,
    createServiceAD,
    formulario,
    formUpdate,
    updateServiceAD
}