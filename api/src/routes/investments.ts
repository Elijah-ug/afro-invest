import express from 'express';
import {
  getInvestments,
  createInvestment,
  updateInvestment,
  deleteInvestment,
} from '../controllers/investmentsController';
import { investment } from '../zod/investment';
import { validateRequest } from '../middleware/validateRequest';
import { jwtAuth } from '../middleware/jwtAuth';

const investmentRoutes = express.Router();

investmentRoutes.get('/user/:id', jwtAuth, getInvestments);
investmentRoutes.post('/', jwtAuth, createInvestment);
investmentRoutes.put('/:id', updateInvestment);
investmentRoutes.delete('/:id', deleteInvestment);

export default investmentRoutes;
