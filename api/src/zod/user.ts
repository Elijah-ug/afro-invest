import { z } from 'zod';

export const signupUserSchema = z.object({
  firstname: z.string().min(1, 'First name is required'),
  lastname: z.string().min(1, 'Last name is required'),
  email: z.email('Invalid email address'),
  address: z.string().length(42, 'Invalid Address'),
  phone: z.string().min(7, 'Phone number is required').max(20, 'Phone number is too long'),
  dob: z.string().refine((value) => !Number.isNaN(Date.parse(value)), {
    message: 'Invalid date of birth',
  }),
  nin: z.string().optional().nullable(),
  password: z.string().min(4, 'Too weak password').max(36, 'Too long password'),
});

export type SignupUserInput = z.infer<typeof signupUserSchema>;
