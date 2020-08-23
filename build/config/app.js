"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const environment_1 = require("../environment");
const test_routes_1 = require("../routes/test-routes");
class App {
    constructor() {
        this.test_routes = new test_routes_1.TestRoutes();
        this.environment = new environment_1.Environment();
        this.mongoUrl = 'mongodb://localhost/' + this.environment.getDBName();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.test_routes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    }
}
exports.default = new App().app;
