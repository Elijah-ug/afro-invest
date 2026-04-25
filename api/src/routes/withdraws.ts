import express from 'express';
import { destroy, index, show, store, update } from '../controllers/withdrawRequest';
import { jwtAuth } from '../middleware/jwtAuth';
const withdrawRoutes = express.Router();

withdrawRoutes.get('/requests', jwtAuth, index);
withdrawRoutes.post('/request', jwtAuth, store);
withdrawRoutes.put('/request/:id', jwtAuth, update);
withdrawRoutes.delete('/request/destroy/:id', jwtAuth, destroy);
withdrawRoutes.get('/request/:id', jwtAuth, show);

export default withdrawRoutes;
