CREATE DATABASE airbnb;

USE airbnb;

DROP TABLE IF EXISTS 'images';

CREATE TABLE images (
  image_id INTEGER NOT NULL AUTO_INCREMENT,
  image_path varchar(100) NOT NULL,
  experience_id INTEGER NOT NULL,
  PRIMARY KEY(image_id)
  FOREIGN KEY (experience_id)
);


INSERT INTO images (image_path, experience_id) VALUES ("./url", 4);

CREATE TABLE experiences (
  experience_id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  experienceDescription VARCHAR(140) NOT NULL,
  experienceCategory VARCHAR(50) NOT NULL,
  experienceActivity VARCHAR(100) NOT NULL,
  city VARCHAR(60) NOT NULL,
  state VARCHAR(60),
  country VARCHAR(100) NOT NULL,
  duration FLOAT(2, 1) NOT NULL,
  groupSize INTEGER NOT NULL,
  averageRating FLOAT(2, 1) NOT NULL,
  cuisine VARCHAR(100) NOT NULL,
  costPerPerson FLOAT(3, 1) NOT NULL,
  includes
  language
  tags
  PRIMARY KEY (experience_id)
);