import * as express from 'express';
import OrderModel from '../models/orders'
import ExtraModel from '../models/extras'
export class OrderController {

    /**
     * 
     * @param req 
     * @param res 
     * sve narudzbine odrejenog korisnika
     */
    all_for_user = (req : express.Request, res:express.Response)=>{
        OrderModel.find({"user": req.body.username}, (err, orders)=>{
            if(err) res.json({"message":"There was an err in databse"})
            else res.json(orders)
        })
    }
    all_extras = (req : express.Request, res:express.Response)=>{
        ExtraModel.find({}, (err, extras)=>{
        if(err) res.json({"message":"There was an err in databse"})
        else res.json(extras)
        })
    }
}