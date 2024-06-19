"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let type = req.body.type;
            user_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
                if (err)
                    res.json({ "message": "Error in retrieving data from database" });
                else {
                    if (user) {
                        if (user.type == type) {
                            res.json(user);
                        }
                        else {
                            res.json({ "message": "You don't have a role of " + type });
                        }
                    }
                    else {
                        res.json({ "message": "No user found" });
                    }
                }
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map