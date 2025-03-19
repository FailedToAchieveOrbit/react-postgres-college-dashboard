-- server/db/schema.sql

DROP TABLE IF EXISTS Grades;
DROP TABLE IF EXISTS Classes;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Courses;
DROP TABLE IF EXISTS Colleges;

CREATE TABLE Colleges (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  department VARCHAR(255)
);

CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  major VARCHAR(255)
);

CREATE TABLE Courses (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  department VARCHAR(255)
);

CREATE TABLE Classes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES Users(id),
  course_id INTEGER REFERENCES Courses(id),
  college_id INTEGER REFERENCES Colleges(id)
);

CREATE TABLE Grades (
  id SERIAL PRIMARY KEY,
  class_id INTEGER REFERENCES Classes(id),
  grade NUMERIC(3,2)
);
