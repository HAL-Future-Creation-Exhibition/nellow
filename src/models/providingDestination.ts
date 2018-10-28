import * as  mongoose from 'mongoose';
import * as UUID from 'uuid';
import IProvidingDestinationDocument from '../interfaces/IProvidingDestinationDocument'
const ProvidingDestinationSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    }
});

//ジェネリックで呼び出し
const ProvidingDestination = mongoose.model<IProvidingDestinationDocument>("ProvidingDestination", ProvidingDestinationSchema);

export default ProvidingDestination