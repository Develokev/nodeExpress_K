//Conexión a Schema/Model
const User = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../helpers/jwt');
const {validateJWT} = require('../middlewares/validateJWT');

//*Funciones - Controladores - Instructions 2 Follow

//*Get ALL Users
const getUsers =async (req,res) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            ok:true,
            msg: 'Getting ALL USERS correctly',
            data: users
    })     
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'FAILED to get all USERS'
        })
    }
}

//*GET SINGLE USER
const getUser =async (req,res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        return res.status(200).json({
            ok:true,
            msg: 'Getting SINGLE USER correctly',
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'FAILED getting single user'
        })
    }
}

//*CREATE SINGLE USER
const registerUser = async (req,res) => {
    const {user, email, password} = req.body;
    const newUser = new User(req.body);

    try {
        const validate = await User.findOne({email})

        if(validate) {
            return res.status(401).json({
                ok:false,
                msg: 'The email you inserted is already in use'
            })
        }else {
            const salt = bcrypt.genSaltSync(10);
            newUser.password = bcrypt.hashSync(password, salt);

            const newUserData = await newUser.save();
            const token = await generateToken(newUser.id, user);
            return res.status(201).json({
                ok:true,
                msg: 'New User CREATED successfully',
                data: newUserData,
                token
            })
        }
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'FAILED to create new user'
        })
    }
}

//LOGIN USER
const loginUser = async (req,res) => {
    const {id, user, email, password} =req.body;

    const emailOK = await User.findOne({email});
        try {
            
            const passCheck = bcrypt.compareSync(password, emailOK.password);
            console.log(passCheck);

            if(!emailOK || passCheck == false) {
                return res.status(400).json({
                    ok:false,
                    msg: 'User-Password incorrect'
                })
                
            }else {
                const token = await generateToken(emailOK.id, emailOK.user);
                return res.status(200).json({
                    ok:true,
                    msg: 'Successfully LOGED IN',
                    token
                })
            }   
        } catch (error) {
            return res.status(500).json({
                ok:false,
                msg: 'FAILED to log in'
            })
        }
}

//*RENEW USER
const renewToken =async (req,res) => {

    const {uid, user} = req;

    const token = await generateToken(uid, user);

    res.status(200).json({
        ok:true,
        msg: 'Token renewed correctly',
        user: {
            uid,
            usuario
        },
        token
    })
}

//*UPDATE SINGLE USER
const updateUser = async (req,res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const data = await User.findByIdAndUpdate(id,{$set:body},{new:true});

        return res.status(200).json({
            ok:true,
            msg: 'Successfully UPDATED selected user',
            data: data,
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'FAILLED updating user'
        })
    }
}

//*DELETE SINGLE USER
const deleteUser = async (req,res) => {
    try {
        const id = req.params.id;    //!para capturar el ID se hace en la REQ
        await User.findByIdAndDelete({_id:id});

        return res.status(200).json({
            ok:true,
            msg: 'Successfully DELETED selected user',
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'FAILED deleting selected user'
        })
    }
}

//!EXPORTING INSTRUCTIONS
module.exports = {

    getUsers,
    getUser,
    registerUser,
    updateUser,
    deleteUser,
    renewToken,
    loginUser
}