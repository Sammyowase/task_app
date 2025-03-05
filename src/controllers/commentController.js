const Comment = require('../models/Comment');
const Task = require('../models/Task');

// Add a comment to a task
const addComment = async (req, res) => {
    const { taskId, content } = req.body;

    try {
        const comment = await Comment.create({
            task: taskId,
            user: req.user._id,
            content
        });

        await Task.findByIdAndUpdate(taskId, { $push: { comments: comment._id } });

        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Error adding comment', error: error.message });
    }
};

// Get comments for a task
const getComments = async (req, res) => {
    const { taskId } = req.params;

    try {
        const comments = await Comment.find({ task: taskId }).populate('user', 'name avatar');
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching comments', error: error.message });
    }
};

module.exports = { addComment, getComments };