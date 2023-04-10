const Service = require('../models/serviceModel');
const {petition} = require('../helpers/fetch')

//*Show Services - INDEX ADMIN en donde muestra los servicios, y la posibilidad de editar
const showServicesAD =async (req,res) => {  
      
     try {
    
    const {data} = await petition('services','get');

    res.render('./adminViews/nuevoServicioAD.ejs', {
        services:data
    })

    }catch (error) {
        console.log('FAILED showing services to edit')
}}

//*mostrar form
const formulario = (req,res) =>{

    res.render("./adminViews/mostrarServiciosAD.ejs")
    
}

//*Create Service
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

//*mostrar form de UPDATE
const formUpdate =async (req,res) =>{

    const id = req.params.id
    const urlUpdate = `services/${id}`

    try {
        const respuesta = await petition(urlUpdate, 'get', req.body)

        const serviceFound = respuesta.data

        console.log('esto es serviceFound', serviceFound)

        res.render("./adminViews/updateServiceAD.ejs", {serviceFound})

    } catch (error) {
        
        console.log('FAILED rendering update Form')
    }
}

//!update service
const updateServiceAD =async (req,res) =>{

        const id = req.params.id
        console.log('esto es el id', id)
    try {
        
        const urlUpdate = `services/${id}`
        console.log(urlUpdate)

        // const {service,description} = req.body
        // // const body={
        // //     service,
        // //     description
        // // }
        
        const serviceFound = await petition(urlUpdate, 'put', req.body)

        console.log('esto es serviceFound', serviceFound)

        res.redirect('/admin/services/show-services')

        return serviceFound
    } catch (error) {
        console.log('FAILED updating Service')
    }

}

const deleteServiceAD = async (req,res) => {

        const id = req.params.id
        console.log(id)
        
    try {
        
        await petition(`services/${id}`, "delete")

        res.redirect('/admin/services/show-services');

    } catch (error) {
        
        console.log('FAILED deleting service')

    }
}

module.exports={
    showServicesAD,
    createServiceAD,
    formulario,
    formUpdate,
    updateServiceAD,
    deleteServiceAD
}