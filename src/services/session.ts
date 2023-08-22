import { UserRepository } from "../repositories/user";
import { AppError } from "../utils/AppError";
import { sign } from "jsonwebtoken"
import { compare } from "bcryptjs";
//const { compare } = require("bcryptjs")
const jwtConfig = require("../utils/jwt")


export class SessionServices{

    userRepository = new UserRepository;

    async create(username: string, password: string){
        if(!username || !password){
            throw new AppError("Os campos nome e senha são obrigatórios", 400);
        }

        const user = await this.userRepository.findByUsername(username);
        if(!user) throw new AppError("Usuário ou senha incorretos", 400);

        const passMatch = await compare(password, user.password);
        if(!passMatch) throw new AppError("Usuário ou senha incorretos", 400);

        const {secret, expiresIn} = jwtConfig.jwt;
        const jwt = sign({}, secret, {subject: JSON.stringify({isAdmin: user.isAdmin})}, expiresIn);

        return {user, jwt}
    }
}