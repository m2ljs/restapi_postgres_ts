"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/controller");
const routes = express_1.Router();
routes.get('/hello', controller_1.hello);
exports.default = routes;
