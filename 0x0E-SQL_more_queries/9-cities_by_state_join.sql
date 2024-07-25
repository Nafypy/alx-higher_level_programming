USE hbtn_0d_usa;
-- Write a script that lists all cities contained in the database hbtn_0d_usa

SELECT cities.id AS cities_id, cities.name AS cities_name, states.nane AS states-name FROM cities
JOIN states ON cities.states_id = states.id
ORDER BY cities.id;
