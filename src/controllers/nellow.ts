import Nellow from '../models/nellow'
import User from '../models/user'

class NellowController {
    get(req, res) {
        var nellow = new Nellow();
        var promise = nellow.save();
        promise.then((doc) => {
            return res.json(doc._id);
        });
    }

    connect(req, res) {
        Nellow.findById(req.params.nellowId, (err, nellow) => {
            if(err){
                return res.json("mongoose error!!");
            }
            if (nellow == null) {
                return res.json("not found...");
            }

            //nellow_idが使用済みかチェック
            User.find({"nellow_id": req.params.nellowId}, function (err, docs) {
                if(err){
                    return res.json("mongoose error!!");
                }
                if (docs.length != 0) {
                    return res.json("指定されたnellowはすでに連携されています。");
                }
                //user作成
                var user = new User()
                user.nellow_id = req.params.nellowId
                var promise = user.save();
                promise.then((doc) => {
                    return res.json(doc)
                });
            });
        });
    }
}

const nellowController = new NellowController();

export default nellowController;