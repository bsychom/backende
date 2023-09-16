"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const ConnectDb_1 = __importDefault(require("./outils/ConnectDb"));
const userModel_1 = __importDefault(require("./Models/userModel"));
const allUsers_1 = __importDefault(require("./outils/allUsers"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use((0, cors_1.default)());
app.get('/', (_req, res) => {
    return res.send(' typescript server with express ');
});
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel_1.default.find();
    const ret = yield (0, allUsers_1.default)(users);
    res.json(ret);
}));
app.get('/user', (_req, res) => {
    return res.send('user 🏓');
});
app.listen(port, () => {
    (0, ConnectDb_1.default)();
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map