import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/users';
import { signupUserSchema } from '../zod/user';
import { validateRequest } from '../middleware/validateRequest';

const userRoutes = express.Router();

userRoutes.get('/', getUsers);
userRoutes.post('/', validateRequest(signupUserSchema), createUser);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);

export default userRoutes;
