"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdmin = exports.updateAdmin = exports.createAdmin = exports.getAdmin = exports.getAdmins = void 0;
const prisma_1 = require("../lib/prisma");
const getAdmins = async (req, res) => {
    try {
        // Logic to get all admins
        const admins = await prisma_1.prisma.user.findMany({ where: { role: 'admin' } });
        res.status(200).json({ message: 'Get all admins', admins });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching admins', error });
    }
};
exports.getAdmins = getAdmins;
const getAdmin = async (req, res) => {
    try {
        // Logic to get all admins
        const id = req.user.id;
        const admin = await prisma_1.prisma.user.findUnique({ where: { id, role: 'admin' } });
        res.status(200).json({ message: 'Get all admins', admin });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching admins', error });
    }
};
exports.getAdmin = getAdmin;
const createAdmin = async (req, res) => {
    try {
        // Logic to create an admin
        res.status(201).json({ message: 'Admin created' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating admin', error });
    }
};
exports.createAdmin = createAdmin;
const updateAdmin = async (req, res) => {
    try {
        // Logic to update an admin
        res.status(200).json({ message: 'Admin updated' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating admin', error });
    }
};
exports.updateAdmin = updateAdmin;
const deleteAdmin = async (req, res) => {
    try {
        // Logic to delete an admin
        res.status(200).json({ message: 'Admin deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting admin', error });
    }
};
exports.deleteAdmin = deleteAdmin;
