-- Create database and user
CREATE DATABASE steemworldmap CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE USER 'steemworldmap'@'%' IDENTIFIED BY 'password';

-- Allow user to manipulate the database
GRANT USAGE ON *.* TO 'steemworldmap'@'%';
GRANT SELECT, INSERT, UPDATE, DELETE ON `steemworldmap`.* TO 'steemworldmap'@'%';
