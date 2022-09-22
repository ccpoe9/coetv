#MOVIES
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`Thumbnail`,`Video`,`Desc`,`Rating`,`URL`, `Trailer`) 
VALUES('Big Buck Bunny','Comedy,Animation','https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/1200px-Big_buck_bunny_poster_big.jpg','http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4','A day in the life of Big Buck Bunny', 6.5,'Mjk1NDE=','_xQ-t7vFDcY');
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`Thumbnail`,`Video`,`Desc`,`Rating`,`URL`, `Trailer`) 
VALUES('Tarzan','Animation,Adventure,Comedy','https://m.media-amazon.com/images/M/MV5BY2ZiYWUxN2ItYmQxZi00NDlkLWE2NDAtOTNmYTg1MDI0NDk1XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg','https://s3.us-east-1.wasabisys.com/coemediatime/Movies/Tarzan (1999)/Tarzan.1999.720p.mp4','A man raised by gorillas must decide where he really belongs when he discovers he is a human.', 7.3,'MTIzNDU=','ie53R2HEZ6g');


#GENRES 
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Comedy');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Animation');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Action');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Adventure');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Anime');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Horror');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Fantasy');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Thriller');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Crime');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Historical');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Romance');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Sci-Fi');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Western');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Other');


#SHOWS



#LIVE
INSERT INTO `mediatime-db`.Live(`Name`,`EPGID`,`Thumbnail`,`Source`)
VALUES('Comedy Central Pluto TV', '5ca671f215a62078d2ec0abf','https://images.pluto.tv/channels/5ca671f215a62078d2ec0abf/colorLogoPNG.png',
'https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/5ca671f215a62078d2ec0abf/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channe
l&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel
&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS&already_redirected=true');
INSERT INTO `mediatime-db`.Live(`Name`,`EPGID`,`Thumbnail`,`Source`)
VALUES('Nick Pluto TV', '5ca673e0d0bd6c2689c94ce3','https://images.pluto.tv/channels/5ca673e0d0bd6c2689c94ce3/colorLogoPNG.png',
'http://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ca673e0d0bd6c2689c94ce3livestitch/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5ca673e0d0bd6c2689c94ce3&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=977&terminate=false&userId=&profilesFromStream=true');

 


