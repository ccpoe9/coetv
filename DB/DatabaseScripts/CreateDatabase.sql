DROP DATABASE IF EXISTS `mediatime-db`;
CREATE DATABASE `mediatime-db`;

CREATE TABLE `mediatime-db`.`Movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  `Genre` VARCHAR(45) NULL,
  `Thumbnail` VARCHAR(45) NULL,
  `Video` VARCHAR(45) NULL,
  `Desc` VARCHAR(100) NULL,
  `Rating` VARCHAR(4) NULL,
  PRIMARY KEY (`id`));

USE `mediatime-db`;

DELIMITER //
CREATE PROCEDURE GetAllMovies ()
BEGIN
	SELECT * FROM Movies;
END //
DELIMITER ;
