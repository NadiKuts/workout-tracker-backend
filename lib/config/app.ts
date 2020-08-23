import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import { Environment } from "../environment";
import { TestRoutes } from "../routes/test-routes";

class App {
    public app: express.Application;
    public mongoUrl: string;

    private test_routes: TestRoutes = new TestRoutes();
    private environment;

    constructor() {
       this.environment = new Environment();
       this.mongoUrl = 'mongodb://localhost/' + this.environment.getDBName();
       this.app = express();
       this.config();
       this.mongoSetup();
       this.test_routes.route(this.app);
    }

    private config(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    }
}

export default new App().app;
