"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UUID = require("uuid");
const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => UUID.v1()
    },
    nellow_id: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        max: 255,
        default: ""
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
//ジェネリックで呼び出し
const User = mongoose.model("User", UserSchema);
exports.default = User;
//# sourceMappingURL=user.js.map