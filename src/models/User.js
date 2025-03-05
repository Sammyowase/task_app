const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    role: { type: String, enum: ['admin', 'member'], default: 'member' },
    business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' }, // Add business field
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);