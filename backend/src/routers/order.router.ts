import express from 'express';
import { OrderController } from '../controllers/order.controller';
const orderRouter = express.Router();

orderRouter.route('/all_for_user').post(
    (req, res)=>new OrderController().all_for_user(req, res)
)
orderRouter.route('/all_extras').get(
    (req, res)=>new OrderController().all_extras(req, res)
)

export default orderRouter;