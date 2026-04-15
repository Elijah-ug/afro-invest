"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupUserSchema = void 0;
const zod_1 = require("zod");
exports.signupUserSchema = zod_1.z.object({
    firstname: zod_1.z.string().min(1, 'First name is required'),
    lastname: zod_1.z.string().min(1, 'Last name is required'),
    email: zod_1.z.email('Invalid email address'),
    address: zod_1.z.string().min(1, 'Address is required'),
    phone: zod_1.z.string().min(7, 'Phone number is required').max(20, 'Phone number is too long'),
    dob: zod_1.z.string().refine((value) => !Number.isNaN(Date.parse(value)), {
        message: 'Invalid date of birth',
    }),
    nin: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().min(4, 'Too weak password').max(36, 'Too long password'),
});
