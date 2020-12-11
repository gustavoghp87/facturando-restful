"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = require("dotenv");
dotenv_1.config();
const app = express_1.default();
const port = process.env.PORT || 4005;
app.set('port', port);
cors_1.default();
morgan_1.default('dev');
app.use(express_1.default.json());
app.get('/api', (_, res) => {
    res.json({ msg: 'ok' });
});
(() => {
    const server = app.listen(port);
    if (server)
        console.log(`\n\nListening on port ${port}`);
})();
console.log("hi hilknksdfsdfd");
