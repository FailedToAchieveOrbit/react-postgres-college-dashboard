# College Dashboard

A modern React-based UI interface that connects to a PostgreSQL database to visualize college-related analytics and charts.

## Features

- Interactive and modern UI using React and Material-UI
- RESTful API built with Express.js
- PostgreSQL database for data storage
- Data visualization using Chart.js
- Complete analytics for college enrollment and performance metrics

## Charts Available
1. Number of students enrolled in each college
2. Number of students enrolled in each major
3. Average GPA of students in each department
4. Number of students who have taken each course
5. Average grade for each course

## Project Structure

```
react-postgres-college-dashboard/
├── client/                # React frontend
│   ├── public/            # Static files
│   └── src/               # React source code
│       ├── components/    # React components
│       ├── services/      # API services
│       └── App.jsx        # Main App component
├── server/                # Express backend
│   ├── db/                # Database related files
│   │   ├── index.js       # Database connection
│   │   ├── schema.sql     # Database schema
│   │   └── seed.js        # Seed data script
│   ├── routes/            # API routes
│   └── app.js             # Express app setup
├── .env                   # Environment variables
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- PostgreSQL (v12 or later)
- npm or yarn

### Installation

1. Clone the repository
```
git clone <repository-url>
cd react-postgres-college-dashboard
```

2. Set up environment variables
Create a `.env` file in the root directory with the following:
```
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=college_dashboard
DB_USER=postgres
DB_PASSWORD=yourpassword

# Server Configuration
PORT=5000
```

3. Install server dependencies
```
cd server
npm install
```

4. Install client dependencies
```
cd ../client
npm install
```

5. Set up the database
```
# Create the database
createdb college_dashboard

# Run the schema script
cd ../server
psql -d college_dashboard -f db/schema.sql

# Seed the database with demo data
node db/seed.js
```

6. Start the application
```
# Start the server (from server directory)
npm start

# In another terminal, start the client (from client directory)
npm start
```

7. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

### Colleges
- GET `/api/colleges` - Get all colleges
- GET `/api/colleges/enrollment` - Get enrollment numbers for each college
- GET `/api/colleges/department-gpa` - Get average GPA by department

### Users
- GET `/api/users` - Get all users
- GET `/api/users/majors` - Get enrollment numbers for each major

### Courses
- GET `/api/courses` - Get all courses

### Classes
- GET `/api/classes` - Get all classes with details
- GET `/api/classes/user/:userId` - Get classes for a specific user
- GET `/api/classes/course-enrollment` - Get number of students per course
- GET `/api/classes/course-grades` - Get average grade for each course

## License

This project is licensed under the MIT License
