CREATE TABLE Students(
    Id serial,
    Name varchar(50),
    Email varchar(100),
    Role varchar(25) default 'user',
    Created_At TIMESTAMP default now()
)


INSERT INTO Students (Name, Email, role, age) VALUES ('Ashish', 'ashish@gmail.com', 'Admin', 21);

ALTER TABLE Students ADD COLUMN Age INTEGER;

INSERT INTO Students (Name, Email, role, age) VALUES ('Tara', 'tara@gmail.com', 'user', 50);

SELECT * FROM Students


-- // output
-- id	name	email	            role	created_at	                age
-- 1	Ashish	ashish@gmail.com	Admin	"2026-09-27T07:28:29.434Z"	21
-- 2	Pranav	pranav@gmail.com	Manager	"2026-09-27T07:29:37.917Z"	20
-- 3	Sourav	sourav@gmail.com	Admin	"2026-09-27T07:30:16.676Z"	30
-- 4	Meghna	meghna@gmail.com	Manager	"2026-09-27T07:30:49.858Z"	18
-- 5	Tara	tara@gmail.com	    user	"2026-09-27T07:31:16.000Z"	50




-- Aplying multiple condtion in sql  using AND & OR operator
-- using AND
SELECT * FROM STUDENTS WHERE AGE > 20 AND ROLE ILIKE 'Admin'

--Output->
-- id	name	email	            role	created_at	                age
-- 1	Ashish	ashish@gmail.com	Admin	"2026-09-27T07:28:29.434Z"	21
-- 3	Sourav	sourav@gmail.com	Admin	"2026-09-27T07:30:16.676Z"	30



-- USING OR
SELECT * FROM STUDENTS WHERE AGE > 20 OR ROLE ILIKE 'Admin'

-- OUTPUt
-- id	name	email	            role	created_at	                age
-- 1	Ashish	ashish@gmail.com	Admin	"2026-09-27T07:28:29.434Z"	21
-- 3	Sourav	sourav@gmail.com	Admin	"2026-09-27T07:30:16.676Z"	30
-- 5	Tara	tara@gmail.com	    user	"2026-09-27T07:31:16.000Z"	50




-- Method to check between range
-- here 10 and 30 will be included
SELECT * FROM STUDENTS WHERE AGE > 20 OR AGE < 31

-- id	name	email	            role	created_at	                age
-- 1	Ashish	ashish@gmail.com	Admin	"2026-09-27T07:28:29.434Z"	21
-- 2	Pranav	pranav@gmail.com	Manager	"2026-09-27T07:29:37.917Z"	20
-- 3	Sourav	sourav@gmail.com	Admin	"2026-09-27T07:30:16.676Z"	30
-- 4	Meghna	meghna@gmail.com	Manager	"2026-09-27T07:30:49.858Z"	18
-- 5	Tara	tara@gmail.com	    user	"2026-09-27T07:31:16.000Z"	50


-- Method to check between range by using in
SELECT * FROM Students WHERE AGE IN (18, 30);


-- Records that match age 18 and 30->
-- Output
-- id	name	email	            role	created_at	                age
-- 3	Sourav	sourav@gmail.com	Admin	"2026-09-27T07:30:16.676Z"	30
-- 4	Meghna	meghna@gmail.com	Manager	"2026-09-27T07:30:49.858Z"	18


-- Method to check between range by using between
SELECT * FROM Students WHERE AGE BETWEEN 18 AND 30;


-- here 18 and 3 will be included

-- id	name	email	            role	created_at	                age
-- 1	Ashish	ashish@gmail.com	Admin	"2026-09-27T07:28:29.434Z"	21
-- 2	Pranav	pranav@gmail.com	Manager	"2026-09-27T07:29:37.917Z"	20
-- 3	Sourav	sourav@gmail.com	Admin	"2026-09-27T07:30:16.676Z"	30
-- 4	Meghna	meghna@gmail.com	Manager	"2026-09-27T07:30:49.858Z"	18




SELECT * FROM USERS WHERE AGE IN (18, 20, 30);


SELECT * FROM USERS WHERE AGE IN (18, 20, 30);

-- result
-- id	name	email	            role	created_at	                age
-- 6	Cipple	Aadfsd@GMAIL.COM	user	"2026-09-27T04:24:50.588Z"	20





-- SLECT AGE FROM THE USERS WHERE AGE > 17 AND AGE < 31      —> 18 20 30

-- SUB QUERY
-- —- this is called a subquery that is when you have a query inside  another query

SELECT * FROM STUDENTS WHERE AGE IN (SELECT AGE FROM STUDENTS WHERE AGE > 17 AND AGE < 31);

-- id	name	email	            role	created_at	                age
-- 1	Ashish	ashish@gmail.com	Admin	"2026-09-27T07:28:29.434Z"	21
-- 2	Pranav	pranav@gmail.com	Manager	"2026-09-27T07:29:37.917Z"	20
-- 3	Sourav	sourav@gmail.com	Admin	"2026-09-27T07:30:16.676Z"	30
-- 4	Meghna	meghna@gmail.com	Manager	"2026-09-27T07:30:49.858Z"	18


-- — 1. Get all the managers in ascending order go age
SELECT * FROM STUDENTS WHERE ROLE ILIKE 'MANAGER' ORDER BY AGE ASC;

-- —OUTPUT->
-- id	name	email	            role	created_at	                age
-- 4	Meghna	meghna@gmail.com	Manager	"2026-09-27T07:30:49.858Z"	18
-- 2	Pranav	pranav@gmail.com	Manager	"2026-09-27T07:29:37.917Z"	20



-- — 2. Get me user with role users whose age is above 50
SELECT * FROM STUDENTS WHERE ROLE ILIKE 'USER' AND AGE > 50

-- — OUPUT-> No results



-- — DELETE TABLE COLUMS STUDENTS
DROP TABLE STUDENTS





-- -------------------------------------------------------------------------------------------------------------------------------------
-- — The below table is made using constraints, this comes into play when you  try to insert data inside the table
-- — This is so that we can keep the data clean and within the constraints 


CREATE TABLE USERS (
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL UNIQUE,
    Age INT CHECK(Age >= 1 AND Age <= 100),
    Role VARCHAR(10) DEFAULT 'User' CHECK( Role in('user', 'admin', 'manager')),
    Created_at TIMESTAMP DEFAULT NOW()
)



-- — Table containt

INSERT INTO USERS (NAME, EMAIL, AGE, ROLE) VALUES 
('Pranav', 'pranav@mail.com', 20 , 'user'),
('Raju', 'raju@gmail.com', 30 , 'admin'),
('Meghna', 'meghna@gmail.com', 40 , 'manager'),
('Tara', 'tara@gmail.com', 50 , 'user'),
('Sourav', 'sourav@gmail.com', 60 , 'user')


-- id	name	email	            age	role	created_at
-- 1	Pranav	pranav@mail.com	    20	user	"2026-09-27T11:10:42.003Z"
-- 2	Raju	raju@gmail.com	    30	admin	"2026-09-27T11:10:42.003Z"
-- 3	Meghna	meghna@gmail.com	40	manager	"2026-09-27T11:10:42.003Z"
-- 4	Tara	tara@gmail.com	    50	user	"2026-09-27T11:10:42.003Z"
-- 5	Sourav	sourav@gmail.com	60	user	"2026-09-27T11:10:42.003Z"




CREATE TABLE POSTS (
    Id SERIAL PRIMARY KEY,
    Title TEXT NOT NULL,
    Body TEXT,

    USER_ID INT REFERENCES USERS(ID) ON DELETE CASCADE,
    CREATE_AT TIMESTAMP DEFAULT NOW()
)


-- — Primary key is the column of the table that uniquely identifies  every row in that table  user_id int references users(id) -> this is how we connect the 2 tables
-- — delete cascade -> if the data is deleted in the parent table it should be reflected  in the child table

-- — A foreign key is a column (or a set of column) in one SQL table that provides a link to the primary key in another table

INSERT INTO POSTS (TITLE, BODY, USER_ID) VALUES
('Ashish Post 1', 'Ashish Body 1', 1);
('Ashish Post 2', 'Ashish Body 2', 1),
('Ashish Post 3', 'Ashish Body 3', 1),
('Ashish Post 4', 'Ashish Body 4', 1);



-- — RESLUT->
-- id	title	        body	        user_id	            create_at
-- 1	Ashish Post 1	Ashish Body 1	1	                "2026-09-27T11:25:42.642Z"
-- 2	Ashish Post 2	Ashish Body 2	1	                "2026-09-27T11:28:14.249Z"
-- 3	Ashish Post 3	Ashish Body 3	1	                "2026-09-27T11:28:14.249Z"
-- 4	Ashish Post 4	Ashish Body 4	1	                "2026-09-27T11:28:14.249Z"





-- — this below will not work because there is mo user with id as 100
INSERT INTO POSTS (TITLE, BODY, USER_ID) VALUES
('Ashish Post 1', 'Ashish Body 1', 100);




-- THIS counting records in your table
SELECT COUNT (*) FROM USERS;
SELECT COUNT (*) FROM POSTS;

-- Query Result 1
-- count
-- 5
-- Query Result 2
-- count
-- 4
