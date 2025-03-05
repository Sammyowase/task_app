const { body, validationResult } = require('express-validator');

const validateUserRegistration = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

const validateUserLogin = [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
];

const validateTaskCreation = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').optional().isString().withMessage('Description must be a string'),
    body('status').optional().isIn(['todo', 'in-progress', 'done']).withMessage('Status must be one of: todo, in-progress, done'),
    body('assignee').optional().isMongoId().withMessage('Assignee must be a valid MongoDB ID'),
    body('dueDate').optional().isISO8601().withMessage('Due date must be a valid date'),
];

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateUserRegistration,
    validateUserLogin,
    validateTaskCreation,
    validateRequest,
};