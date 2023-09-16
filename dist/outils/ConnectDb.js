"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ConnectDb = () => {
    mongoose_1.default.connect(`${process.env.CONNECT}`).then(() => { console.log('connect succesfully'); }).catch(() => { console.log('is not connect'); });
};
exports.default = ConnectDb;
//# sourceMappingURL=ConnectDb.js.map