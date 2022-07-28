DROP DATABASE IF EXISTS `mediatime-db`;
CREATE DATABASE `mediatime-db`;

CREATE TABLE `mediatime-db`.`Movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  `Genre` VARCHAR(45) NULL,
  `FileRef` VARCHAR(45) NULL,
  `Desc` VARCHAR(100) NULL,
  PRIMARY KEY (`id`));
  
#SELECT * FROM `mediatime-db`.Movies;
  
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`FileRef`,`Desc`) 
VALUES('Amazing Grace', 'Spiritual','/Video Files/amazinggrace.mp4','I play amazing grace');
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`FileRef`,`Desc`) 
VALUES('Arpeggios', 'World','/Video Files/ARPEGGIOS.mp4','I play arpeggios');
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`FileRef`,`Desc`) 
VALUES('Uncharted', 'Action','/Video Files/ARPEGGIOS.mp4','Uncharted Desc');
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`FileRef`,`Desc`) 
VALUES('Moonlight', 'Drama','/Video Files/ARPEGGIOS.mp4','Moonlight Desc');
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`FileRef`,`Desc`) 
VALUES('Rise of the Guardians', 'Animation','/Video Files/ARPEGGIOS.mp4','Rise of the Guardians Desc');