import { Request, Response } from "express";
import { QueryResult } from "pg";
import Person, { ID } from "./personModel";
import {
  createPerson,
  deletePerson,
  readPerson,
  updatePerson,
} from "./personService";

export const addPerson = async (
  req: Request<Person>,
  res: Response,
): Promise<Response> => {
  try {
    return res.status(200).send(await createPerson(req.params));
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server Error");
  }
};

export const getPerson = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const response: QueryResult = await readPerson();
    return res.status(200).send(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server Error");
  }
};

export const getPersonById = async (
  req: Request<ID>,
  res: Response,
): Promise<Response> => {
  try {
    const response: QueryResult = await readPerson(req.params);
    return res.status(200).send(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server Error");
  }
};

export const setPerson = async (
  req: Request<Person>,
  res: Response,
): Promise<Response> => {
  try {
    const response: QueryResult = await updatePerson(req.params);
    return res.status(200).send(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server Error");
  }
};

export const delPerson = async (
  req: Request<ID>,
  res: Response,
): Promise<Response> => {
  try {
    const rq: QueryResult = await deletePerson(req.params);
    return res.status(200).send(rq.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).send("Internal Server Error");
  }
};
