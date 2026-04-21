import express from 'express';
import { index, show } from '../controllers/investmentPlanController';
import { jwtAuth } from '../middleware/jwtAuth';
import { validateRequest } from '../middleware/validateRequest';
import { investment } from '../zod/investment';

const investmentPlanRoutes = express.Router();

investmentPlanRoutes.get('/', jwtAuth, index);
investmentPlanRoutes.post('/:id', validateRequest(investment), jwtAuth, show);

export default investmentPlanRoutes;
