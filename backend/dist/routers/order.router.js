"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controllers/order.controller");
const orderRouter = express_1.default.Router();
orderRouter.route('/all_for_user').post((req, res) => new order_controller_1.OrderController().all_for_user(req, res));
orderRouter.route('/all_extras').get((req, res) => new order_controller_1.OrderController().all_extras(req, res));
exports.default = orderRouter;
//# sourceMappingURL=order.router.js.map