import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';
import { signupService } from '../services/signup';

export const getUsers = async (req: Request, res: Response) => {
  try {
    // Logic to get all users
    const users = await prisma.user.findMany();
    res.status(200).json({ message: 'Get all users', users });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    console.log('Waiting to add user', req.body);
    const user = await signupService(req.body);
    console.log('User added===>', user);
    res.status(201).json({ message: 'User created', user });
  } catch (error: any) {
    console.log('Errors==>', error);
    res.status(500).json({ message: 'Error creating user', error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    // Logic to update a user
    res.status(200).json({ message: 'User updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    // Logic to delete a user
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};
