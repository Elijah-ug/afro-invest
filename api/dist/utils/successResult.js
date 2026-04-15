"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResult = void 0;
const successResult = (res, data, message) => {
    return res.status(200).json({
        success: true,
        message,
        data
    });
};
exports.successResult = successResult;
