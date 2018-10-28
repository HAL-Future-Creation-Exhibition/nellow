import * as  mongoose from 'mongoose';

export default interface IUserDocument extends mongoose.Document {
    _id: String
    nellow_id: String
    icon: String
    created_at: Date
}