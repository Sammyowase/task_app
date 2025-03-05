const User = require('../models/User');
const Business = require('../models/Business');
const { sendEmail } = require('../config/nodemailer');
const jwt = require('jsonwebtoken');

// Invite a new team member
const inviteMember = async (req, res) => {
    const { email, name } = req.body;
    const adminId = req.user._id;

    try {
        const admin = await User.findById(adminId);
        if (admin.role !== 'admin') {
            return res.status(403).json({ message: 'Only admins can invite members' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ name, email, role: 'member', business: admin.business });

        const business = await Business.findById(admin.business);
        business.members.push(user._id);
        await business.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const url = process.env.FrontendURL + '/set-password?token=' + token;
        const emailContent = `
            Hi ${name},

            You have been invited to join the business: ${business.name}.

            Please click the link below to set your password:
            ${url}

            Thanks,
            TaskApp Team
        `;
        sendEmail(email, 'Business Invitation', emailContent);

        res.status(201).json({ message: 'Invitation sent successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { inviteMember };