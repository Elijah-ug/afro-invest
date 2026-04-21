import { z } from 'zod';

export const InvestmentStatusEnum = z.enum(['ACTIVE', 'COMPLETED', 'CANCELLED', 'PENDING']);

export const investment = z.object({
  userId: z.union([z.number().int(), z.null()]),
  planId: z.number().int(),
  amount: z.number().int(),
  expectedProfit: z.union([z.number().int(), z.null()]),
  //   startDate: z.coerce.date().nullable(),
  endDate: z.union([z.date(), z.number()]),
  status: InvestmentStatusEnum.optional(),
});

export type loginUserInput = z.infer<typeof investment>;
