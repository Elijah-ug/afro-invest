import { Request, Response } from 'express';
import { unsuccessfulResult } from '../utils/unsuccessfulResult';
import { prisma } from '../lib/prisma';
import { successResult } from '../utils/successResult';

export const index = async (req: Request, res: Response) => {
  try {
    const plans = await prisma.investmentPlan.findMany();
    return successResult(res, { plans }, 'Investment plans fetched');
  } catch (error) {
    console.log('Error in fetching investment plans', error);
    return unsuccessfulResult(res, { error }, 'Failed to get investment plans');
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id as string);
    const plans = await prisma.investmentPlan.findUnique({ where: { id } });
    return successResult(res, { plans }, 'Investment plans fetched');
  } catch (error) {
    console.log('Error in fetching investment plans', error);
    return unsuccessfulResult(res, { error }, 'Failed to get investment plans');
  }
};
