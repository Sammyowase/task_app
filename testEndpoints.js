const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api';
let TOKEN = ''; // Initially empty, will be set after login

const headers = {
    Authorization: `Bearer ${TOKEN}`,
};

const testEndpoints = async () => {
    try {
        // Register a new admin
        let response = await axios.post(`${BASE_URL}/auth/register`, {
            name: 'Admin User',
            email: 'admin@example.com',
            password: 'password123',
            businessName: 'Admin Business'
        });
        console.log('Register admin:', response.data);

        // Login admin
        response = await axios.post(`${BASE_URL}/auth/login`, {
            email: 'admin@example.com',
            password: 'password123',
        });
        console.log('Login admin:', response.data);
        const token = response.data.token;

        // Update headers with the new token
        headers.Authorization = `Bearer ${token}`;

        // Get admin profile
        response = await axios.get(`${BASE_URL}/users/profile`, { headers });
        console.log('Get admin profile:', response.data);
        const adminId = response.data._id;
        const businessId = response.data.business;

        // Update admin profile
        response = await axios.put(`${BASE_URL}/users/profile`, {
            name: 'Admin User Updated',
            email: 'adminupdated@example.com',
            avatar: 'new_avatar_url',
        }, { headers });
        console.log('Update admin profile:', response.data);

        // Invite a new member
        response = await axios.post(`${BASE_URL}/invite`, {
            name: 'Member User',
            email: 'member@example.com',
        }, { headers });
        console.log('Invite member:', response.data);

        // Simulate member setting password
        const setPasswordToken = response.data.token; // Assuming the token is returned in the response
        response = await axios.post(`${BASE_URL}/set-password`, {
            token: setPasswordToken,
            password: 'password123',
        });
        console.log('Set password for member:', response.data);

        // Login member
        response = await axios.post(`${BASE_URL}/auth/login`, {
            email: 'member@example.com',
            password: 'password123',
        });
        console.log('Login member:', response.data);
        const memberToken = response.data.token;

        // Update headers with the member token
        headers.Authorization = `Bearer ${memberToken}`;

        // Get member profile
        response = await axios.get(`${BASE_URL}/users/profile`, { headers });
        console.log('Get member profile:', response.data);
        const memberId = response.data._id;

        // Create a new task
        const newTask = {
            title: 'New Task',
            description: 'Task description',
            assignee: memberId, // Assign the task to the member
            dueDate: '2025-03-10T00:00:00.000Z',
        };
        response = await axios.post(`${BASE_URL}/tasks`, newTask, { headers });
        console.log('Create new task:', response.data);
        const taskId = response.data._id;

        // Update the task
        const updatedTask = {
            title: 'Updated Task Title',
            description: 'Updated task description',
        };
        response = await axios.put(`${BASE_URL}/tasks/${taskId}`, updatedTask, { headers });
        console.log('Update task:', response.data);

        // Complete the task
        response = await axios.put(`${BASE_URL}/tasks/${taskId}/complete`, {}, { headers });
        console.log('Complete task:', response.data);

        // Get all tasks
        response = await axios.get(`${BASE_URL}/tasks`, { headers });
        console.log('Get all tasks:', response.data);

        // Add a comment to the task
        const newComment = {
            taskId,
            content: 'This is a comment',
        };
        response = await axios.post(`${BASE_URL}/comments`, newComment, { headers });
        console.log('Add comment:', response.data);

        // Get comments for the task
        response = await axios.get(`${BASE_URL}/comments?taskId=${taskId}`, { headers });
        console.log('Get comments:', response.data);

        // Delete the task
        response = await axios.delete(`${BASE_URL}/tasks/${taskId}`, { headers });
        console.log('Delete task:', response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
};

testEndpoints();