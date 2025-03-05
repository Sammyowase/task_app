const express = require('express');
const { setPassword } = require('../controllers/setPasswordController');

const router = express.Router();

/**
 * @swagger
 * /set-password:
 *   post:
 *     summary: Set password for invited member
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password set successfully
 */
router.post('/set-password', setPassword);

module.exports = router;