import jwt from "jsonwebtoken"
import { getUserById } from "../controllers/user.js";


//ustom middle ware

const isAuthorized = async (req, res, next)=>{
    let token ;

    if(req.header){
        try {
            token = await req.headers["auth-token"]
            const decode = jwt.verify(token , process.env.SECRET_KEY)
            
            
            req.user =   await getUserById(decode.id)
            next()
            
        } catch (error) {
            return  res.status(401).send({message : 'Auth failed'})
            
        }
    }
}

export {isAuthorized}