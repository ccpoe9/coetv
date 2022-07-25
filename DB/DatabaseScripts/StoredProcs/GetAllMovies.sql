USE `video-website-db`

DELIMITER //
CREATE PROCEDURE GetAllMovies ()
BEGIN
	SELECT * FROM Movies;
END //
DELIMITER ;

