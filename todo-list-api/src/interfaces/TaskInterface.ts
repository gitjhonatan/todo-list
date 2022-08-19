import { Document } from "mongoose";

export default interface TaskInterface extends Document {
  status: Boolean,
  desc: String,
  subtasks: Object
}


