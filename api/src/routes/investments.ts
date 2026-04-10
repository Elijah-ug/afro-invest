import express from 'express';
import { getInvestments, createInvestment, updateInvestment, deleteInvestment } from '../controllers/investments';

const investmentRoutes = express.Router();

investmentRoutes.get('/', getInvestments);
investmentRoutes.post('/', createInvestment);
investmentRoutes.put('/:id', updateInvestment);
investmentRoutes.delete('/:id', deleteInvestment);

export default investmentRoutes;
