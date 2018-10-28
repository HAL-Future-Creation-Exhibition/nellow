"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nellow_1 = require("../models/nellow");
const user_1 = require("../models/user");
class NellowController {
    create(req, res) {
        var nellow = new nellow_1.default();
        var promise = nellow.save();
        promise.then((doc) => {
            var user = new user_1.default();
            user.nellow_id = doc._id;
            var promise = user.save();
            promise.then((doc) => {
                return res.json(doc);
            });
        });
    }
}
const nellowController = new NellowController();
exports.default = nellowController;
//# sourceMappingURL=nellow.js.map