import { Request, Response } from 'express';
import { unsuccessfulResult } from '../utils/unsuccessfulResult';
import { prisma } from '../lib/prisma';
import { successResult } from '../utils/successResult';
import { withdrawRequest } from '../services/withdrawReqServive';

export const index = async (req: Request, res: Response) => {
  try {
    const requests = await prisma.withdrawRequest.findMany({ orderBy: { createdAt: 'desc' }, include: { user: true } });
    return successResult(res, { requests }, 'Withdraw requests fetched');
  } catch (error) {
    console.log('Error in fetching Withdraw requests', error);
    return unsuccessfulResult(res, { error }, 'Failed to get Withdraw requests');
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id as string);
    const request = await prisma.withdrawRequest.findUnique({ where: { id } });
    return successResult(res, { request }, 'Withdraw request fetched');
  } catch (error) {
    console.log('Error in fetching Withdraw requests', error);
    return unsuccessfulResult(res, { error }, 'Failed to get Withdraw requests');
  }
};

export const store = async (req: Request, res: Response) => {
  try {
    const id = (req as any).user.id;
    console.log('Request==>', req.body);
    const request = await withdrawRequest(req.body, id);
    return successResult(res, { request }, 'Withdraw request Sent');
  } catch (error) {
    console.log('Error in Sending Withdraw requests', error);
    return unsuccessfulResult(res, { error }, 'Failed to send Withdraw requests');
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id as string);
    const plans = await prisma.investmentPlan.findUnique({ where: { id } });
    return successResult(res, { plans }, 'Withdraw requests fetched');
  } catch (error) {
    console.log('Error in fetching Withdraw requests', error);
    return unsuccessfulResult(res, { error }, 'Failed to get Withdraw requests');
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id as string);
    const plans = await prisma.investmentPlan.findUnique({ where: { id } });
    return successResult(res, { plans }, 'Withdraw requests fetched');
  } catch (error) {
    console.log('Error in fetching Withdraw requests', error);
    return unsuccessfulResult(res, { error }, 'Failed to get Withdraw requests');
  }
};
