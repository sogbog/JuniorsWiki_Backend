import { Request, Response } from "express";
import { TechServices } from "../services/tech";

export class TechController{
    techServices = new TechServices

    async index(request: Request, response: Response){
        const {search} = request.query

        let techs
        if(typeof search === "string") techs = await this.techServices.index(search);
             
        else techs = await this.techServices.index("");

        return response.status(200).json(techs)
    }


    async create(request: Request, response: Response){
        const techInfo = request.body;

        const created = await this.techServices.create(techInfo)

        return response.status(201).json(created)
    }


    async update(request: Request, response: Response){
        const techInfo = request.body;
        const { name } = request.params;

        const updated = await this.techServices.update(name, techInfo)

        return response.status(200).json(updated)
    }


    async show(request: Request, response: Response){
        const {name} = request.params

        const tech = await this.techServices.show(name);

        return response.status(200).json(tech)
    }


    async delete(request: Request, response: Response){
        const {name} = request.params

        const deleted = await this.techServices.delete(name);

        return response.status(200).json(deleted)
    }
}