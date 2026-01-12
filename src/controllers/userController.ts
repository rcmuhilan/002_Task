import { getAllUsersService, getUserByIdService, createUserService, updateUserService, deleteUserService } from "../models/userModels.js";
import type { Request, Response, NextFunction } from "express";
import type { User } from "../types/types.js";

// response handler
export const handleResponse = (res: Response, status: number,  message: string, data: User | User[] | null = null) => {
    res.status(status).json({
        status,
        message,
        data,
    })
}

// get all user
export const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users: User[] = await getAllUsersService();
        handleResponse(res, 200, 'Users Fetched Successfully', users);
    } catch (err) {
        next(err);
    }   
};

// get particular user
export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await getUserByIdService(req.params.id);
        if(!user) return handleResponse(res, 404, 'User Not Found');
        handleResponse(res, 200, 'User Fetched Successfully', user);
    } catch (err) {
        next(err);
    }   
};


// creating user
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.body) return handleResponse(res, 400, 'Body Must Needed')
        const { name, email } = req.body as { name: string; email: string };
        const newUser = await createUserService(name, email);
        handleResponse(res, 200, 'User Created Successfully', newUser)
    } catch (err) {
        next(err);
    }   
};

// update user
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email } = req.body as { name: string; email: string };
        const updatedUser = await updateUserService(req.params.id, name, email);
        if (!updatedUser) return handleResponse(res, 404, 'User Not Found');
        handleResponse(res, 200, 'User Updated Successfully', updatedUser);
    } catch (err) {
        next(err);
    }   
};

// delete user
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deletedUser = await deleteUserService(req.params.id);
        if (!deletedUser) return handleResponse(res, 404, 'User Not Found');
        handleResponse(res, 200, 'User Deleted Successfully', deletedUser);
    } catch (err) {
        next(err);
    }   
};
