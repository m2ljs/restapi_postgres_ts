export interface ID {
    id: number
}

interface Person extends ID {
    name: string;
    email: string;
}

export default Person;