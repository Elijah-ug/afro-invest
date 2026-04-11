import { prisma } from '../../lib/prisma';

export const safeData: any = {
  id: true,
  firstname: true,
  lastname: true,
  email: true,
  createdAt: true,
  updatedAt: true,
  nin: true,
  phone: true,
  dob: true,
  role: true,
  investments: true,
  ambassadors: true,
};
// export const getAllUsers = async () => {
//   return await prisma.user.findMany({
//     select: safeData,
//   });
// };

// export const returnSafeUserProps=
