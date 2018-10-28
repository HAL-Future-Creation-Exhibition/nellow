"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nellow_1 = require("../models/nellow");
const user_1 = require("../models/user");
class NellowController {
    get(req, res) {
        var nellow = new nellow_1.default();
        var promise = nellow.save();
        promise.then((doc) => {
            return res.json(doc._id);
        });
    }
    connect(req, res) {
        nellow_1.default.findById(req.params.nellowId, (err, nellow) => {
            if (err) {
                return res.json("mongoose error!!");
            }
            if (nellow == null) {
                return res.json("not found...");
            }
            //nellow_idが使用済みかチェック
            user_1.default.find({ "nellow_id": req.params.nellowId }, function (err, docs) {
                if (err) {
                    return res.json("mongoose error!!");
                }
                if (docs.length != 0) {
                    return res.json("指定されたnellowはすでに連携されています。");
                }
                //user作成
                var user = new user_1.default();
                user.nellow_id = req.params.nellowId;
                var promise = user.save();
                promise.then((doc) => {
                    return res.json(doc);
                });
            });
        });
    }
}
const nellowController = new NellowController();
exports.default = nellowController;
//# sourceMappingURL=nellow.js.map