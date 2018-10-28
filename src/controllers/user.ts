import User from '../models/user'

class UserController {
    get(req, res) {
        User.findById(req.params.userId, (err, user) => {
            if(err){
                return res.json("mongoose error!!");
            }
            if (user == null) {
                return res.json("not found...");
            }
            
            return res.json(user);
        })
    }
}

const userController = new UserController();

export default userController;