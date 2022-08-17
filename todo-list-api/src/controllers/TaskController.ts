import { Request, Response } from "express";
import Task from '../schemas/TaskSchema';

class TaskController {
  public async index(req: Request, res: Response): Promise<Response> {
    const tasks = await Task.create({
      status: true, desc: 'fazer outro backend', subtasks: {}
    })
    return res.json(tasks)
  }

  public async get(req: Request, res: Response): Promise<Response> {
    const tasks = await Task.find().sort('-createdAt')
    return res.json(tasks)
  }

  public async post(req: Request, res: Response): Promise<Response> {
    const tasks = await Task.create(req.body)
    return res.json(tasks)
  }

  public async put(req: Request, res: Response): Promise<Response> {
    const tasks = []
    return res.json(tasks)
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const tasks = await Task.deleteOne({ _id: req.body.id })
    return res.json(tasks)
  }
}

export default new TaskController()
