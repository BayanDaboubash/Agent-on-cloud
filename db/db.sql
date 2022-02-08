DROP DATABASE IF EXISTS db_agent;
CREATE DATABASE db_agent;

USE db_agent;


CREATE TABLE roles (
role_id INT AUTO_INCREMENT NOT NULL,
role VARCHAR(255) NOT NULL,
PRIMARY KEY (role_id)
);

CREATE TABLE users (
user_id INT AUTO_INCREMENT NOT NULL,
firstName VARCHAR(255),
lastName VARCHAR(255),
phone VARCHAR(255),
email VARCHAR(255),
password VARCHAR(255),
role_id INT,
FOREIGN KEY (role_id) REFERENCES roles(role_id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (user_id)
);

CREATE TABLE dates(
date_id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(255),
date VARCHAR(255),
phone VARCHAR(255),
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(user_id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (date_id)
);

INSERT INTO roles (`role_id`,`role`) VALUES (1,'seller');
INSERT INTO roles (`role_id`,`role`) VALUES (2,'buyer');

INSERT INTO users (`user_id`,`firstName`,`lastName`,`phone`,`email`,`password`,`role_id`,`is_deleted`) VALUES (18,'Seller','Bayan',795758885,'sellerbayan@gmail.com','$2b$10$Wr09jLVISAwin6o1jaLuc.i5jdYgye8ND4aIvjvBsW3w45vroNDBi',1,0);
INSERT INTO users (`user_id`,`firstName`,`lastName`,`phone`,`email`,`password`,`role_id`,`is_deleted`) VALUES (19,'Buyer','Razzan',777471950,'buyerrazan@gmail.com','$2b$10$nStwPrClq27bPbt9prTQ5OlZTS780Pey0NPFiMC.ibGBz7q9.r/ty',2,0);
INSERT INTO users (`user_id`,`firstName`,`lastName`,`phone`,`email`,`password`,`role_id`,`is_deleted`) VALUES (20,'Buyer','Samah',798585559,'samah@gmail.com','$2b$10$nH5jvnS8o7zsUGwT7rcFKuTAtS4CXBLhrRJGjPu1/.yEdBW2wiqqi',2,0);

/*password by user = 0000*/

INSERT INTO dates (`date_id`,`name`,`date`,`phone`,`user_id`,`is_deleted`) VALUES (8,'Razan','2022-02-10','0795752225',18,1);
INSERT INTO dates (`date_id`,`name`,`date`,`phone`,`user_id`,`is_deleted`) VALUES (9,'Samah','2022-02-11','0123456789',18,1);
