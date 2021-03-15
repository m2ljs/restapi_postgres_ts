"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const helloController_1 = require("./helloController");
const helloRouter = express_1.Router();
helloRouter.get('/hello', helloController_1.hello);
exports.default = helloRouter;
