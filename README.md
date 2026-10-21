
# 🧠 JavaScript Quiz 2.0

### A Full-Stack JavaScript Quiz Application

An interactive, full-stack quiz application designed to test users' knowledge of JavaScript programming concepts through timed challenges, competitive scoring, and global leaderboards.

Built using **React, Node.js, Express.js, GraphQL, Apollo Server, and MongoDB Atlas**, JavaScript Quiz 2.0 features secure user authentication, persistent score tracking, and a responsive interface.

The application combines frontend development, backend API architecture, database integration, and cloud deployment into a complete web development project.

### [🚀 Try the Live Application](https://javascript-quiz-2.netlify.app/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📸 Application Preview

![JavaScript Quiz Application](https://github.com/user-attachments/assets/7386899b-57e4-4b77-8e25-6a93ea74c5d8)

---

## ✨ Features

### 🧩 Interactive JavaScript Quizzes

- Multiple-choice questions covering JavaScript syntax, data types, functions, control flow, and other programming concepts.
- Timed quiz sessions that challenge users to answer questions accurately and efficiently.
- Dynamic question progression and interactive answer selection.
- Immediate feedback and score updates throughout the quiz.

### ⏱️ Timed Challenges & Scoring

- Countdown timer adds urgency to each quiz session.
- Quiz performance is calculated using the application's scoring rules.
- Final scores are recorded for future reference and comparison.
- Users can review their personal high scores and compare results with other players.

### 🏆 Global Leaderboards

- Global leaderboard displaying the top 25 quiz scores.
- Persistent score storage using MongoDB Atlas.
- Allows users to compare their performance against other quiz participants.
- Personal high-score tracking for registered users.

### 🔐 User Authentication

- User registration and login functionality.
- JWT-based authentication for managing authenticated sessions.
- Password hashing using bcrypt.
- Integration between the authentication system, GraphQL API, and MongoDB database.

### 📱 Responsive User Interface

- React-based frontend with reusable components.
- Responsive layouts designed for desktop and mobile devices.
- Interactive quiz navigation and score displays.
- React Bootstrap components for consistent interface styling.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Frontend user interface and component management |
| JavaScript | Application logic and interactivity |
| React Bootstrap | Responsive UI components and styling |
| Node.js | Backend JavaScript runtime |
| Express.js | Backend HTTP server integration |
| GraphQL | API query and mutation architecture |
| Apollo Client | Frontend communication with the GraphQL API |
| Apollo Server | Backend GraphQL API implementation |
| MongoDB Atlas | Cloud database for user accounts and quiz scores |
| Mongoose | MongoDB schema modeling and database operations |
| JWT | User authentication and session authorization |
| bcrypt | Secure password hashing |
| Netlify | Frontend hosting and serverless deployment |
| Netlify Functions | Serverless backend execution |
| Git & GitHub | Version control and source code management |

---

## 🧠 Technical Highlights

### Full-Stack Application Architecture

The application uses a React frontend connected to a Node.js and Express.js backend through a GraphQL API.

Apollo Client manages communication between the frontend and backend, while Apollo Server processes GraphQL queries and mutations.

MongoDB Atlas provides persistent cloud storage for user information and quiz results.

### GraphQL API Integration

Rather than using a traditional REST API, the application uses GraphQL to manage communication between the client and server.

The API supports operations associated with:

- User registration and authentication.
- Retrieving application data.
- Storing completed quiz results.
- Retrieving personal high scores.
- Displaying global leaderboard rankings.

### Authentication & Password Security

The application implements JWT-based authentication to manage user sessions.

User passwords are hashed using bcrypt rather than stored as plain text.

Authentication functionality is integrated with the backend API and database to support registered user accounts.

### MongoDB Atlas Integration

MongoDB Atlas serves as the application's cloud-hosted database.

Mongoose is used to define data models and perform database operations associated with user accounts and quiz scores.

Persistent storage allows users to return to the application and access previously recorded results.

### Serverless Deployment with Netlify

The application is deployed using Netlify, with the React frontend hosted as a static application and the backend running through Netlify Functions.

The deployment configuration includes:

- Serverless execution of the GraphQL backend.
- API routing and redirects.
- Environment variable configuration.
- MongoDB Atlas cloud connectivity.

This architecture allows the full-stack application to run without maintaining a traditional always-on backend server.

---

## 🏆 Quiz Results & Leaderboards

Users can track their performance and compare results with other participants.

### Personal High Scores

![JavaScript Quiz Personal Scores](https://github.com/user-attachments/assets/3da3a8aa-c591-453e-91d5-be4a509ef442)

### Global Leaderboard

![JavaScript Quiz Global Leaderboard](https://github.com/user-attachments/assets/041e405c-7403-46f9-9df8-d3229570b2bf)

The global leaderboard displays the top 25 scores recorded in the application's database.

---

## 🚀 Getting Started

### Option 1: Use the Live Application

Visit the deployed application:

**[JavaScript Quiz 2.0](https://javascript-quiz-2.netlify.app/)**

### Option 2: Run Locally

**Prerequisites:**

- Node.js and npm
- MongoDB Atlas connection string
- JWT secret for authentication

**1. Clone the repository**

```bash
git clone https://github.com/Goobergreve09/Javascript-Quiz-2.0.git
```

**2. Navigate to the project directory**

```bash
cd Javascript-Quiz-2.0
```

**3. Install dependencies**

Install the frontend and backend dependencies according to the project's package configuration.

**4. Configure environment variables**

The application requires environment variables for its MongoDB Atlas connection and JWT authentication.

Use the environment variable names defined in the project configuration.

**Never commit database credentials, API keys, or JWT secrets to GitHub.**

**5. Start the application**

Run the development scripts defined in the project's `package.json` files to start the frontend and backend locally.

---

## 📖 How to Use

### 1. Create an Account or Log In

Register for an account or log in with your existing credentials to access personalized quiz features and score tracking.

### 2. Start a Quiz

- Select **Start Quiz** to begin.
- Read each JavaScript question carefully.
- Choose the answer you believe is correct.
- Continue through the quiz before the timer expires.

### 3. View Your Results

After completing a quiz:

- Review your final score.
- Compare your performance with previous attempts.
- View your personal high scores.
- Check whether your score ranks among the top 25 global results.

### 4. Compete on the Global Leaderboard

Visit the global leaderboard to see how your results compare with other users.

---

## 💡 Project Motivation

JavaScript Quiz 2.0 was developed to create an interactive learning experience while strengthening my full-stack software development skills.

The project provided practical experience with:

- Building component-based React applications.
- Designing and integrating GraphQL APIs.
- Implementing authentication and password hashing.
- Modeling and managing data with MongoDB and Mongoose.
- Developing timed application logic and score-tracking functionality.
- Deploying full-stack applications using serverless cloud infrastructure.

The application demonstrates how frontend, backend, database, and authentication technologies work together to support a complete user experience.

---

## 🤝 Contributions

Contributions, suggestions, and bug reports are welcome.

If you would like to contribute:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make and test your improvements.
4. Submit a pull request describing your changes.

---

## 🌐 Deployment

The application is hosted on **Netlify**, using Netlify Functions for the serverless backend and MongoDB Atlas for cloud database storage.

**Live Application:** [JavaScript Quiz 2.0](https://javascript-quiz-2.netlify.app/)

**Source Code:** [GitHub Repository](https://github.com/Goobergreve09/Javascript-Quiz-2.0)

---

## 📄 License

This project is licensed under the **MIT License**.

For more information, see the [MIT License](https://opensource.org/licenses/MIT).

---

## 👨‍💻 Developer

**Gregory M. Greve**

Software Developer | Full-Stack Web Development

- **GitHub:** [Goobergreve09](https://github.com/Goobergreve09)
- **Portfolio:** [React Portfolio](https://react-portfolio-greg-greve.netlify.app/)
- **Email:** [gregory.greve@yahoo.com](mailto:gregory.greve@yahoo.com)

---

*Built with React, GraphQL, Node.js, and MongoDB Atlas.*
