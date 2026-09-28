-- 1. Create Students table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 16),
    email VARCHAR(100) UNIQUE,
    city VARCHAR(50)
);

-- 2. Create Courses table
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    duration_weeks INT NOT NULL,
    fee DECIMAL(8,2) NOT NULL
);

-- 3. Create Enrollments table
CREATE TABLE enrollments (
    id SERIAL PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);


-- 4. Insert students
INSERT INTO students (name, age, email, city)
VALUES
('Aarav', 19, 'aarav@example.com', 'Pune'),
('Meera', 20, 'meera@example.com', 'Mumbai'),
('Riya', 18, 'riya@example.com', 'Nashik'),
('Kabir', 21, 'kabir@example.com', 'Pune'),
('Sara', 22, 'sara@example.com', 'Nagpur');


-- 5. Insert courses
INSERT INTO courses (title, duration_weeks, fee)
VALUES
('SQL Basics', 6, 2500.00),
('Web Development', 10, 5000.00),
('Python Fundamentals', 8, 4000.00);


-- 6. Insert enrollments
INSERT INTO enrollments (student_id, course_id, enrollment_date)
VALUES
(1, 1, '2026-05-01'),
(1, 2, '2026-05-03'),
(2, 1, '2026-05-04'),
(3, 3, '2026-05-05');


-- 7. View all students
SELECT * FROM students;

-- Query Result 1

-- id	name	age	email	            city
-- 1	Aarav	19	aarav@example.com	Pune
-- 2	Meera	20	meera@example.com	Mumbai
-- 3	Riya	18	riya@example.com	Nashik
-- 4	Kabir	21	kabir@example.com	Pune
-- 5	Sara	22	sara@example.com	Nagpur

-- 8. View all courses
SELECT * FROM courses;

-- Query Result 2 ->
-- id	title	            duration_weeks	fee
-- 1	SQL Basics	        6	            2500.00
-- 2	Web Development	    10	            5000.00
-- 3	Python Fundamentals	8	            4000.00


-- 9. View all enrollments
SELECT * FROM enrollments;

-- Query Result 3
-- id	student_id	course_id	enrollment_date
-- 1	1	        1	        "2026-05-01T00:00:00.000Z"
-- 2	1       	2	        "2026-05-03T00:00:00.000Z"
-- 3	2	        1	        "2026-05-04T00:00:00.000Z"
-- 4	3	        3	        "2026-05-05T00:00:00.000Z"



-- Questions

-- 1.Find students from Pune
SELECT * FROM STUDENTS WHERE CITY = 'Pune';



-- Query Result 1 ->

-- id	name	age	email	            city
-- 1	Aarav	19	aarav@example.com	Pune
-- 4	Kabir	21	kabir@example.com	Pune



-- 2. Find students  aged 20 or above
SELECT * FROM STUDENTS WHERE AGE >= 20;



-- Query Result 2 ->
-- id	name	age	email	city
-- 2	Meera	20	meera@example.com	Mumbai
-- 4	Kabir	21	kabir@example.com	Pune
-- 5	Sara	22	sara@example.com	Nagpur


-- 3. Find Cources with fees less than 5000
SELECT *
FROM courses
WHERE fee < 5000;

-- | id | title               | duration_weeks |     fee |
-- | -: | ------------------- | -------------: | ------: |
-- |  1 | SQL Basics          |              6 | 2500.00 |
-- |  3 | Python Fundamentals |              8 | 4000.00 |


-- 4. Find students from Mumbai and Pune
SELECT * FROM STUDENTS WHERE CITY IN ( 'Pune' , 'Mumbai');


-- Query Result 3 ->
-- id	name	age	email	            city
-- 1	Aarav	19	aarav@example.com	Pune
-- 2	Meera	20	meera@example.com	Mumbai
-- 4	Kabir	21	kabir@example.com	Pune



-- 5. Show students ordered by age ascending
SELECT * FROM STUDENTS ORDER BY AGE ASC;

-- Query Result 1->
-- id	name	age	email	            city
-- 3	Riya	18	riya@example.com	Nashik
-- 1	Aarav	19	aarav@example.com	Pune
-- 2	Meera	20	meera@example.com	Mumbai
-- 4	Kabir	21	kabir@example.com	Pune
-- 5	Sara	22	sara@example.com	Nagpur


--> FIRST sorting will be done according to age same the sorting will be done according to age

SELECT * FROM STUDENTS ORDER BY CITY ASC, AGE DESC;

-- id	name	age	email	            city
-- 2	Meera	20	meera@example.com	Mumbai
-- 5	Sara	22	sara@example.com	Nagpur
-- 3	Riya	18	riya@example.com	Nashik
-- 4	Kabir	21	kabir@example.com	Pune
-- 1	Aarav	19	aarav@example.com	Pune




-- 6. Show youngest student
SELECT * FROM STUDENTS ORDER BY AGE ASC LIMIT 1;

-- id	name	age	email	            city
-- 3	Riya	18	riya@example.com	Nashik


--> THIS GIVE ME THE RECORD OF SECOND YOUNGEST PERSON  OFFSET IS USED TO SKIP RECORDS
SELECT * FROM STUDENTS ORDER BY AGE ASC LIMIT 1 OFFSET 2;

-- id	name	age	email	            city
-- 2	Meera	20	meera@example.com	Mumbai


-- 7. Show 2 most expensive courses
SELECT * FROM COURSES ORDER BY FEE DESC LIMIT 2

-- id	title	            duration_weeks	fee
-- 2	Web Development 	10	            5000.00
-- 3	Python Fundamentals	8	            4000.00



-- 8. Change Kabirs’s city to Delhi
UPDATE STUDENTS SET CITY = 'Delhi' WHERE Name = 'Kabir';
SELECT * FROM STUDENTS;

-- id	name	age	email	            city
-- 1	Aarav	19	aarav@example.com	Pune
-- 3	Riya	18	riya@example.com	Nashik
-- 5	Sara	22	sara@example.com	Nagpur
-- 2	Meera	21	meera@example.com	Mumbai
-- 4	Kabir	21	kabir@example.com	Delhi



-- 9. Change fees of sql sql basic to 3000

UPDATE COURSES SET FEE = 3000.00 WHERE TITLE = 'SQL Basics';
SELECT * FROM COURSES;

-- id	title	            duration_weeks	fee
-- 2	Web Development 	10	            5000.00
-- 3	Python Fundamentals	8	            4000.00
-- 1	SQL Basics      	6	            3000.00




-- 10 .Increase Meer’s age to 21

UPDATE STUDENTS SET AGE = 21 WHERE NAME = 'Meera';
SELECT * FROM STUDENTS;

-- id	name	age	email	            city
-- 1	Aarav	19	aarav@example.com	Pune
-- 3	Riya	18	riya@example.com	Nashik
-- 5	Sara	22	sara@example.com	Nagpur
-- 4	Kabir	21	kabir@example.com	Delhi
-- 2	Meera	21	meera@example.com	Mumbai

-- 11. Delete students with id 5

DELETE FROM STUDENTS WHERE ID = 5;
SELECT * FROM STUDENTS;

-- Query Result 1 ->

-- id	name	age	email	            city
-- 1	Aarav	19	aarav@example.com	Pune
-- 3	Riya	18	riya@example.com	Nashik
-- 4	Kabir	21	kabir@example.com	Delhi
-- 2	Meera	21	meera@example.com	Mumbai




-- 12. Delete all students from Nashik
DELETE FROM STUDENTS WHERE CITY = 'Nashik';
SELECT * FROM STUDENTS;

-- Query Result 1 ->
-- id	name	age	email	            city
-- 1	Aarav	19	aarav@example.com	Pune
-- 3	Riya	18	riya@example.com	Nashik
-- 4	Kabir	21	kabir@example.com	Delhi
-- 2	Meera	21	meera@example.com	Mumbai




--  13. Delete all courses with fees above 600
DELETE FROM COURSES WHERE FEE > 6000;
SELECT * FROM COURSES

-- id	title	            duration_weeks	fee
-- 2	Web Development	    10	            5000.00
-- 3	Python Fundamentals	8	            4000.00
-- 1	SQL Basics	        6	            3000.00





CREATE TABLE USERS (
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL UNIQUE,
    Age INT CHECK(Age >= 1 AND Age <= 100),
    Role VARCHAR(10) DEFAULT 'User' CHECK( Role in('user', 'admin', 'manager')),
    Created_at TIMESTAMP DEFAULT NOW()
-- );


INSERT INTO USERS (NAME, EMAIL, AGE, ROLE) VALUES 
('Pranav', 'pranav@mail.com', 20 , 'user'),
('Raju', 'raju@gmail.com', 30 , 'admin'),
('Meghna', 'meghna@gmail.com', 40 , 'manager'),
('Tara', 'tara@gmail.com', 50 , 'user'),
('Sourav', 'sourav@gmail.com', 60 , 'user');



CREATE TABLE POSTS (
    Id SERIAL PRIMARY KEY,
    Title TEXT NOT NULL,
    Body TEXT,

    USER_ID INT REFERENCES USERS(ID) ON DELETE CASCADE,
    CREATE_AT TIMESTAMP DEFAULT NOW()
);

INSERT INTO POSTS (TITLE, BODY, USER_ID) VALUES
('Ashish Post 1', 'Ashish Body 1', 1),
('Ashish Post 2', 'Ashish Body 2', 1),
('Ashish Post 3', 'Ashish Body 3', 1),
('Ashish Post 4', 'Ashish Body 4', 1);








SELECT * FROM USERS;
SELECT * FROM POSTS;

-- Query Result 1->

-- id	name	email	a           ge	role	created_at
-- 1	Pranav	pranav@mail.com	    20	user	"2026-09-28T02:43:04.006Z"
-- 2	Raju	raju@gmail.com	    30	admin	"2026-09-28T02:43:04.006Z"
-- 3	Meghna	meghna@gmail.com	40	manager	"2026-09-28T02:43:04.006Z"
-- 4	Tara	tara@gmail.com	    50	user	"2026-09-28T02:43:04.006Z"
-- 5	Sourav	sourav@gmail.com	60	user	"2026-09-28T02:43:04.006Z"



-- Query Result 2 ->
-- id	title	        body	        user_id	create_at
-- 1	Ashish Post 1	Ashish Body 1	1	    "2026-09-28T02:44:05.437Z"
-- 2	Ashish Post 2	Ashish Body 2	1	    "2026-09-28T02:44:05.437Z"
-- 3	Ashish Post 3	Ashish Body 3	1	    "2026-09-28T02:44:05.437Z"
-- 4	Ashish Post 4	Ashish Body 4	1	    "2026-09-28T02:44:05.437Z"




-- # Joins
-- Inner join
-- This is how we join to different tables “as” is alien where we can give a temp name to that column
-- inner join give only common records between user and posts that is if user_id is null in posts table it wil not be included

SELECT POSTS.TITLE, USERS.NAME AS AUTHER
FROM POSTS INNER JOIN USERS ON POSTS.USER_ID = USERS.ID;

-- Query Result 3 ->

-- title	        auther
-- Ashish Post 1	Pranav
-- Ashish Post 2	Pranav
-- Ashish Post 3	Pranav
-- Ashish Post 4	Pranav




-- Left join
-- this gives all recors in posts and common in users even if that data is not available in users table that it all left rows + matched right rows



-- # #left join
SELECT POSTS.TITLE, USERS.NAME AS AUTHER
FROM POSTS LEFT JOIN USERS ON POSTS.USER_ID = USERS.ID;


-- Query Result 4 ->

-- title	        auther
-- Ashish Post 1	Pranav
-- Ashish Post 2	Pranav
-- Ashish Post 3	Pranav
-- Ashish Post 4	Pranav



-- # right join
-- This will give all records in user and common in posts even if that data is not available in posts table that is all right  rows + matched right rows

SELECT POSTS.TITLE, USERS.NAME AS AUTHER
FROM POSTS RIGHT JOIN USERS ON POSTS.USER_ID = USERS.ID;



-- Query Result 5
-- title	        auther
-- Ashish Post 1	Pranav
-- Ashish Post 2	Pranav
-- Ashish Post 3	Pranav
-- Ashish Post 4	Pranav
-- NULL         	Raju
-- NULL	            Sourav
-- NULL	            Tara
-- NULL         	Meghna


--# Group by
-- Number of posts made by each user 

SELECT USERS.NAME, COUNT(POSTS.ID) As POST_COUNT
FROM USERS LEFT JOIN POSTS ON POSTS.USER_ID = USERS.ID
GROUP BY USERS.ID, USERS.NAME




-- Query Result 1 ->

-- name	    post_count
-- Pranav	4
-- Raju	    0
-- Meghna	0
-- Tara	    0
-- Sourav	0


























