"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../lib/prisma");
const loginService = async (data) => {
    const { email, password } = data;
    // Find user by email
    const user = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new Error('Invalid email or password');
    }
    // Check password
    const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid email or password');
    }
    // Generate JWT tokens
    const accessToken = jsonwebtoken_1.default.sign({
        id: user.id,
        email: user.email,
    }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const refreshToken = jsonwebtoken_1.default.sign({
        id: user.id,
        email: user.email,
    }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return {
        accessToken,
        refreshToken,
        user,
    };
};
exports.loginService = loginService;
// { id: user.id,
//       firstname: user.firstname,
//       lastname: user.lastname,
//       email: user.email,
//     },
