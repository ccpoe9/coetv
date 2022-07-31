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

CREATE PROCEDURE GetMoviesByPage(
	IN currentPage INT,
    IN size INT,
    IN search VARCHAR(100),
	IN orderBy VARCHAR(15),
	IN orderDir VARCHAR(4)
)
BEGIN
	DECLARE offsetval INT DEFAULT 0;
	SET offsetval = (currentpage - 1) * size;
	SELECT * FROM `mediatime-db`.`Movies`
    ORDER BY id DESC LIMIT size OFFSET offsetval;
END //

DELIMITER ;  

CALL GetMoviesByPage(1,18,'','Name','')


