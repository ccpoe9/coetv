DROP DATABASE IF EXISTS `video-website-db`;
CREATE DATABASE `video-website-db`;

CREATE TABLE `video-website-db`.`Movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  `Genre` VARCHAR(45) NULL,
  `FileRef` VARCHAR(45) NULL,
  `Desc` VARCHAR(100) NULL,
  PRIMARY KEY (`id`));
  
#SELECT * FROM `video-website-db`.Movies;
  
INSERT INTO `video-website-db`.Movies(`Name`,`Genre`,`FileRef`,`Desc`) 
VALUES('Amazing Grace', 'Spiritual','/Video Files/amazinggrace.mp4','I play amazing grace');
INSERT INTO `video-website-db`.Movies(`Name`,`Genre`,`FileRef`,`Desc`) 
VALUES('Arpeggios', 'World','/Video Files/ARPEGGIOS.mp4','I play arpeggios');