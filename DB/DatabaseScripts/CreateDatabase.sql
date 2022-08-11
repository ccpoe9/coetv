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
  `URL` VARCHAR(20),
  PRIMARY KEY (`id`));
  


USE `mediatime-db`;

DROP PROCEDURE IF EXISTS GetMoviesByPage;

DELIMITER //

CREATE PROCEDURE GetMoviesByPage(
	IN currentPage INT,
    IN size INT,
    IN search VARCHAR(100),
    IN in_genre VARCHAR(25),
	IN orderBy VARCHAR(10),
	IN orderDir VARCHAR(4),
    OUT totalRecords INT,
    OUT totalPages INT
)
BEGIN
	DECLARE offsetval INT DEFAULT 0;
	SET offsetval = (currentpage - 1) * size;
	SELECT * FROM `mediatime-db`.`Movies`
    WHERE `Name` LIKE CONCAT('%',search,'%') AND `Genre` LIKE CONCAT(in_genre,'%')
    ORDER BY
		(CASE WHEN orderBy= 'id' AND orderDir='ASC' THEN `id` END) ASC,
        (CASE WHEN orderBy= 'id' AND orderDir= 'DESC' THEN `id` END) DESC,
        (CASE WHEN orderBy='Name' AND orderDir='ASC' THEN `Name` END) ASC,
        (CASE WHEN orderBy='Name' AND orderDir='DESC' THEN `Name` END) DESC,
        (CASE WHEN orderBy='Rating' AND orderDir='ASC' THEN `Rating` END) ASC,
        (CASE WHEN orderBy='Rating' AND orderDir='DESC' THEN `Rating` END) DESC
        LIMIT size OFFSET offsetval;
	
	
    SELECT COUNT(*) INTO totalRecords FROM(
    SELECT * FROM `mediatime-db`.`Movies`
    WHERE `Name` LIKE CONCAT('%',search,'%')
    ) AS rescount;
    SET totalPages = CEIL(totalRecords/size);
    
END //

DELIMITER ;  

DROP PROCEDURE IF EXISTS GetMovieByUrl;

DELIMITER //
CREATE PROCEDURE GetMovieByUrl(
	IN in_url VARCHAR(45)
)
BEGIN
	SELECT * FROM `mediatime-db`.`Movies` m
    WHERE m.`URL` = in_url;
END //

DELIMITER ; 

CREATE TABLE `mediatime-db`.`Genres` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
  
DELIMITER //
CREATE PROCEDURE GetAllGenres()
BEGIN
	SELECT * FROM `mediatime-db`.`Genres` g;
END //

DELIMITER ; 



