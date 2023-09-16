"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const ConnectDb_1 = __importDefault(require("./outils/ConnectDb"));
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
app.get('/user', (_req, res) => {
    return res.send('user 🏓');
});
app.listen(port, () => {
    (0, ConnectDb_1.default)();
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map