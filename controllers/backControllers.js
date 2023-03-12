//Conectando con los models
const Service = require('../models/serviceModel');

//*PRODUCTS FUNCTIONS - CONTROLLERS - INSTRUCTIONS 2 FOLLOW

//GET All Services
const getServices =async (req,res) => {
    try {
        const services = await Service.find();
        return res.status(200).json({
            ok: true,
            msg: 'Getting all SERVICES correctly',
            data: services
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'FAILED getting all Services'
        })
    }
}
//GET Single product
const getService =async (req,res) => {
try {
    const id = req.params.id;

    const service = await Service.findById(id);

    return res.status(200).json({
        ok: true,
        msg: 'Getting SINGLE service correctly',
        data: service,
    })
} catch (error) {
    return res.status(500).json({
        ok: false,
        msg: 'FAILED getting SINGLE service'
    })
}
}
//Create Single Product
const createService =async (req,res) => {
try {
    const NewService = new Service(req.body);

    const data = await NewService.save();

    return res.status(201).json({
        ok: true,
        msg: 'Creating NEW service correctly',
        data: data,
    })

} catch (error) {
    return res.status(500).json({
        ok: false,
        msg: 'FAILED to create new service',
    })
}
}

//Update Single Product
const updateService =async (req,res) => {
    try{
        const id = req.params.id;
        const service = req.body.service;
        const description = req.body.description;

        const data = await Service.findByIdAndUpdate({_id:id},{service:service},{description:description});

        return res.status(200).json({
            ok: true,
            msg: 'Successfully UPDATED service',
            data: data,
        })
        
   }catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'FAILED to UPDATE service',
        });
}
}

//Delete Single Product
const deleteService =async (req,res) => {
    try {
        const id = req.params.id;

        await Service.findByIdAndRemove({_id:id});

        return res.status(200).json({
            ok: true,
            msg: 'Successfully DELETED selected service'
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'FAILED to delete selected service'
        })
    }
}

//!EXPORT
module.exports = {
    getServices,
    getService,
    createService,
    updateService,
    deleteService
}
