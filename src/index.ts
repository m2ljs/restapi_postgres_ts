import express from 'express'
import helloRouter from './containers/hello/helloRoutes'
import personRoutes from './containers/person/personRoutes'

const app = express()
app .use(helloRouter)
    .use(personRoutes)
    .use(express.json)
    .use(express.urlencoded({extended: false}))


const port = 4000
app.listen(port, () => {
    console.log('Server on port', port);
})