import { prisma } from "../utils/prisma";

export class TechRepository{
    
    async findByName(name: string){
        const tech = await prisma.techs.findFirst({
            where: {
                name
            }
        })

        return tech;
    }

    async create(name: string, img: string, description: string, nicknames: string, tags: string){
        const created = await prisma.techs.create({
            data:{
                name,
                img,
                description,
                nicknames,
                tags
            }
        })

        return created;
    }

    async update(target: string, name: string, img: string, description: string, nicknames: string, tags: string){
        const updated = await prisma.techs.update({
            where:{
                name: target
            },
            data:{
                name,
                img,
                description,
                nicknames,
                tags
            }
        })

        return updated;
    }

    async delete(name: string){
        const deleted = await prisma.techs.delete({
            where:{
                name
            }
        })

        return deleted;
    }

    async index(){
        const techs = await prisma.techs.findMany()

        return techs;
    }
}