# Task Management API

This project is a Task Management API built with Node.js, Express, and MongoDB. It allows admins to register, create a business, invite team members, and manage tasks. Team members can set their passwords, log in, and manage tasks assigned to them.

## Features

- Admin registration and login
- Business creation
- Invite team members
- Team members set their passwords
- Task creation, update, completion, and deletion
- Commenting on tasks

## Getting Started

### Prerequisites

- Node.js
- MongoDB

## Swagger Documentation
You can access the Swagger documentation for this API at http://localhost:5000/api-docs. This provides an interactive interface to explore and test the API endpoints.


### Installation

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
    Create a `.env` file in the root directory and add the following variables:

    ```properties
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    EMAIL=samuelowase02@gmail.com
    PASSWORD=kcoyztveiluhzgfi
    FRONTEND_URL=http://localhost:3000
    NODE_ENV=development
    ```

.4 Start the server:

    ```bash
    npm start
    ```

The server will run on [http://localhost:5000](http://localhost:5000).

## API Endpoints

### Admin Endpoints

#### Register Admin

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Body:**
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

#### Login

- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Body:**
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

### Member Endpoints

#### Invite Member

- **URL:** `/api/invite`
- **Method:** `POST`
- **Headers:** `Authorization: Bearer jwt_token`
- **Body:**
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

#### Set Password

- **URL:** `/api/set-password`
- **Method:** `POST`
- **Body:**
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

### Task Endpoints

#### Create Task

- **URL:** `/api/tasks`
- **Method:** `POST`
- **Headers:** `Authorization: Bearer jwt_token`
- **Body:**
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

#### Update Task

- **URL:** `/api/tasks/:id`
- **Method:** `PUT`
- **Headers:** `Authorization: Bearer jwt_token`
- **Body:**
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

#### Complete Task

- **URL:** `/api/tasks/:id/complete`
- **Method:** `PUT`
- **Headers:** `Authorization: Bearer jwt_token`
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

#### Delete Task

- **URL:** `/api/tasks/:id`
- **Method:** `DELETE`
- **Headers:** `Authorization: Bearer jwt_token`
- **Response:**
    ```json
    {
      "message": "Task deleted successfully"
    }
    ```

### Comment Endpoints

#### Add Comment

- **URL:** `/api/comments`
- **Method:** `POST`
- **Headers:** `Authorization: Bearer jwt_token`
- **Body:**
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

#### Get Comments

- **URL:** `/api/comments?taskId=task_id`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer jwt_token`
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

## Running Tests

To run the test script, use the following command:

```bash
node testEndpoints.js#   t a s k _ a p p  
 