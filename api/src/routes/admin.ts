import express from 'express';
import { getAdmins, createAdmin, updateAdmin, deleteAdmin } from '../controllers/adminController';

const adminRoutes = express.Router();

adminRoutes.get('/', getAdmins);
adminRoutes.post('/', createAdmin);
adminRoutes.put('/:id', updateAdmin);
adminRoutes.delete('/:id', deleteAdmin);

export default adminRoutes;
