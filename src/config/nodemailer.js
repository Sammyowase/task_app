const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.error('Nodemailer transporter error:', error);
    } else {
        console.log('Nodemailer transporter is ready.');
    }
});

const sendEmail = async (to, subject, text) => {
    if (!to) {
        console.error('Error: No recipients defined');
        return;
    }

    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to,
            subject,
            text,
        });
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = { sendEmail };