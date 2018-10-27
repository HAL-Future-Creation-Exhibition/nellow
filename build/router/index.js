"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RootRouter = express_1.Router();
RootRouter.get("/", (req, res) => {
    res.render("index", {
        text: "Hello world"
    });
});
exports.default = RootRouter;
//# sourceMappingURL=index.js.map