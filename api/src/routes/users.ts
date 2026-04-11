import express from 'express';
import { index, store, update, destroy, loggedinUser, show } from '../controllers/usersController';
import { signupUserSchema } from '../zod/user';
import { validateRequest } from '../middleware/validateRequest';
import { loginSchema } from '../zod/loginSchema';
import { userLoginController } from '../controllers/auth/userLoginController';
import { authenticateUser } from '../middleware/auth';

const userRoutes = express.Router();

userRoutes.get('/', index);
userRoutes.post('/register', validateRequest(signupUserSchema), store);
userRoutes.post('/login', validateRequest(loginSchema), userLoginController);
userRoutes.put('/update', authenticateUser, update);
userRoutes.delete('/destroy', authenticateUser, destroy);
userRoutes.get('/loggedin-user', authenticateUser, loggedinUser);
userRoutes.get('/:id', show);
// userRoutes.get('/', index);

export default userRoutes;
