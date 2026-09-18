-- condition in sql
-- and operator
SELECT * FROM users
WHERE age > 30
AND ROLE ILIKE 'USER';


-- OR operator
SELECT * FROM users
WHERE age > 30;
OR ROLE ILIKE ' users';






-- here 18 and 30 will be included

SELECT * FROM USER
WHERE AGE 
BETWEEN 18 AND 30


SELECT * FROM users
WHERE AGE 
IN (18, 20, 30);


SELECT AGE  FROM users
WHERE AGE > 17 AND AGE < 31;

-- this ia called a subquery that is when you have a query indide another queary
SELECT * FROM users 
WHERE age 
IN (SELECT age 
FROM users 
WHERE age > 17 
and age < 31);


-- 1 . get me all the managers in ascending order of age
SELECT * FROM users
WHERE role ILIKE 'manager' 
ORDER BY AGE ASC;
-- 2. get me user with role user whose age is above 50 

SELECT * FROM USERS
WHERE role ILIKE 'user'
AND AGE > 50;

DROP TABLE users;


