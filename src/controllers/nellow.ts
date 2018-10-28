import Nellow from '../models/nellow'
import User from '../models/user'

class NellowController {
    create(req, res) {
        var nellow = new Nellow();
        var promise = nellow.save();
        promise.then((doc) => {
            var user = new User()
            user.nellow_id = doc._id
            var promise = user.save();
            promise.then((doc) => {
                return res.json(doc)
            });
        });
    }
}

const nellowController = new NellowController();

export default nellowController;