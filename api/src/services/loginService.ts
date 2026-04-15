import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { loginUserInput } from '../zod/loginSchema';
import { prisma } from '../lib/prisma';

export const loginService = async (data: loginUserInput) => {
  const { email, password } = data;

  // Find user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Check password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  // Generate JWT tokens
  const accessToken = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' },
  );
  const refreshToken = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: '7d' },
  );
  return {
    accessToken,
    refreshToken,
    user,
  };
};

// { id: user.id,
//       firstname: user.firstname,
//       lastname: user.lastname,
//       email: user.email,
//     },
