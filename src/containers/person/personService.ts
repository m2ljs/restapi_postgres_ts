import conn from "../../database";
import { QueryResult } from "pg";
import Person, { ID } from "./personModel";

export const createPerson = async (
  person: Pick<Person, "name" | "email">,
): Promise<QueryResult> => {
  const qr: QueryResult = await conn.query(
    `insert into person(name, email) values(${person.name}, ${person.email})`,
  );
  return qr;
};

export const readPerson = async (pid?: ID): Promise<QueryResult> => {
  const query = pid
    ? `select * from person where id=${pid.id}`
    : "select * from person";
  const qr: QueryResult = await conn.query(query);
  return qr;
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
  
  const qr: QueryResult =
    await conn.query(query);
  
  return qr;
};

export const deletePerson = async (pid: ID): Promise<QueryResult> => {
  const query =
    "delete from person" +
    `where id=${pid.id}`;
  
  const qr: QueryResult =
    await conn.query(query);
  
  return qr
}
