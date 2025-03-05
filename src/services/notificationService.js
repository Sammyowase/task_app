const Notification = require('../models/Notification'); // Assuming a Notification model exists

// Create a new notification
const createNotification = async (userId, message) => {
    const notification = await Notification.create({ user: userId, message });
    return notification;
};

// Get notifications for a user
const getNotifications = async (userId) => {
    const notifications = await Notification.find({ user: userId }).sort({ createdAt: -1 });
    return notifications;
};

// Mark a notification as read
const markAsRead = async (notificationId) => {
    const notification = await Notification.findByIdAndUpdate(notificationId, { read: true }, { new: true });
    return notification;
};

module.exports = { createNotification, getNotifications, markAsRead };