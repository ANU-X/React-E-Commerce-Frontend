import userModel from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()


// New User Register controller
export const registerUser =async (req, res)=>{
    try {
    const {name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400).json({message: 'Please provide name email and password'})
    }
    const existUser =await userModel.findOne({email})
    if(existUser){
        res.status(400).json({message: 'User allraday exiest'})
    }

    const solt =await bcryptjs.genSalt(10)
    const hashpassword =await bcryptjs.hash(password, solt)

    const newUser =await userModel.create({
        name,
        email,
        password: hashpassword
    })
    res.status(201).json({
        message: 'Register successfull',
        newUser: {id: newUser._id, name: newUser.name, email: newUser.email, password: newUser.password}
    })
       
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}


// User Login controller
export const loginUser = async (req, res)=>{
    try {
    const {email, password} = req.body
    if(!email || !password){
        res.status(400).json({message: 'please email and password'})
    }

    const user =await userModel.findOne({email})
    if(!user){
        res.status(400).json({message: 'User Not Register'})
    }
    
    const isMatch =await bcryptjs.compare(password, user.password)
    if(!isMatch){
        res.status(400).json({message: 'password not vailed'})
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})
    res.json({message: 'login success'})

    const option = {
        expires: new Date(Date.now() + 24*60*60*1000),
        httpOnly: true,
        secure: false,
        sameSite: 'none'
    }
    res.status(200)
        .cookie('token', token, option)
        .json({success: true, user, token})

    res.status(200).json({
        message: 'login successfull',
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    })        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// // logoutUser Controler
// export const logoutUser = async (req, res)=>{
//     try {
//         res.cookie('token', null,{
//             expires: new Date(Date.now()),
//             httpOnly: true
//         })
//         res.status(200).json({
//             success: true,
//             message: 'logout success'
//         })
//     } catch (error) {
//     res.status(500).json({message: error.message})        
//     }
// }


// UserDetails
export const getUserDetails = async (req, res)=>{
    const user = await userModel.findById(req.user.id);
    res.status(200).json({
        success: true,
        user
    })
}
