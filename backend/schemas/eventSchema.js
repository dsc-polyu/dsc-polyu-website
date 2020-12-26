import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    title: String,
    slug: String,
    date: Number,
    time: String,
    venue: String,
    description: String,
    agenda: [ String ],
    completed: Boolean
});

export default mongoose.model('events', eventSchema);