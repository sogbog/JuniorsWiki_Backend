import { Request, Response } from "express";
import { SessionServices } from "../services/session";

export class SessionController{
    sessionServices = new SessionServices

    async create(request: Request, response: Response){
        const {username, password} = request.body;

        const {user, jwt} = await this.sessionServices.create(username, password)

        return response.status(201).json({user, jwt})
    }
}