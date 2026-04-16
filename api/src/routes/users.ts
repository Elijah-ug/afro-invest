import express from 'express';
import { index, store, update, destroy, loggedinUser, show } from '../controllers/usersController';
import { signupUserSchema } from '../zod/user';
import { validateRequest } from '../middleware/validateRequest';
import { loginSchema } from '../zod/loginSchema';
import { userLoginController } from '../controllers/auth/userLoginController';
import { authenticateUser } from '../middleware/auth';
import { jwtAuth } from '../middleware/jwtAuth';

const userRoutes = express.Router();

userRoutes.get('/', index);
userRoutes.post('/register', validateRequest(signupUserSchema), store);
userRoutes.post('/login', validateRequest(loginSchema), userLoginController);
userRoutes.put('/update', jwtAuth, update);
userRoutes.delete('/destroy', jwtAuth, destroy);
userRoutes.get('/users/loggedin-user', jwtAuth, loggedinUser);
userRoutes.get('/:id', show);

export default userRoutes;
