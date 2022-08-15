import { Router } from "express";
import TaskController from "../controllers/TaskController";

const routes = Router()

routes.get('/users', TaskController.index)
routes.post('/task', TaskController.index)

export default routes