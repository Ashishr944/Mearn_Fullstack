-- Creating a table
CREATE TABLE users(
    ID serial,
    NAME varchar(50),
    EMAIL varchar(100),
    ROLE varchar(25) default 'user',
    CREATED_AT TIMESTAMP default now()
)

-- Inserting data in table
INSERT INTO USERS (NAME, EMAIL) VALUES ('ASHISH', 'ashish@gmail.com');

-- Display data from the table
SELECT * FROM USERS

-- display selected data from the table
-- Before running this command first comment precious command 
SELECT NAME, ROLE FROM USERS;


-- DISPLAYING THE DATA AS SOON AS YOU INSERT IT INTO THE TABLE
INSERT INTO USERS( NAME , EMAIL) VALUES ('PRANAV','adfds@gmailc.om')
RETURNING ID, NAME, CREATED_AT;



-- INSERTING MULTIPLE DATA INSIDE YOUR TABLE
INSERT INTO USERS (NAME, EMAIL) VALUES
('APPLE', 'ADSFDG@GMAIL.COM'),
('Bipple', 'afdfsfd@GMAIL.COM'),
('Cipple', 'Aadfsd@GMAIL.COM'),
('Dipple', 'afgfd@GMAIL.COM')
RETURNING ID, NAME, CREATED_AT;

-- WHERE KEY WORD IS LIKE CONDITION IN SQL
-- WHERE statement
-- Getting the users whole id is 1
SELECT * FROM USERS WHERE ID = 1;

-- Getting all the users with role as user
SELECT NAME FROM USERS WHERE ROLE = 'user';


-- Updating the recond 
-- here where statement is important, if you don't specify it, it will updat the whole colum
UPDATE USERS SET ROLE = 'ADMIN' WHERE ID = 1;
RETURNING NAME, ROLE;


-- Deleting data from the table
-- here where is very important that is if you do no specify where it will delete all the data from from users
DELETE FROM USERS WHERE ID = 2;

-- DELETING WHOLE TABLE
DELETE FROM USERS;


-- ADDING   a colum to your table
-- syntac -> ALTER TABLE <TABLE NAME> ADD COLUMN <COLUMN NAME> <DATATYPE>;

ALTER TABLE USERS ADD COLUMN AGE INTEGER DEFAULT 0;


-- HOW TO DELETE A COLUMN
-- syntax--
-- ALTER TABLE table_name DROP COLUMN column_name;
ALTER TABLE USERS DROP COLUMN CREATED_AT;

-- UPDATE USER DETAILS
UPDATE USERS SET AGE = 21


-- ORDERING DETAILS IN TABLE
-- DESCENDING ORDER
SELECT * FROM USERS ORDER BY ID DESC;

SELECT * FROM USERS;



-- ASCENDIG ORDER
SELECT * FROM USERS ORDER BY ID ASC;

-- OR
SELECT * FROM USERS ORDER BY ID;

SELECT * FROM USERS;


-- SET LIMIT OF 3 GET USERS WHOS AGE ARE DESCENIG ORDER 
SELECT * FROM USERS ORDER BY AGE DESC LIMIT 3;


-- condition to check where age < 20
SELECT * FROM USERS WHERE AGE < 20;

-- condition to check where age > 20
SELECT * FROM USERS WHERE AGE > 20;


-- Get name where name = ASHISH
SELECT * FROM USERS WHERE NAME = 'ASHISH';



-- Find something in data using string 
-- this is case insensitive checking
SELECT * FROM USERS WHERE NAME ILIKE 'ashish';

-- this is case sensitive checking
SELECT * FROM USERS WHERE NAME LIKE 'ashish';

-- checks ash at the beginning
SELECT * FROM USERS WHERE NAME ILIKE 'ash%';


-- check ash at the end

SELECT * FROM USERS WHERE NAME ILIKE '%ish';


-- this will check 'a' anywhere in name (works like includes statement in js)
SELECT * FROM USERS WHERE NAME ILIKE '%a%';


-- Chec where the second letter is r in data base as name;
SELECT * FROM USERS WHERE NAME ILIKE '_r%';