import { User } from "../types/data.types";

const BASE_URL = 'http://localhost:3000/';

export const fetchUsers = async (query: string = ''): Promise<User[]> => {
    return fetch(`${BASE_URL}?term=${query}`)
        .then((res) => res.json())
        .then((res) => {
            return res as User[];
        });
};