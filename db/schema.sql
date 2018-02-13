CREATE DATABASE burgers_db

USER DATABASE burgers_db

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(100) NOT NULL,
	burger_devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
