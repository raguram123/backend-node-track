
import jwt from "jsonwebtoken"
import User from "../models/user.js"

export function getUserByEmail(request) {

    return  User.findOne({
        email : request.body.email,
    })
}
export function getUserById(){

    return User.findById(id);
}
export function generateToken(){

    return jwt.sign({id}, process.env.SECRET_KEY)
}