import {Pool} from 'pg'

export default new Pool({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    database: 'rapi_express_ts',
    port: 5432
})