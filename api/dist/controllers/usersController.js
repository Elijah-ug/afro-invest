"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggedinUser = exports.destroy = exports.update = exports.show = exports.store = exports.index = void 0;
const signup_1 = require("../services/signup");
const successResult_1 = require("../utils/successResult");
const unsuccessfulResult_1 = require("../utils/unsuccessfulResult");
const userPropsService_1 = require("../services/userPropsService");
const prisma_1 = require("../lib/prisma");
const index = async (req, res) => {
    try {
        const users = await prisma_1.prisma.user.findMany({ select: userPropsService_1.safeData });
        return (0, successResult_1.successResult)(res, { users }, 'Fetched all users!');
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};
exports.index = index;
const store = async (req, res) => {
    try {
        const user = await (0, signup_1.signupService)(req.body);
        return (0, successResult_1.successResult)(res, { user }, 'Account created successfully!');
    }
    catch (error) {
        console.error('Error in creating account user:', error);
        return (0, unsuccessfulResult_1.unsuccessfulResult)(res, { error }, 'Error in creating account user');
    }
};
exports.store = store;
const show = async (req, res) => {
    try {
        // Logic to get a user
        const id = Number(req.params.id);
        const user = await prisma_1.prisma.user.findUnique({ where: { id }, select: userPropsService_1.safeData });
        return (0, successResult_1.successResult)(res, { user }, 'User fetched successfully!');
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};
exports.show = show;
const update = async (req, res) => {
    try {
        // Logic to update a user
        res.status(200).json({ message: 'User updated' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};
exports.update = update;
const destroy = async (req, res) => {
    try {
        // Logic to delete a user
        res.status(200).json({ message: 'User deleted' });
    }
    catch (error) {
        console.error('Error fetching deleting user:', error);
        return (0, unsuccessfulResult_1.unsuccessfulResult)(res, { error }, 'Error fetching deleting user');
    }
};
exports.destroy = destroy;
const loggedinUser = async (req, res) => {
    try {
        const id = req.user?.id;
        const user = await prisma_1.prisma.user.findUnique({ where: { id }, select: userPropsService_1.safeData });
        return (0, successResult_1.successResult)(res, { user }, 'User retrieved successfully');
    }
    catch (error) {
        console.error('Error fetching logged-in user:', error);
        return (0, unsuccessfulResult_1.unsuccessfulResult)(res, { error }, 'Error fetching logged-in user');
    }
};
exports.loggedinUser = loggedinUser;
