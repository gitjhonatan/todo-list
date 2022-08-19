import { Schema, model, Document } from "mongoose";
import TaskInterface from "../interfaces/TaskInterface";

const Task = new Schema({
    status: Boolean,
    desc: String,
    subtasks: Object
}, {
    timestamps: true
})

export default model<TaskInterface>('todo-list', Task)
