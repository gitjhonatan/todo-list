import { Request, Response } from "express";
import User from '../schemas/User';

class TaskController {
    public async index(req:Request, res: Response): Promise<Response> {
        const tasks = await User.create({
            email: 'jhones',
            firstName: 'çlkçlk',
            lastName: 'sdfsdf'
        })
        return res.json(tasks)

    }

    public async create(req:Request, res: Response): Promise<Response> {
        const tasks = [] //await User.create()
        return res.json(tasks)
    }

}

export default new TaskController()
