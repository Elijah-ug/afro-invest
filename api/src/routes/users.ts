import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/users';

const userRoutes = express.Router();

userRoutes.get('/', getUsers);
userRoutes.post('/', createUser);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);

export default userRoutes;
