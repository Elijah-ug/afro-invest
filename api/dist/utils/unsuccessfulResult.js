"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsuccessfulResult = void 0;
const unsuccessfulResult = (res, error, message) => {
    return res.status(500).json({
        success: false,
        message,
        error,
    });
};
exports.unsuccessfulResult = unsuccessfulResult;
