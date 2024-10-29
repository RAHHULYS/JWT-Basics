# 🔐 JWT Basics

A simple project demonstrating the basics of JSON Web Tokens (JWT) for authentication in a Node.js environment.

## 📚 Table of Contents
- [📖 About](#-about)
- [🔧 Prerequisites](#-prerequisites)
- [⚙️ Installation](#️-installation)
- [🔑 Environment Variables](#-environment-variables)
- [🚀 Usage](#-usage)
- [📬 API Endpoints](#-api-endpoints)

## 📖 About
This project covers the fundamentals of JWT authentication, showing how to issue, verify, and manage tokens in a Node.js application. JWTs are commonly used in web applications to ensure secure data exchange between clients and servers.

## 🔧 Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12 or higher)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## ⚙️ Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/RAHHULYS/JWT-Basics.git
   ```
## ⚙️ Navigate to the project directory:
  ```bash
  cd JWT-Basics
  ```
## Install dependencies:
  ```bash
   npm install
   ```
## 🔑 Environment Variables
Create a .env file in the project root with the following environment variables:
```bash
PORT=5000
JWT_SECRET=your_jwt_secret_key
```
PORT: The port on which the server runs (default: 5000).
JWT_SECRET: Secret key used to sign the JWTs. Keep this secure and private.

##🚀 Usage
Start the server by running:
```bash
npm start
```

The server will start on http://localhost:5000.

##📬 API Endpoints
Here's a quick summary of the key endpoints:

Method	Endpoint	Description
POST	/api/login	Authenticates a user and issues a JWT
GET	/api/protected	A protected route; requires JWT


##📄 Example Requests
🔑 Login
```bash
POST /api/login
```
Body:
```bash
{
  "username": "your_username",
  "password": "your_password"
}
```


🔒 Access Protected Route
```bash
GET /api/protected
Headers:
  Authorization: Bearer <your_jwt_token>

```
