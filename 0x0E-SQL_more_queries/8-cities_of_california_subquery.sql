-- Write a script that lists all the cities of California that can be found in the database hbtn_0d_usa
USE hbtn_0d_usa;
-- Query to list all cities in california
SELECT * FROM cities WHERE state_id = (
select id FROM states WHERE name = 'California')
ORDER BY id ASC;
