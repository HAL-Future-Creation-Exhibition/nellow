"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NellowController {
    get(req, res) {
        return res.json({
            text: "nellow get"
        });
    }
}
const Nellow = new NellowController();
exports.default = Nellow;
//# sourceMappingURL=nellow.js.map