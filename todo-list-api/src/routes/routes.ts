import { Router } from "express";
import TaskController from "../controllers/TaskController";

const routes = Router()

routes.get('/api/task', TaskController.get)
routes.post('/api/task', TaskController.post)
routes.put('/api/task', TaskController.put)
routes.delete('/api/task', TaskController.delete)

export default routes
