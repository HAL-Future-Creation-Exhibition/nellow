import * as  mongoose from 'mongoose';

export default interface IProvidingDestinationDocument extends mongoose.Document {
    _id: Number
    name: String
    rate: Number
}