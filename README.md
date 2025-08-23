# CollabSpace Backend

## 📌 Overview

This is the **backend API** for CollabSpace – a team collaboration and task management platform.  
Built with **Node.js (Express)** and **Sequelize**, featuring **JWT authentication**, **OAuth2 social login**, and **Docker-based deployment**.

---

## ✅ Features

- JWT-based authentication
- Google & Facebook OAuth2
- Role-based access control (Admin, Manager, User)
- CRUD for Boards and Tasks
- Real-time updates using WebSockets
- Redis caching for sessions and performance
- Swagger API documentation
- Unit & Integration tests (Jest + Supertest)
- Dockerized setup with CI/CD pipeline
- Secure with Helmet & rate limiting

---

## ✅ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **ORM:** Sequelize
- **Cache:** Redis
- **Docs:** Swagger (OpenAPI)
- **Tests:** Jest, Supertest
- **Deployment:** Docker, Nginx, PM2, GitHub Actions

---

## ✅ Getting Started

### **1. Clone Repo**

```bash
git clone https://github.com/yourusername/collabspace-backend.git
cd collabspace-backend
npm install
```

## Create .env

- PORT=9000
- DB_HOST=localhost
- DB_USER=root
- DB_PASS=yourpassword
- DB_NAME=collabspace
- JWT_SECRET=your_jwt_secret
- REDIS_HOST=localhost

```bash
npm run dev
```
