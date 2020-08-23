"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
const environment_1 = require("./environment");
const env = new environment_1.Environment();
const PORT = env.getPort();
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
