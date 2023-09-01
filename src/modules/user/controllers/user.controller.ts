import {Request, Response} from 'express';
import {newUserValidator} from '@shared/validators/user.validators'
import userSchema from '../schemas/user.schema';
import AppError from '../../../shared/errors/AppError'

class UserController {
    async create(req: Request, res: Response): Promise<newUserValidator | AppError> {
        const {email, password} = req.body;
        const alreadyUser = await userSchema.findOne({email})
        if (!newUserValidator.isValidSync(req.body)) {
            res.json(new AppError('Email ou senha inválido'));
        }
        if (alreadyUser) {
            return res.json(new AppError("Usuário já existente!"))
        }
        const newUser = await userSchema.create({
            email,
            password,
        })
        return res.json(newUser);
    }


    async select(req: Request, res: Response): Promise<userSchema | AppError> {
        const {email, password} = req.headers;
        const user = await userSchema.findOne({
            email,
            password
        })
        if (user) {
            return res.json(user)
        }
        return res.json(new AppError("Usuário não encontrado."))
    }

}

export default new UserController();
