"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nellow_1 = require("../controllers/nellow");
const RootRouter = express_1.Router();
RootRouter.get("/", (req, res) => {
    res.json({
        text: "Hello world"
    });
});
RootRouter.route('/user')
    .get((req, res) => {
    return res.json({
        text: "user get"
    });
});
RootRouter.get('/create', (req, res) => {
    nellow_1.default.create(req, res);
});
exports.default = RootRouter;
//# sourceMappingURL=index.js.map