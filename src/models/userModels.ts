import pool from "../config/db.js";
import type { QueryResult } from "pg";
import type { User } from "../types/types.js";


// get all user service
export const getAllUsersService = async (): Promise<User[]> => {
    const result: QueryResult<User>  = await pool.query('SELECT * FROM users');
    return result.rows;
};

// get a particular user service
export const getUserByIdService = async (id: string | string[] | undefined): Promise<User | undefined> => {
    const result: QueryResult<User> = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
};

// create a user
export const createUserService = async (name: string, email: string): Promise<User | undefined> => {
    const result: QueryResult<User> = await pool.query('INSERT INTO users(name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    return result.rows[0];
};

//update user service
export const updateUserService = async (id: string | string[] | undefined, name: string, email: string): Promise<User | undefined> => {
    const result: QueryResult<User> = await pool.query('UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *', [name, email, id]);
    return result.rows[0];
};

// delete user service
export const deleteUserService = async (id: string | string[] | undefined): Promise<User | undefined> => {
    const result: QueryResult<User> = await pool.query('DELETE FROM users WHERE id=$1 RETURNING *', [id]);
    return result.rows[0];
};
