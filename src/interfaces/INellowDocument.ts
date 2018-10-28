import * as  mongoose from 'mongoose';

export default interface INellowDocument extends mongoose.Document {
    _id: String
    created_at: Date
}