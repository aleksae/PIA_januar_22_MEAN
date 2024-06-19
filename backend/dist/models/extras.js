"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Extra = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    amount: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('ExtraModel', Extra, 'extras');
//# sourceMappingURL=extras.js.map