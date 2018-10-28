import * as  mongoose from 'mongoose';
import * as UUID from 'uuid';
import INellowDocument from '../interfaces/INellowDocument'
const NellowSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => UUID.v1()
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

//ジェネリックで呼び出し
const Nellow = mongoose.model<INellowDocument>("Nellow", NellowSchema);

export default Nellow