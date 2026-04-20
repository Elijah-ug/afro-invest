import express from 'express';
import { getAdmins, createAdmin, updateAdmin, deleteAdmin } from '../controllers/adminController';
import { receiverAddress } from '../controllers/defaults';

const adminRoutes = express.Router();

adminRoutes.get('/receiver', receiverAddress);
adminRoutes.post('/', createAdmin);
adminRoutes.put('/:id', updateAdmin);
adminRoutes.delete('/:id', deleteAdmin);

export default adminRoutes;
