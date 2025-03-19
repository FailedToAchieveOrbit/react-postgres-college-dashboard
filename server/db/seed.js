// server/db/seed.js
const db = require('./index');

async function seed() {
  try {
    console.log("Seeding database...");

    // Clear tables
    await db.query('DELETE FROM Grades');
    await db.query('DELETE FROM Classes');
    await db.query('DELETE FROM Users');
    await db.query('DELETE FROM Courses');
    await db.query('DELETE FROM Colleges');

    // Insert demo colleges
    const colleges = [
      { name: 'College of Engineering', department: 'Engineering' },
      { name: 'College of Arts', department: 'Arts' },
      { name: 'College of Science', department: 'Science' },
      { name: 'College of Business', department: 'Business' },
      { name: 'College of Medicine', department: 'Medicine' }
    ];
    for (const college of colleges) {
      await db.query(
        'INSERT INTO Colleges (name, department) VALUES ($1, $2)',
        [college.name, college.department]
      );
    }

    // Insert demo users
    const users = [
      { name: 'Alice', major: 'Computer Science' },
      { name: 'Bob', major: 'Mechanical Engineering' },
      { name: 'Charlie', major: 'Art History' },
      { name: 'Diana', major: 'Business Administration' },
      { name: 'Eve', major: 'Medicine' },
      { name: 'Frank', major: 'Computer Science' },
      { name: 'Grace', major: 'Physics' },
      { name: 'Henry', major: 'Chemistry' },
      { name: 'Ivy', major: 'Business Administration' },
      { name: 'Jack', major: 'Mechanical Engineering' }
    ];
    for (const user of users) {
      await db.query(
        'INSERT INTO Users (name, major) VALUES ($1, $2)',
        [user.name, user.major]
      );
    }

    // Insert demo courses
    const courses = [
      { title: 'Intro to Engineering', department: 'Engineering' },
      { title: 'Modern Art', department: 'Arts' },
      { title: 'Physics 101', department: 'Science' },
      { title: 'Business Ethics', department: 'Business' },
      { title: 'Anatomy', department: 'Medicine' },
      { title: 'Data Structures', department: 'Engineering' },
      { title: 'Contemporary Art', department: 'Arts' },
      { title: 'Chemistry 101', department: 'Science' }
    ];
    for (const course of courses) {
      await db.query(
        'INSERT INTO Courses (title, department) VALUES ($1, $2)',
        [course.title, course.department]
      );
    }

    // Insert demo classes
    const classes = [
      { user_id: 1, course_id: 1, college_id: 1 },
      { user_id: 1, course_id: 6, college_id: 1 },
      { user_id: 2, course_id: 1, college_id: 1 },
      { user_id: 3, course_id: 2, college_id: 2 },
      { user_id: 3, course_id: 7, college_id: 2 },
      { user_id: 4, course_id: 4, college_id: 4 },
      { user_id: 5, course_id: 5, college_id: 5 },
      { user_id: 6, course_id: 6, college_id: 1 },
      { user_id: 7, course_id: 3, college_id: 3 },
      { user_id: 8, course_id: 8, college_id: 3 },
      { user_id: 9, course_id: 4, college_id: 4 },
      { user_id: 10, course_id: 1, college_id: 1 }
    ];
    for (const cls of classes) {
      await db.query(
        'INSERT INTO Classes (user_id, course_id, college_id) VALUES ($1, $2, $3)',
        [cls.user_id, cls.course_id, cls.college_id]
      );
    }

    // Insert demo grades
    const grades = [
      { class_id: 1, grade: 3.5 },
      { class_id: 2, grade: 3.8 },
      { class_id: 3, grade: 3.0 },
      { class_id: 4, grade: 3.8 },
      { class_id: 5, grade: 3.6 },
      { class_id: 6, grade: 3.2 },
      { class_id: 7, grade: 3.9 },
      { class_id: 8, grade: 3.7 },
      { class_id: 9, grade: 3.4 },
      { class_id: 10, grade: 3.5 },
      { class_id: 11, grade: 3.3 },
      { class_id: 12, grade: 3.1 }
    ];
    for (const grade of grades) {
      await db.query(
        'INSERT INTO Grades (class_id, grade) VALUES ($1, $2)',
        [grade.class_id, grade.grade]
      );
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    process.exit();
  }
}

seed();
