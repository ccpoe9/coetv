DROP DATABASE IF EXISTS `mediatime-db`;
CREATE DATABASE `mediatime-db`;

CREATE TABLE `mediatime-db`.`Movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  `Genre` VARCHAR(45) NULL,
  `Thumbnail` VARCHAR(45) NULL,
  `Video` VARCHAR(45) NULL,
  `Desc` VARCHAR(100) NULL,
  `Rating` DECIMAL(4,1),
  PRIMARY KEY (`id`));
  


USE `mediatime-db`;

DROP PROCEDURE IF EXISTS GetMoviesByPage;

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
    WHERE `Name` LIKE CONCAT('%',search,'%')
    ORDER BY
		(CASE WHEN orderBy= 'id' AND orderDir='ASC' THEN `id` END) ASC,
        (CASE WHEN orderBy= 'id' AND orderDir= 'DESC' THEN `id` END) DESC,
        (CASE WHEN orderBy='Name' AND orderDir='ASC' THEN `Name` END) ASC,
        (CASE WHEN orderBy='Name' AND orderDir='DESC' THEN `Name` END) DESC,
        (CASE WHEN orderBy='Rating' AND orderDir='ASC' THEN `Rating` END) ASC,
        (CASE WHEN orderBy='Rating' AND orderDir='DESC' THEN `Rating` END) DESC
        LIMIT size OFFSET offsetval;
END //

DELIMITER ;  

