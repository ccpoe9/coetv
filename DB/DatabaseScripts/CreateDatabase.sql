DROP DATABASE IF EXISTS `mediatime-db`;
CREATE DATABASE `mediatime-db`;

CREATE TABLE `mediatime-db`.`Movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(50) NULL,
  `Genre` VARCHAR(100) NULL,
  `Thumbnail` VARCHAR(250) NULL,
  `Video` VARCHAR(750) NULL,
  `Desc` VARCHAR(250) NULL,
  `Rating` DECIMAL(4,1),
  `URL` VARCHAR(50),
  PRIMARY KEY (`id`));

ALTER TABLE `mediatime-db`.`Movies` 
ADD UNIQUE INDEX `URL_UNIQUE` (`URL` ASC) VISIBLE;

CREATE TABLE `mediatime-db`.`Shows` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(50) NULL,
  `Genre` VARCHAR(100) NULL,
  `Thumbnail` VARCHAR(250) NULL,
  `Desc` VARCHAR(250) NULL,
  `Rating` DECIMAL(4,1),
  `URL` VARCHAR(50),
  PRIMARY KEY (`id`));
  
ALTER TABLE `mediatime-db`.`Shows` 
ADD UNIQUE INDEX `URL_UNIQUE` (`URL` ASC) VISIBLE;

CREATE TABLE `mediatime-db`.`Episodes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(50) NULL,
  `ShowName` VARCHAR(50) NULL,
  `Season` INT,
  `Episode` INT,
  `Video` VARCHAR(750) NULL,
  `Desc` VARCHAR(250) NULL,
  PRIMARY KEY (`id`));

USE `mediatime-db`;

CREATE TABLE `mediatime-db`.`Genres` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `mediatime-db`.`Live` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  `EPGID` VARCHAR(30) NULL,
  `Thumbnail` VARCHAR(250) NULL,
  `Source` VARCHAR(750) NULL,
  PRIMARY KEY (`id`));
  
  

DROP PROCEDURE IF EXISTS GetMoviesByPage;

DELIMITER //

CREATE PROCEDURE GetMoviesByPage(
	IN currentPage INT,
    IN size INT,
    IN search VARCHAR(100),
    IN in_genre VARCHAR(100),
	IN orderBy VARCHAR(10),
	IN orderDir VARCHAR(4),
    OUT totalRecords INT,
    OUT totalPages INT
)
BEGIN
	DECLARE offsetval INT DEFAULT 0;
	SET offsetval = (currentpage - 1) * size;
	SELECT * FROM `mediatime-db`.`Movies`
    WHERE `Name` LIKE CONCAT('%',search,'%') AND `Genre` LIKE CONCAT('%',in_genre,'%')
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

DROP PROCEDURE IF EXISTS InsMovie;

DELIMITER //

CREATE PROCEDURE InsMovie(
	IN in_Name VARCHAR(50),
    IN in_Genre VARCHAR(100),
    IN in_Thumbnail VARCHAR(250),
    IN in_Video VARCHAR(740),
    IN in_Desc VARCHAR(250),
    IN in_Rating DECIMAL(4,1),
    IN in_Url VARCHAR(50)
)
BEGIN
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`Thumbnail`,`Video`,`Desc`,`Rating`,`URL`) 
VALUES(in_Name,in_Genre,in_Thumbnail,in_Video, in_Desc, in_Rating , in_Url);
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS UpdMovie;

DELIMITER //

CREATE PROCEDURE UpdMovie(
	IN in_id INT,
	IN in_Name VARCHAR(50),
    IN in_Genre VARCHAR(100),
    IN in_Thumbnail VARCHAR(250),
    IN in_Video VARCHAR(750),
    IN in_Desc VARCHAR(250),
    IN in_Rating DECIMAL(4,1)
)
BEGIN
UPDATE `mediatime-db`.Movies
SET
	`Name` = in_Name,
    `Genre` = in_Genre,
    `Thumbnail` = in_Thumbnail,
    `Video` = in_Video,
    `Desc` = in_Desc,
    `Rating` = in_Rating
WHERE 
	`id` = in_id;
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS DeleteMovie;

DELIMITER //

CREATE PROCEDURE DeleteMovie(
	IN in_id INT
)
BEGIN
DELETE FROM `mediatime-db`.Movies
WHERE 
	`id` = in_id;
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS GetMovieByUrl;

DELIMITER //
CREATE PROCEDURE GetMovieByUrl(
	IN in_url VARCHAR(50)
)
BEGIN
	SELECT * FROM `mediatime-db`.`Movies` m
    WHERE m.`URL` = in_url;
END //

DELIMITER ; 
  
DELIMITER //
CREATE PROCEDURE GetAllGenres()
BEGIN
	SELECT * FROM `mediatime-db`.`Genres` g;
END //

DELIMITER ;
  
DROP PROCEDURE IF EXISTS GetShowsByPage;

DELIMITER //

CREATE PROCEDURE GetShowsByPage(
	IN currentPage INT,
    IN size INT,
    IN search VARCHAR(100),
    IN in_genre VARCHAR(100),
	IN orderBy VARCHAR(10),
	IN orderDir VARCHAR(4),
    OUT totalRecords INT,
    OUT totalPages INT
)
BEGIN
	DECLARE offsetval INT DEFAULT 0;
	SET offsetval = (currentpage - 1) * size;
	SELECT * FROM `mediatime-db`.`Shows`
    WHERE `Name` LIKE CONCAT('%',search,'%') AND `Genre` LIKE CONCAT('%',in_genre,'%')
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

DROP PROCEDURE IF EXISTS InsShow;

DELIMITER //

CREATE PROCEDURE InsShow(
	IN in_Name VARCHAR(50),
    IN in_Genre VARCHAR(100),
    IN in_Thumbnail VARCHAR(250),
    IN in_Desc VARCHAR(250),
    IN in_Rating DECIMAL(4,1),
    IN in_Url VARCHAR(50)
)
BEGIN
INSERT INTO `mediatime-db`.Shows(`Name`,`Genre`,`Thumbnail`,`Desc`,`Rating`,`URL`) 
VALUES(in_Name,in_Genre,in_Thumbnail,in_Desc, in_Rating , in_Url);
END //

DELIMITER ; 

DROP PROCEDURE IF EXISTS UpdShow;

DELIMITER //

CREATE PROCEDURE UpdShow(
	IN in_id INT,
	IN in_Name VARCHAR(50),
    IN in_Genre VARCHAR(100),
    IN in_Thumbnail VARCHAR(250),
    IN in_Desc VARCHAR(250),
    IN in_Rating DECIMAL(4,1)
)
BEGIN
DECLARE showOldName VARCHAR(50);
SET showOldName = (SELECT `Name` FROM `mediatime-db`.Shows
				WHERE `id` = in_id);
                
UPDATE `mediatime-db`.Shows
SET
	`Name` = in_Name,
    `Genre` = in_Genre,
    `Thumbnail` = in_Thumbnail,
    `Desc` = in_Desc,
    `Rating` = in_Rating
WHERE 
	`id` = in_id;
    
UPDATE `mediatime-db`.Episodes
SET
	`ShowName`= in_Name
WHERE
	`ShowName`= showOldName;
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS DeleteShow;

DELIMITER //

CREATE PROCEDURE DeleteShow(
	IN in_id INT
)
BEGIN
SET @showName = (SELECT `Name` FROM `mediatime-db`.Shows
				WHERE `id` = in_id);           
DELETE FROM `mediatime-db`.Episodes
WHERE
	`ShowName` = @showName;
DELETE FROM `mediatime-db`.Shows
WHERE 
	`id` = in_id;
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS DeleteEpisode;

DELIMITER //

CREATE PROCEDURE DeleteEpisode(
	IN in_id INT
)
BEGIN
DELETE FROM `mediatime-db`.Episodes
WHERE 
	`id` = in_id;
END //

DELIMITER ;



DELIMITER //
CREATE PROCEDURE GetShowByUrl(
	IN in_url VARCHAR(50),
    OUT totalSeasons INT
)
BEGIN
	DECLARE show_name varchar(50);
	SELECT * FROM `mediatime-db`.`Shows` s
    WHERE s.`URL` = in_url;
    
    SET show_name = (SELECT `Name` FROM `mediatime-db`.`Shows` s
    WHERE s.`URL` = in_url);
    
    SELECT DISTINCT(`Season`) INTO totalSeasons FROM `mediatime-db`.`Episodes` e
	WHERE e.`ShowName` = show_name
	ORDER BY `Season` DESC LIMIT 1;
    
END //

DELIMITER ; 

DROP PROCEDURE IF EXISTS GetEpisodesByShowSeason;

DELIMITER //
CREATE PROCEDURE GetEpisodesByShowSeason(
	IN in_showname VARCHAR(50),
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

DROP PROCEDURE IF EXISTS InsEpisode;

DELIMITER //
CREATE PROCEDURE InsEpisode(
	IN in_Name VARCHAR(50),
	IN in_showName VARCHAR(50),
    IN in_season INT,
    IN in_episode INT,
    IN in_Video VARCHAR(750),
    IN in_Desc VARCHAR(250)
)
BEGIN
INSERT INTO `mediatime-db`.Episodes(`Name`,`ShowName`,`Season`,`Episode`,`Video`,`Desc`)
VALUES(in_Name, in_showName, in_season, in_episode, in_Video, in_Desc);
END //

DELIMITER ; 

DROP PROCEDURE IF EXISTS UpdEpisode;

DELIMITER //
CREATE PROCEDURE UpdEpisode(
	IN in_id INT,
	IN in_Name VARCHAR(50),
    IN in_Video VARCHAR(750),
    IN in_Desc VARCHAR(250)
)
BEGIN
UPDATE `mediatime-db`.Episodes
SET 
	`Name` = in_Name,
    `Video` = in_Video,
    `Desc` = in_Desc
WHERE 
	`id` = in_id;
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS GetLive;

DELIMITER //
CREATE PROCEDURE GetLive()
BEGIN
	SELECT * FROM `mediatime-db`.Live;
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS InsLive;

DELIMITER //
CREATE PROCEDURE InsLive(
	IN in_Name VARCHAR(45),
	IN in_EPGID VARCHAR(30),
	IN in_Thumbnail VARCHAR(250),
    IN in_Source VARCHAR(750)
)
BEGIN
INSERT INTO `mediatime-db`.Live(`Name`,`EPGID`,`Thumbnail`,`Source`)
VALUES(in_Name, in_EPGID, in_Thumbnail, in_Source);
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS UpdLive;

DELIMITER //
CREATE PROCEDURE UpdLive(
	IN in_id INT,
	IN in_Name VARCHAR(45),
	IN in_EPGID VARCHAR(30),
	IN in_Thumbnail VARCHAR(250),
    IN in_Source VARCHAR(750)
)
BEGIN
UPDATE `mediatime-db`.Live
SET 
	`Name` = in_Name,
    `EPGID` = in_EPGID,
    `Thumbnail` = in_Thumbnail,
    `Source` = in_Source
WHERE 
	`id` = in_id;
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS DeleteLive;

DELIMITER //
CREATE PROCEDURE DeleteLive(
	IN in_id INT
)
BEGIN
DELETE FROM `mediatime-db`.Live
WHERE 
	`id` = in_id;
END //

DELIMITER ;




