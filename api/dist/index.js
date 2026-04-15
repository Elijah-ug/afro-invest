"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const admin_1 = __importDefault(require("./routes/admin"));
const investments_1 = __importDefault(require("./routes/investments"));
const users_1 = __importDefault(require("./routes/users"));
const errorHandler_1 = require("./middleware/errorHandler");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// cookie parser middleware
app.use((0, cookie_parser_1.default)());
// Middleware
app.use((0, cors_1.default)({
    origin: ['http://localhost:5173', 'https://afro-invest.vercel.app'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
const baseurl = '/afro-invest/api/v1';
// Routes
app.use(`${baseurl}/users`, users_1.default);
app.use(`${baseurl}/admin`, admin_1.default);
app.use(`${baseurl}/investments`, investments_1.default);
// Global error handling
app.use(errorHandler_1.errorHandler);
// Start server
console.log('Port==>', PORT);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
