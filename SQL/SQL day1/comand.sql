-- Create table

CREATE TABLE users (
    id SERIAL,
    name VARCHAR(50),
    email VARCHAR(100),
    role VARCHAR(25) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT NOW()
);


--inserting data in table
INSERT INTO users (name, email) VALUES ('gaurav', 'gaurav@hmail.com');
returning id, name, created_at;

-- display selected from the table
SELECT name, role FROM users;

-- display all data from the table
select * from users;



-- Inserting multiple data inside your table

INSERT INTO users (name, email) VALUES
('sneha', 'asdfggsa@gmail.com'),
('JKH','ADFAFDG@KJHN')
RETURNING ID, NAME, CREATED_AT

-- where keyword
-- getting the userd whose id is 1
SELECT * FROM users WHERE id = 1;


-- getting all the users with role 'user'
SELECT NAME FROM USERS WHERE ROLE = 'user';

-- UPDATING THE RECORD 
-- here where statement is important, if you don't specify it, it will update the whole column
UPDATE users 
SET role = 'Manager'
WHERE id = 10;

-- SELECT * FROM users
RETURNING ID, NAME;


-- deleting data from the table
-- here where is very important that is  if you do not specify where it will delete all the date

DELETE FROM USERS WHERE ID = 2

-- adding a colum to your table
--> synatx -> ALTER TABLE < table name> ADD  COLUMS <   COLUMN name > < datatyple>;
ALTER TABLE users ADD COLUMN age  INTEGER DEFAULT 0;


-- HOW TO DELETE A COLUMN


-- ORDERING DETAILS IN THE TABLE
-- ascending order
SELECT * FROM USERS ORDERS BY ID ASC
-- DECEINGING ORDER
SELECT * FROM USERS ORDERS BY ID DESC;

-- oldest user details
SELECT * FROM USERS ORDER BY AGE DESC LIMIT 1;

-- YOUNGEST USER DETAILS
SELECT * FROM USERS ORDER BY AGE ASC LIMIT 1;


-- case sensative checking 
SELECT * FROM USERS WHERE NAME LIKE 'gaurav';

-- case insensitive cheking
SELECT * FROM USERS WHERE NAME ILIKE 'gaurav';


-- pra at the beginning
SELECT * FROM USERS WHERE NAME ILIKE 'gau';

-- end with 'av'
SELECT * FROM USERS WHERE NAME ILIKE '%av';


-- Check for 'r' anywhere on name ( works like includes statemet in JS)
SELECT * FROM USERS WHERE NAME ILIKE '%av%';

-- second letter in 'r'
SELECT * FROM USERS WHERE NAME ILIKE '_r%';


