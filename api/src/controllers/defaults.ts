import { Request, Response } from 'express';
import { unsuccessfulResult } from '../utils/unsuccessfulResult';
import { prisma } from '../lib/prisma';
import { successResult } from '../utils/successResult';

export const receiverAddress = async (req: Request, res: Response) => {
  try {
    const receiver = await prisma.user.findUnique({
      where: { role: 'admin', email: 'elijah@gmail.com' },
      select: { address: true, email: true },
    });
    return successResult(res, { receiver }, 'Fetched receiver address!');
  } catch (error) {
    console.error('Error in creating account user:', error);
    return unsuccessfulResult(res, { error }, 'Error in creating account user');
  }
};
