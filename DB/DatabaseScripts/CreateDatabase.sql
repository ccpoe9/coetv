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

ALTER TABLE `mediatime-db`.`Movies` 
ADD UNIQUE INDEX `URL_UNIQUE` (`URL` ASC) VISIBLE,
ADD UNIQUE INDEX `Video_UNIQUE` (`Video` ASC) VISIBLE;

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
    WHERE `Name` LIKE CONCAT('%',search,'%') AND `Genre` LIKE CONCAT(in_genre,'%')
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

CREATE TABLE `mediatime-db`.`Shows` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  `Genre` VARCHAR(45) NULL,
  `Thumbnail` VARCHAR(45) NULL,
  `Desc` VARCHAR(100) NULL,
  `Rating` DECIMAL(4,1),
  `URL` VARCHAR(20),
  PRIMARY KEY (`id`));
  
ALTER TABLE `mediatime-db`.`Shows` 
ADD UNIQUE INDEX `URL_UNIQUE` (`URL` ASC) VISIBLE;
  
DROP PROCEDURE IF EXISTS GetShowsByPage;

DELIMITER //

CREATE PROCEDURE GetShowsByPage(
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
	SELECT * FROM `mediatime-db`.`Shows`
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
    SELECT * FROM `mediatime-db`.`Shows`
    WHERE `Name` LIKE CONCAT('%',search,'%') AND `Genre` LIKE CONCAT(in_genre,'%')
    ) AS rescount;
    SET totalPages = CEIL(totalRecords/size);
    
END //

DELIMITER ;  
  
CREATE TABLE `mediatime-db`.`Episodes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  `ShowName` VARCHAR(45) NULL,
  `Season` INT,
  `Episode` INT,
  `Video` VARCHAR(45) NULL,
  `Desc` VARCHAR(100) NULL,
  PRIMARY KEY (`id`));
  
ALTER TABLE `mediatime-db`.`Episodes` 
ADD UNIQUE INDEX `Video_UNIQUE` (`Video` ASC) VISIBLE;

DROP PROCEDURE IF EXISTS GetEpisodesByShowSeason;

DELIMITER //
CREATE PROCEDURE GetEpisodesByShowSeason(
	IN in_showname VARCHAR(45),
    IN in_season INT,
    OUT totalEpisodes INT
)
BEGIN
	SELECT * FROM `mediatime-db`.`Episodes` e
    WHERE e.`ShowName` = in_showname AND e.`Season` = in_season;
    
	SELECT COUNT(*) INTO totalEpisodes FROM(
    SELECT * FROM `mediatime-db`.`Episodes` e
    WHERE e.`ShowName` = in_showname AND e.`Season` = in_season
    ) AS rescount;
    
END //

DELIMITER ; 

DROP PROCEDURE IF EXISTS GetEpisodeByNumber;

DELIMITER //
CREATE PROCEDURE GetEpisodesByNumber(
	IN in_showname VARCHAR(45),
    IN in_season INT,
    IN in_episode INT
)
BEGIN
	SELECT * FROM `mediatime-db`.`Episodes` e
    WHERE e.`ShowName` = in_showname AND e.`Season` = in_season AND e.`Episode` = in_episode;
    
END //

DELIMITER ;