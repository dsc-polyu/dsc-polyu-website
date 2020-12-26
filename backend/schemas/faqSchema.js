import mongoose from 'mongoose';

const faqSchema = mongoose.Schema({
    question: String, 
    answer: String
});

export default mongoose.model('faqs', faqSchema);