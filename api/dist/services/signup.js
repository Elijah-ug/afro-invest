"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = require("../lib/prisma");
const signupService = async (data) => {
    const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
    return await prisma_1.prisma.user.create({
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
exports.signupService = signupService;
