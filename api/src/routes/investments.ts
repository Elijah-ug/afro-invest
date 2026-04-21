import express from 'express';
import {
  getInvestments,
  createInvestment,
  updateInvestment,
  deleteInvestment,
  index,
} from '../controllers/investmentsController';

import { jwtAuth } from '../middleware/jwtAuth';

const investmentRoutes = express.Router();

investmentRoutes.get('/', jwtAuth, index);
investmentRoutes.get('/user/:id', jwtAuth, getInvestments);

investmentRoutes.post('/', jwtAuth, createInvestment);
investmentRoutes.put('/:id', updateInvestment);
investmentRoutes.delete('/:id', deleteInvestment);

export default investmentRoutes;
