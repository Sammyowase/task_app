const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const { sendEmail } = require('./src/config/nodemailer');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const taskRoutes = require('./src/routes/taskRoutes');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const commentRoutes = require('./src/routes/commentRoutes');
const inviteRoutes = require('./src/routes/inviteRoutes');
const setPasswordRoutes = require('./src/routes/setPasswordRoutes');

// Swagger setup
require('./swagger')(app);

app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/invite', inviteRoutes);
app.use('/api', setPasswordRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});