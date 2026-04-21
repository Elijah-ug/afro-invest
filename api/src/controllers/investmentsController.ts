import type { Request, Response } from 'express';
import { createInvestmentService } from '../services/createInvestmentService';
import { successResult } from '../utils/successResult';
import { prisma } from '../lib/prisma';
import { unsuccessfulResult } from '../utils/unsuccessfulResult';

export const index = async (req: Request, res: Response) => {
  try {
    const id = (req as any).user.id;
    const dev = await prisma.user.findUnique({ where: { id } });
    if (dev?.email !== 'testnext@gmail.com') {
      return res.status(403).json({ message: '403 Not Authorized!' });
    }
    const data = await prisma.investment.findMany();
    return successResult(res, { data }, 'Fetched receiver address!');
  } catch (error) {
    return unsuccessfulResult(res, { error }, 'Error fetching deleting user');
  }
};

export const getInvestments = async (req: Request, res: Response) => {
  try {
    // Logic to get all investments
    const userId = (req as any).user.id;
    const id = Number(req.params.id as string);
    if (userId !== id) {
      return res.status(404).json({ message: '404 user not found' });
    }
    const investments = await prisma.investment.findMany({ where: { userId } });
    return successResult(res, { investments }, 'Get all investments');
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching investments', error });
  }
};

export const createInvestment = async (req: Request, res: Response) => {
  try {
    // Logic to create an investment
    const userId = (req as any).user.id;

    const tx = await createInvestmentService(req.body, userId);
    // console.log('Transaction==>', tx);
    return successResult(res, { tx }, 'Transaction successult!');
  } catch (error) {
    res.status(500).json({ message: 'Error creating investment', error });
  }
};

export const updateInvestment = async (req: Request, res: Response) => {
  try {
    // Logic to update an investment
    res.status(200).json({ message: 'Investment updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating investment', error });
  }
};

export const deleteInvestment = async (req: Request, res: Response) => {
  try {
    // Logic to delete an investment
    res.status(200).json({ message: 'Investment deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting investment', error });
  }
};
