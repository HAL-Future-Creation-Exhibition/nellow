"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const express = require("express");
const methodOverride = require("method-override");
const path = require("path");
const migrate_1 = require("./migrations/migrate");
// router
const router_1 = require("./router");
const app = express();
require('dotenv').config();
//// 1. mongoose connection
var mongoose = require('mongoose'); // mongoose 利用
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true }); // 接続
console.log(process.env.DB_HOST);
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
migrate_1.default.run();
//// end 1
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: "5mb"
}));
app.use(methodOverride());
app.use(cookieParser());
app.use(compression());
app.use(express.static(path.join(__dirname, "../public"), {
    maxAge: process.env.NODE_ENV === "production" ? 1000 * 60 * 60 * 24 * 7 : 1000 * 60
}));
app.use(router_1.default);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3000";
app.listen(parseInt(PORT, 10), HOST, () => {
    console.log.apply(console, [`NODE_ENV: ${process.env.NODE_ENV}`]);
    console.log.apply(console, [`Listen: http://${HOST}:${PORT}`]);
});
//# sourceMappingURL=server.js.map