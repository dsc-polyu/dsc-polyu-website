import mongoose from 'mongoose';

const memberSchema = mongoose.Schema({
    name: String,
    nickname: String,
    year: String,
    major: String,
    role: String,
    introduction: String
});

export default mongoose.model('members', memberSchema);