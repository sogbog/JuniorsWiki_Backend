import { UserRepository } from "../repositories/user";
import { AppError } from "../utils/AppError";
import { hash } from "bcryptjs"

type createUserRequest = {
    username: string,
    password: string
}


export class UserServices{
    
    userRepository = new UserRepository();

    async create(userInfo: createUserRequest){
        if(!userInfo.password || !userInfo.username){
            throw new AppError("Nome de usuário e senha são obrigatórios", 400);
        }
        
        const userExists = await this.userRepository.findByUsername(userInfo.username);

        if(userExists){
            throw new AppError("Esse nome de usuário já existe", 400);
        }
        
        
        const encryptedPass = await hash(userInfo.password, 8)
        
        let noAdm = true;
        const admins = await this.userRepository.findAdmins();
        admins.map(adm => {
            if (adm.name != "admin"){
                noAdm = false
            }
        });

        let created;

        if(userInfo.username == "admin" || noAdm){
            created = await this.userRepository.create(userInfo.username, encryptedPass, true);
        } else{
            created = await this.userRepository.create(userInfo.username, encryptedPass, false);
        }

        return created;
    }


    async delete(id: string){
        
        const idNumber = parseInt(id);
        
        if(Number.isNaN(idNumber)){
            throw new AppError("ID de usuário inválido", 400);
        }

        const userExists = await this.userRepository.findByID(idNumber);

        if(!userExists){
            throw new AppError("Esse usuário não existe", 400);
        }

        const deleted = await this.userRepository.delete(idNumber);

        return deleted;
    }
}