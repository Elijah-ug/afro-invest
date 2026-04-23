import type { Request, Response } from 'express';
import { signupService } from '../services/signup';
import { successResult } from '../utils/successResult';
import { unsuccessfulResult } from '../utils/unsuccessfulResult';
import { safeData } from '../services/userPropsService';
import { prisma } from '../lib/prisma';

export const index = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({ select: safeData });
    return successResult(res, { users }, 'Fetched all users!');
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

export const store = async (req: Request, res: Response) => {
  try {
    const user = await signupService(req.body);
    console.log('User created==>', user);

    return successResult(res, { user }, 'Account created successfully!');
  } catch (error: any) {
    console.error('Error in creating account user:', error);
    return unsuccessfulResult(res, { error }, 'Error in creating account user');
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    // Logic to get a user
    const id = Number(req.params.id as string);
    const user = await prisma.user.findUnique({ where: { id }, select: safeData });
    return successResult(res, { user }, 'User fetched successfully!');
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    // Logic to update a user
    res.status(200).json({ message: 'User updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    // Logic to delete a user
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    console.error('Error fetching deleting user:', error);
    return unsuccessfulResult(res, { error }, 'Error fetching deleting user');
  }
};

export const loggedinUser = async (req: Request, res: Response) => {
  try {
    const id = (req as any).user?.id;
    const user = await prisma.user.findUnique({ where: { id }, select: safeData });
    if (!user) {
      return res.status(404).json({ message: '404 User Not Found' });
    }
    return res
      .status(200)
      .json({ message: 'The world is full of Underrating peoples careers and ->friendship + Business == Fragile' });
    // return successResult(res, { user }, 'User retrieved successfully');
  } catch (error: any) {
    console.error('Error fetching logged-in user:', error);
    return unsuccessfulResult(res, { error }, 'Error fetching logged-in user');
  }
};
