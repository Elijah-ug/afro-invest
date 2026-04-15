"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const investmentsController_1 = require("../controllers/investmentsController");
const investmentRoutes = express_1.default.Router();
investmentRoutes.get('/', investmentsController_1.getInvestments);
investmentRoutes.post('/', investmentsController_1.createInvestment);
investmentRoutes.put('/:id', investmentsController_1.updateInvestment);
investmentRoutes.delete('/:id', investmentsController_1.deleteInvestment);
exports.default = investmentRoutes;
