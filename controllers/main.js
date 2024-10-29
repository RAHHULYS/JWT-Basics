
import jwt from 'jsonwebtoken'
import CustomAPIError from '../errors/custom-error.js';
import {BadRequest} from '../errors/index.js'
export const login = async (req,res) =>{
    const {username, password} = req.body
    if(!username || !password){
        throw new BadRequest('Please enter a username')
    }
    const id = new Date().getDate()

    const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})
    
    res.status(200).json({msg:'user created',token})
}

export const dashboard = async (req,res)=>{
    const luckyNumber = Math.floor(Math.random()*100)
        res.status(200).json({msg:`hello, ${req.user.username}`, secret:`here is your authorized data, your lucky number is ${luckyNumber}`})

}