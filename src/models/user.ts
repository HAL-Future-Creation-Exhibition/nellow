import * as  mongoose from 'mongoose';
import * as UUID from 'uuid';
import IUserDocument from '../interfaces/IUserDocument'
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
    providing_destination_id: {
        type: Number,
        default: 1
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

//ジェネリックで呼び出し
const User = mongoose.model<IUserDocument>("User", UserSchema);

export default User