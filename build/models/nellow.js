"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UUID = require("uuid");
const NellowSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => UUID.v1()
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
//ジェネリックで呼び出し
const Nellow = mongoose.model("Nellow", NellowSchema);
exports.default = Nellow;
//# sourceMappingURL=nellow.js.map