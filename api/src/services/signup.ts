import bcrypt from 'bcrypt';
import { prisma } from '../../lib/prisma';
export const signupService = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  return await prisma.user.create({
    data: {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      address: data.address,
      phone: data.phone,
      dob: new Date(data.dob),
      nin: data.nin ?? null,
      password: hashedPassword,
    },
  });
};
