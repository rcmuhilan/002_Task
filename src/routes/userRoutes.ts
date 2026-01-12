import { Router } from 'express';
import { createUser, deleteUser, getAllUser, getUserById, updateUser } from '../controllers/userController.js';

const userRouter = Router();


// defining routes
userRouter.get('/', getAllUser);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);


export default userRouter;