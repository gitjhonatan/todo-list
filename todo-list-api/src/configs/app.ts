import express from 'express';
import cors from 'cors';
import mongo from './mongo';

import routes from '../routes/routes';

class App {
    public express: express.Application

    public create() {
        this.express = express()
        this.server()
        this.database()
        this.routes()
        return this.listen()
    }

    private server(): void {
        this.express.use(express.json())
        this.express.use(cors())
        this.express.set('env', process.env.NODE_ENV);
        this.express.set('port', process.env.PORT_HTTP);
        this.express.set('hostname', process.env.HOSTNAME);

    }

    private database(): void {
        mongo.connect()
    }

    private routes(): void {
        this.express.use(routes)
    }

    private listen() {
        return this.express.listen(process.env.PORT_HTTP || 3000, () => {
            console.log(`Servidor iniciado em http://localhost:${process.env.PORT_HTTP || 3000}`);
        });
    }
}

export default new App
