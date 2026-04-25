import { prisma } from '../lib/prisma';

export const withdrawRequest = async (data: any, id: number) => {
  if (!data || !data.amount) {
    throw new Error('Amount is required');
  }
  return await prisma.withdrawRequest.create({
    data: {
      userId: id,
      amout: data.amount,
    },
  });
};
