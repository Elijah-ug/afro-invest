import { prisma } from '../lib/prisma';

export const withdrawRequest = async (data: any, id: number) => {
  return await prisma.withdrawRequest.create({
    data: {
      userId: id,
      amout: data.amount as number,
    },
  });
};
