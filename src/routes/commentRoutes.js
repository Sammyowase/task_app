const express = require('express');
const { addComment, getComments } = require('../controllers/commentController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Add a comment to a task
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               taskId:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comment added successfully
 */
router.post('/', protect, addComment);

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Get comments for a task
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: taskId
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comments retrieved successfully
 */
router.get('/', protect, getComments);

module.exports = router;