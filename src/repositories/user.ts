import { prisma } from "../utils/prisma";

export class UserRepository{

    async findByID(userID: number){
        const user = await prisma.users.findUnique({
            where: {
                id: userID
            }
        });

        return user;
    }

    async findByUsername(username: string){
        const user = await prisma.users.findUnique({
            where: {
                name: username
            }
        });

        return user;
    }

    async findAdmins(){
        const admins = await prisma.users.findMany({
            where: {
                isAdmin: true
            }
        });

        return admins;
    }

    async create(username: string, password: string, isAdmin: boolean){
        const created = await prisma.users.create({
            data:{
                name: username,
                password,
                isAdmin
            }
        });

        return created;
    }

    async delete(id: number){
        const deleted = await prisma.users.delete({
            where:{
                id
            }
        });

        return deleted;
    }
}