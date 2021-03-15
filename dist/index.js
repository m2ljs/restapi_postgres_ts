"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helloRoutes_1 = __importDefault(require("./containers/hello/helloRoutes"));
const app = express_1.default();
app.use(helloRoutes_1.default)
    .use(express_1.default.json)
    .use(express_1.default.urlencoded({ extended: false }));
const port = 4000;
app.listen(port, () => {
    console.log('Server on port', port);
});
