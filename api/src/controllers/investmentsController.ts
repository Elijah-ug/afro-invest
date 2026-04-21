import type { Request, Response } from 'express';
import { createInvestmentService } from '../services/createInvestmentService';
import { successResult } from '../utils/successResult';
import { prisma } from '../lib/prisma';

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
