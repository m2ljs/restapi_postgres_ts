"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
exports.default = new pg_1.Pool({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    database: 'rapi_express_ts',
    port: 5432
});
