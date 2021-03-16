import conn from "../../database";
import { Connection, QueryResult } from "pg";
import Person, { ID } from "./personModel";

export const createPerson = async (
  person: Pick<Person, "name" | "email">,
): Promise<QueryResult> => {
  const query =
    `insert into person(name, email) values(${person.name}, ${person.email})`;
  
  return await conn.query(query);
};

export const readPerson = async (pid?: ID): Promise<QueryResult> => {
  const query = pid
    ? `select * from person where id=${pid.id}`
    : "select * from person";
  return await conn.query(query); 
};

export const updatePerson = async (person: {
  id: number;
  name: string;
  email?: string;
} | {
  id: number;
  name?: string;
  email: string;
}): Promise<QueryResult> => {
  const query = "update person set " +
    person.name ? `name=${person.name}`: "" +
    person.email ? `email=${person.email}`: "";
  
  return await conn.query(query);;
};

export const deletePerson = async (pid: ID): Promise<QueryResult> => {
  const query =
    "delete from person" +
    `where id=${pid.id}`;
  
  return await conn.query(query);
}
