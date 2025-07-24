# Node.js & Express API Backend

This is a secure and scalable backend API built with Node.js, Express, and MongoDB. It provides user authentication (registration and login) using JSON Web Tokens (JWT) and serves protected content.

## Features

-   **User Registration**: Create new user accounts with hashed passwords.
-   **User Login**: Authenticate users and issue JWTs.
-   **Protected Routes**: Secure endpoints that require a valid JWT.
-   **User Profile**: Fetch profile information for the authenticated user.
-   **Onboarding Content**: A public endpoint to fetch static onboarding data.
-   **Input Validation**: Server-side validation for incoming request bodies.
-   **CORS Enabled**: Allows requests from any origin, making it suitable for web or mobile clients like React Native.
-   **Centralized Error Handling**: Graceful error management with custom middleware.

## Environment Variables

To run this project, you will need to create a `.env` file in the root of your project and add the following environment variables:

`MONGO_URI` - Your MongoDB connection string.
`JWT_SECRET` - A long, random, and secret string used for signing JSON Web Tokens.


## Installation and Usage

Follow these steps to get your development environment set up and running.

1.  **Clone the repository**
    ```bash
    git clone <your-repository-url>
    cd project-backend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Create and configure the `.env` file**
    Create the `.env` file as described in the "Environment Variables" section above.

4.  **Run the server**
    The server will start on `http://localhost:6000`. `nodemon` is used for development to automatically restart the server on file changes.
    ```bash
    npm run dev
    ```

## API Endpoints

All endpoints are prefixed with `/api`.

---

### Authentication

#### 1. Register User

-   **Endpoint**: `POST /api/register`
-   **Description**: Creates a new user account.
-   **Access**: Public

#### 2. Login User

-   **Endpoint**: `POST /api/login`
-   **Description**: Authenticates a user and returns a JWT.
-   **Access**: Public

---

### User

#### 1. Get User Profile

-   **Endpoint**: `GET /api/profile`
-   **Description**: Retrieves the name and email of the authenticated user.
-   **Access**: Private (Requires JWT)


---

### Content

#### 1. Get Onboarding Content

-   **Endpoint**: `GET /api/onboarding`
-   **Description**: Returns a static array of onboarding steps.
-   **Access**: Public
