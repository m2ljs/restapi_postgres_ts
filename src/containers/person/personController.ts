import { Request, response, Response } from "express";
import { QueryResult } from "pg";
import pool from '../../database'
import Person, { ID } from "./personModel";

export const getPerson = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM person;')
        return res.status(200).send(response.rows)
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server Error')
    }
}


export const getPersonById = async (req: Request<ID>, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query(`select * from person where id=${req.params.id}`)
        return res.status(200).send(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');        
    }
}