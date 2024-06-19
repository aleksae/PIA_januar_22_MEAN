"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const orders_1 = __importDefault(require("../models/orders"));
const extras_1 = __importDefault(require("../models/extras"));
class OrderController {
    constructor() {
        /**
         *
         * @param req
         * @param res
         * sve narudzbine odrejenog korisnika
         */
        this.all_for_user = (req, res) => {
            orders_1.default.find({ "user": req.body.username }, (err, orders) => {
                if (err)
                    res.json({ "message": "There was an err in databse" });
                else
                    res.json(orders);
            });
        };
        this.all_extras = (req, res) => {
            extras_1.default.find({}, (err, extras) => {
                if (err)
                    res.json({ "message": "There was an err in databse" });
                else
                    res.json(extras);
            });
        };
    }
}
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map