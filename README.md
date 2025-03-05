

# Task Management API

This project is a **Task Management API** built with **Node.js**, **Express**, and **MongoDB**.  
It allows **admins** to register, create a business, invite team members, and manage tasks.  
**Team members** can set their passwords, log in, and manage tasks assigned to them.

---

## Features

- Admin registration and login
- Business creation
- Invite team members
- Team members set their passwords
- Task creation, update, completion, and deletion
- Commenting on tasks

---

## Getting Started

### Prerequisites

- Node.js
- MongoDB

---

## Swagger Documentation

Access the API documentation at:  
**[https://task-app-x4ri.onrender.com/api-docs/](https://task-app-x4ri.onrender.com/api-docs/)**  
This provides an interactive interface to explore and test API endpoints.

---

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/task_management_api.git
    cd task_management_api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add:

    ```bash
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    EMAIL=samuelowase02@gmail.com
    PASSWORD=kcoyztveiluhzgfi
    FRONTEND_URL=http://localhost:3000
    NODE_ENV=development
    ```

4. Start the server:

    ```bash
    npm start
    ```

The server will be running at:  
**[http://localhost:5000](http://localhost:5000)/https://task-app-x4ri.onrender.com**

---

## API Endpoints

---

### Admin Endpoints

#### 1. Register Admin

- **Endpoint:** `POST /api/auth/register`
- **Request Body:**

    ```json
    {
        "name": "Admin User",
        "email": "admin@example.com",
        "password": "password123",
        "businessName": "Admin Business"
    }
    ```

- **Response:**

    ```json
    {
        "_id": "admin_id",
        "name": "Admin User",
        "email": "admin@example.com",
        "role": "admin",
        "business": "business_id",
        "token": "jwt_token"
    }
    ```

---

#### 2. Admin Login

- **Endpoint:** `POST /api/auth/login`
- **Request Body:**

    ```json
    {
        "email": "admin@example.com",
        "password": "password123"
    }
    ```

- **Response:**

    ```json
    {
        "_id": "admin_id",
        "name": "Admin User",
        "email": "admin@example.com",
        "role": "admin",
        "business": "business_id",
        "token": "jwt_token"
    }
    ```

---

### Member Endpoints

#### 1. Invite Member

- **Endpoint:** `POST /api/invite`
- **Headers:**  
    `Authorization: Bearer jwt_token`
- **Request Body:**

    ```json
    {
        "name": "Member User",
        "email": "member@example.com"
    }
    ```

- **Response:**

    ```json
    {
        "message": "Invitation sent successfully",
        "token": "invite_token"
    }
    ```

---

#### 2. Set Password

- **Endpoint:** `POST /api/set-password`
- **Request Body:**

    ```json
    {
        "token": "invite_token",
        "password": "password123"
    }
    ```

- **Response:**

    ```json
    {
        "message": "Password set successfully"
    }
    ```

---

### Task Endpoints

#### 1. Create Task

- **Endpoint:** `POST /api/tasks`
- **Headers:**  
    `Authorization: Bearer jwt_token`
- **Request Body:**

    ```json
    {
        "title": "New Task",
        "description": "Task description",
        "assignee": "member_id",
        "dueDate": "2025-03-10T00:00:00.000Z"
    }
    ```

- **Response:**

    ```json
    {
        "_id": "task_id",
        "title": "New Task",
        "description": "Task description",
        "assignee": "member_id",
        "dueDate": "2025-03-10T00:00:00.000Z",
        "status": "pending"
    }
    ```

---

#### 2. Update Task

- **Endpoint:** `PUT /api/tasks/:id`
- **Headers:**  
    `Authorization: Bearer jwt_token`
- **Request Body:**

    ```json
    {
        "title": "Updated Task Title",
        "description": "Updated task description"
    }
    ```

- **Response:**

    ```json
    {
        "_id": "task_id",
        "title": "Updated Task Title",
        "description": "Updated task description",
        "assignee": "member_id",
        "dueDate": "2025-03-10T00:00:00.000Z",
        "status": "pending"
    }
    ```

---

#### 3. Complete Task

- **Endpoint:** `PUT /api/tasks/:id/complete`
- **Headers:**  
    `Authorization: Bearer jwt_token`
- **Response:**

    ```json
    {
        "_id": "task_id",
        "title": "Updated Task Title",
        "description": "Updated task description",
        "assignee": "member_id",
        "dueDate": "2025-03-10T00:00:00.000Z",
        "status": "done"
    }
    ```

---

#### 4. Delete Task

- **Endpoint:** `DELETE /api/tasks/:id`
- **Headers:**  
    `Authorization: Bearer jwt_token`
- **Response:**

    ```json
    {
        "message": "Task deleted successfully"
    }
    ```

---

### Comment Endpoints

#### 1. Add Comment

- **Endpoint:** `POST /api/comments`
- **Headers:**  
    `Authorization: Bearer jwt_token`
- **Request Body:**

    ```json
    {
        "taskId": "task_id",
        "content": "This is a comment"
    }
    ```

- **Response:**

    ```json
    {
        "_id": "comment_id",
        "taskId": "task_id",
        "content": "This is a comment",
        "createdAt": "2025-03-10T00:00:00.000Z"
    }
    ```

---

#### 2. Get Comments

- **Endpoint:** `GET /api/comments?taskId=task_id`
- **Headers:**  
    `Authorization: Bearer jwt_token`
- **Response:**

    ```json
    [
        {
            "_id": "comment_id",
            "taskId": "task_id",
            "content": "This is a comment",
            "createdAt": "2025-03-10T00:00:00.000Z"
        }
    ]
    ```

---

## Running Tests

To run the test script:

```bash
node testEndpoints.js
```

---
