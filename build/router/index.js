"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nellow_1 = require("../controllers/nellow");
const user_1 = require("../controllers/user");
const RootRouter = express_1.Router();
RootRouter.get("/", (req, res) => {
    res.json({
        text: "Hello world"
    });
});
RootRouter.route('/user/:userId')
    .get((req, res) => {
    user_1.default.get(req, res);
})
    .post((req, res) => {
    user_1.default.update(req, res);
});
RootRouter.get('/create', (req, res) => {
    nellow_1.default.create(req, res);
});
exports.default = RootRouter;
//# sourceMappingURL=index.js.map