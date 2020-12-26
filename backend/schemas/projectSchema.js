import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    title: String,
    slug: String,
    topic: String,
    duration: String,
    members: [ String ],
    description: String,
    body: [ String ],
    completed: Boolean
});

export default mongoose.model('projects', projectSchema);