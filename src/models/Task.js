const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['todo', 'in-progress', 'done'], default: 'todo' },
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    dueDate: { type: Date },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    files: [String],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);