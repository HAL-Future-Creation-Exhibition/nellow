"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ProvidingDestinationSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    }
});
//ジェネリックで呼び出し
const ProvidingDestination = mongoose.model("ProvidingDestination", ProvidingDestinationSchema);
exports.default = ProvidingDestination;
//# sourceMappingURL=providingDestination.js.map