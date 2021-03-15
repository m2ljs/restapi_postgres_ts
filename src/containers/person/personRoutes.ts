import { Router } from "express";
import { getPerson, getPersonById } from "./personController";

const personRoutes = Router()

personRoutes.get('/person/v1', getPerson)
            .get('/person/v1/:id', getPersonById)
            // .post('/person/v1', addPerson)
            // .put('/person/v1', updatePerson)
            // .delete('/person/v1/:id', deletePerson)

export default personRoutes;