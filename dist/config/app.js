"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const test_routes_1 = require("../routes/test-routes");
class App {
    constructor() {
        this.test_routes = new test_routes_1.TestRoutes();
        this.app = express();
        this.config();
        this.test_routes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
