<!-- 

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
    EMAIL=myemail@gmail.com
    PASSWORD=appPassword
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

--- -->


# 📝 Task Management API

Welcome to the **Task Management API**, a backend service designed to help users efficiently manage tasks and collaborate with team members. Built with **Node.js, Express.js, and MongoDB**, this API offers secure user authentication, task creation and tracking, and seamless team invitations via email.

## 🌐 Live Demo (API Docs)

Explore the live API documentation powered by Swagger:  
👉 [Task App API Docs](https://task-app-x4ri.onrender.com/api-docs)

---

## ⚡️ Features

✅ User registration & login (with secure password hashing)  
✅ JWT-based authentication & authorization  
✅ Create, update, delete, and view tasks  
✅ Assign tasks to users & manage ownership  
✅ Invite team members via email  
✅ Track task completion status  
✅ Role-based access control (RBAC)  
✅ Centralized error handling  
✅ Swagger API documentation

---

## 🛠️ Tech Stack

| Technology  | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **Express.js** | Backend framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | ODM for MongoDB |
| **JWT** | Authentication & authorization |
| **Nodemailer** | Email service for invites |
| **Swagger** | API documentation |
| **dotenv** | Environment variable management |
| **bcryptjs** | Password hashing |
| **Helmet & CORS** | Security enhancements |

---

## 📂 Project Structure

```
📂 task_app/
├── 📁 config
│   └── db.js                  // MongoDB connection
├── 📁 controllers
│   ├── authController.js      // Authentication logic
│   ├── taskController.js      // Task management logic
│   ├── inviteController.js    // Invite handling logic
├── 📁 middlewares
│   ├── authMiddleware.js      // JWT verification
│   ├── errorHandler.js        // Global error handler
├── 📁 models
│   ├── User.js                 // User schema
│   ├── Task.js                 // Task schema
├── 📁 routes
│   ├── authRoutes.js          // Auth routes
│   ├── taskRoutes.js          // Task routes
│   ├── inviteRoutes.js        // Invite routes
├── 📁 services
│   ├── emailService.js        // Handles email sending
├── .env.example                // Sample env file
├── app.js                      // App entry point
├── server.js                   // Server config
└── README.md                   // You're here
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sammyowase/task_app.git
cd task_app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Copy `.env.example` to `.env` and fill in the required values.

### 4. Run the Server

```bash
npm run dev
```

Server will run on `http://localhost:5000`

---

## 🔑 Environment Variables

Ensure you have the following in your `.env` file:

```env
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
SMTP_HOST=your_email_smtp_host
SMTP_PORT=your_email_smtp_port
SMTP_USER=your_email_address
SMTP_PASS=your_email_password
```

---

## 📬 API Endpoints Overview

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/tasks` | Get all tasks (user-specific) |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update task by ID |
| DELETE | `/api/tasks/:id` | Delete task by ID |
| POST | `/api/invites/send` | Send task invite to user |

👉 Full documentation available at [Swagger Docs](https://task-app-x4ri.onrender.com/api-docs)

---

## 🧪 Testing

You can use Postman or Thunder Client to test the endpoints. A Postman collection can be added soon.

---

## 🐳 Optional: Run with Docker (Coming Soon)

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💼 About the Developer

Built with ❤️ by **[Samuel Owase](https://www.linkedin.com/in/samuelowase)**  
🔗 [GitHub](https://github.com/Sammyowase) • ✉️ [samuelowase02@gmail.com](mailto:samuelowase02@gmail.com)

---

## ⭐️ Star This Repo!

If you found this helpful, drop a star ⭐️ — it keeps me going!
```

