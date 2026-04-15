"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginController = void 0;
const loginService_1 = require("../../services/loginService");
const successResult_1 = require("../../utils/successResult");
const userLoginController = async (req, res) => {
    try {
        const data = req.body;
        const result = await (0, loginService_1.loginService)(data);
        // Set HTTP-only cookies
        // process.env.NODE_ENV === 'production'
        res.cookie('accessToken', result.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 60 * 60 * 1000, // 1 hour
        });
        res.cookie('refreshToken', result.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        // pass safe user properties
        return (0, successResult_1.successResult)(res, { result }, 'Login successful');
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: error.message || 'Login failed',
        });
    }
};
exports.userLoginController = userLoginController;
