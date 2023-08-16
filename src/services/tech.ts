import { TechRepository } from "../repositories/tech";
import { AppError } from "../utils/AppError";

type techJSON = {
    name: string,
    img: string,
    description: string,
    nicknames: string,
    tags: string,
}

export class TechServices{
    techRepository = new TechRepository;
    
    async index(){
        const techs = this.techRepository.index();

        return techs;
    }


    async create(techInfo: techJSON){
        if(!techInfo.name){
            throw new AppError("O campo nome é obrigatório", 400);
        }
        
        const exists = await this.techRepository.findByName(techInfo.name);
        if(exists){
            throw new AppError("Já existe uma tecnologia com esse nome", 400);
        }

        const created = await this.techRepository.create(techInfo.name, techInfo.img, techInfo.description, techInfo.nicknames, techInfo.tags);

        return created;
    }

    
    async update(target: string, techInfo: techJSON){
        
        const found = await this.techRepository.findByName(target);
        if(!found){
            throw new AppError("Essa tecnologia não foi encontrada", 400);
        } 

        if(!techInfo.name){
            throw new AppError("O campo nome é obrigatório", 400);
        }

        const exists = await this.techRepository.findByName(techInfo.name);
        if(exists){
            throw new AppError("Já existe uma tecnologia com esse nome", 400);
        }  
        
        const updated = await this.techRepository.update(target, techInfo.name, techInfo.img, techInfo.description, techInfo.nicknames, techInfo.tags)

        return updated;
    }


    async show(name: string){
        const tech = await this.techRepository.findByName(name);
        
        if(!tech){
            throw new AppError("Essa tecnologia não foi encontrada", 400);
        } else {
            return tech;
        }
    }


    async delete(name: string){
        const found = await this.techRepository.findByName(name);
        if(!found){
            throw new AppError("Essa tecnologia não foi encontrada", 400);
        }

        const deleted = await this.techRepository.delete(name);

        return deleted;
    }
}