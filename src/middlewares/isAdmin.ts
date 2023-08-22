import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { verify } from "jsonwebtoken"
const { jwt } = require("../utils/jwt")


export function isAdmin(request: Request, response: Response, next: NextFunction){
    const auth = request.headers.authorization

    if(!auth) throw new AppError("Token de autenticação inválido", 401)

    const [, token] = auth.split(" ")

    try{
        const {sub: data} = verify(token, jwt.secret)

        let isAdm: boolean

        if(typeof data == "string") {
            
            const { isAdmin } = JSON.parse(data);
            isAdm = isAdmin
                  
        } else {
            throw new Error
        }
        
        if(isAdm) return next()
        
        else {
            throw new Error
        }
        

    } catch {
        throw new AppError("Token de autenticação inválido", 401)
    }

    console.log(token)
}