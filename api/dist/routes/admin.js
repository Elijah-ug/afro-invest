"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminController_1 = require("../controllers/adminController");
const adminRoutes = express_1.default.Router();
adminRoutes.get('/', adminController_1.getAdmins);
adminRoutes.post('/', adminController_1.createAdmin);
adminRoutes.put('/:id', adminController_1.updateAdmin);
adminRoutes.delete('/:id', adminController_1.deleteAdmin);
exports.default = adminRoutes;
