import { Request, Response } from "express";
import { UserServices } from "../services/user";


export class UserController{
    
    userServices = new UserServices();
    
    async create(request: Request, response: Response){
        const userInfo = request.body;

        const created = await this.userServices.create(userInfo);
        
        return response.status(201).json(created);
    }

    
    async delete(request: Request, response: Response){
        const {id} = request.params;

        const deleted = await this.userServices.delete(id);

        return response.status(201).json(deleted)
    }
}