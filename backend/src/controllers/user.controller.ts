import * as express from 'express';
import UserModel from '../models/user'
export class UserController {

    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username
        let password = req.body.password
        let type = req.body.type

        UserModel.findOne({'username': username, 'password': password}, (err, user)=>{
            if(err) res.json({"message":"Error in retrieving data from database"})
            else {
                if(user) {
                    if(user.type == type){
                       
                        res.json(user)
                    }else{
                        res.json({"message":"You don't have a role of "+type})
                    }
                }
                else{
                        res.json({"message":"No user found"})
                }
            
            }
        })
    }

}