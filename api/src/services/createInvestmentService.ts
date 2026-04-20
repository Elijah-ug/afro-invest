import { prisma } from '../lib/prisma';
// interface Investment {
//   data: any;
//   userId: any;
// }
export const createInvestmentService = async (data: any, userId: any) => {
  console.log('Data for transaction==>', data);
  const date = new Date();
  date.setDate(date.getDate() + data.endDate);
  
  const plan: any = await prisma.investmentPlan.findUnique({
    where: {
      id: data.planId,
    },
    select: { returnRate: true, duration: true },
  });
  //   calculate profit
  const time = plan?.duration / 30;
  const rate = plan?.returnRate / 100;
  //   profit = p*r*t
  const expectedProfit = (await data.amount) * rate * time;
  return await prisma.investment.create({
    data: {
      userId,
      planId: data.planId,
      amount: data.amount,
      expectedProfit,
      //   startDate: data.startDate,
      endDate: date,
    },
  });
};
