import mongoose from 'mongoose';

class Mongo {
    public connect() {
        mongoose.connect('mongodb://localhost:27017/todo-list')
    }
}

export default new Mongo()
