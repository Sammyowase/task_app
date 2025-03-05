const Task = require('../models/Task');
const User = require('../models/User');
const { sendEmail } = require('../config/nodemailer');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('assignee').populate('comments');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);

        // Send email to the assignee
        const assignee = await User.findById(task.assignee);
        if (assignee) {
            const emailContent = `
                Hi ${assignee.name},

                You’ve been assigned a new task: “${task.title}”.

                Please check your dashboard for more details.

                Thanks,
                TaskApp Team
            `;
            sendEmail(
                assignee.email,
                'New Task Assigned',
                emailContent
            );
        }

        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: 'Error creating task', error: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: 'Error updating task', error: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const completeTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (task) {
            task.status = 'done';
            await task.save();

            // Send email to the assignee
            const assignee = await User.findById(task.assignee);
            if (assignee) {
                const emailContent = `
                    Hi ${assignee.name},

                    The task "${task.title}" has been marked as completed.

                    Please check your dashboard for more details.

                    Thanks,
                    TaskApp Team
                `;
                sendEmail(
                    assignee.email,
                    'Task Completed',
                    emailContent
                );
            }

            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error completing task', error: error.message });
    }
};

module.exports = { getTasks, createTask, updateTask, deleteTask, completeTask };