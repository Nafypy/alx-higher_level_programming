-- create a table with multiple rows
CREATE TABLE IF NOT EXISTS second_table(id INT, name VARCHAR(256), score INT);
--insert records into this table
INSERT INTO second_table (id, name, score) VALUES (1, "john", 10);
INSERT INTO second_table (id, name, score) VALUES (1, "Alex", 3);
INSERT INTO second_table (id, name, score) VALUES (1, "Bob", 14);
INSERT INTO second_table (id, name, score) VALUES (1, "George",8);