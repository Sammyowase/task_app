const express = require('express');
const { inviteMember } = require('../controllers/inviteController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /invite:
 *   post:
 *     summary: Invite a new member
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Invitation sent successfully
 */
router.post('/', protect, inviteMember);

module.exports = router;