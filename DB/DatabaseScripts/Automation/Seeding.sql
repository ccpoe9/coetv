#MOVIES
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`Thumbnail`,`Video`,`Desc`,`Rating`,`URL`) 
VALUES('M1','Genre1','thumbnail.png','http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4','Movie1 Desc..', 9.1,'Mjk1NDE=');
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`Thumbnail`,`Video`,`Desc`,`Rating`,`URL`) 
VALUES('M2','Genre2','thumbnail.png','http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4','Movie2 Desc..', 9.1,'NzM2MTQ=');
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`Thumbnail`,`Video`,`Desc`,`Rating`,`URL`) 
VALUES('M3','Genre1','thumbnail.png','http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4','Movie3 Desc..', 9.1,'NDU4Nzg=');
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`Thumbnail`,`Video`,`Desc`,`Rating`,`URL`) 
VALUES('M4','Genre2','thumbnail.png','http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4','Movie4 Desc..', 9.1,'ODU1ODQ=');
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`Thumbnail`,`Video`,`Desc`,`Rating`,`URL`) 
VALUES('M5','Genre1','thumbnail.png','http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4','Movie5 Desc..', 9.1,'ODU3NQ==');
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`Thumbnail`,`Video`,`Desc`,`Rating`,`URL`) 
VALUES('M6','Genre1','thumbnail.png','http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4','Movie6 Desc..', 9.1,'ODE2Mg==');



#GENRES 
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Genre1');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Genre2');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Genre3');

#SHOWS
INSERT INTO `mediatime-db`.Shows(`Name`,`Genre`,`Thumbnail`,`Desc`,`Rating`,`URL`) 
VALUES('TV1','Genre1','thumbnail.png','TV1 Desc..', 9.1,'1');
INSERT INTO `mediatime-db`.Shows(`Name`,`Genre`,`Thumbnail`,`Desc`,`Rating`,`URL`) 
VALUES('TV2','Genre1','thumbnail.png','TV2 Desc..', 9.1,'2');
INSERT INTO `mediatime-db`.Shows(`Name`,`Genre`,`Thumbnail`,`Desc`,`Rating`,`URL`) 
VALUES('TV3','Genre1','thumbnail.png','TV3 Desc..', 9.1,'3');
INSERT INTO `mediatime-db`.Shows(`Name`,`Genre`,`Thumbnail`,`Desc`,`Rating`,`URL`) 
VALUES('TV4','Genre1','thumbnail.png','TV4 Desc..', 9.1,'4');
INSERT INTO `mediatime-db`.Shows(`Name`,`Genre`,`Thumbnail`,`Desc`,`Rating`,`URL`) 
VALUES('TV5','Genre1','thumbnail.png','TV5 Desc..', 9.1,'5');
INSERT INTO `mediatime-db`.Shows(`Name`,`Genre`,`Thumbnail`,`Desc`,`Rating`,`URL`) 
VALUES('TV6','Genre1','thumbnail.png','TV6 Desc..', 9.1,'6');


INSERT INTO `mediatime-db`.Episodes(`Name`,`ShowName`,`Season`,`Episode`,`Video`,`Desc`)
VALUES('TV1S1E1', 'TV1',1,1,'//vjs.zencdn.net/v/oceans.mp4','TV1S1E1 desc');
INSERT INTO `mediatime-db`.Episodes(`Name`,`ShowName`,`Season`,`Episode`,`Video`,`Desc`)
VALUES('TV1S1E2', 'TV1',1,2,'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4','TV1S1E2 desc');
INSERT INTO `mediatime-db`.Episodes(`Name`,`ShowName`,`Season`,`Episode`,`Video`,`Desc`)
VALUES('TV2S1E1', 'TV2',1,1,'//vjs.zencdn.net/v/oceans.mp4','TV2S1E1 desc');
INSERT INTO `mediatime-db`.Episodes(`Name`,`ShowName`,`Season`,`Episode`,`Video`,`Desc`)
VALUES('TV1S2E1', 'TV1',2,1,'//vjs.zencdn.net/v/oceans.mp4','TV1S2E1 desc');
INSERT INTO `mediatime-db`.Episodes(`Name`,`ShowName`,`Season`,`Episode`,`Video`,`Desc`)
VALUES('TV1S3E1', 'TV1',3,1,'//vjs.zencdn.net/v/oceans.mp4','TV1S3E1 desc');



#LIVE
INSERT INTO `mediatime-db`.Live(`Name`,`EPGID`,`Thumbnail`,`Source`)
VALUES('Comedy Central Pluto TV', '5ca671f215a62078d2ec0abf','https://images.pluto.tv/channels/5ca671f215a62078d2ec0abf/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5d4947590ba40f75dc29c26b/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=1&deviceId=5d4947590ba40f75dc29c26b&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=DE&serverSideAds=false&sid=5ca4fefb-0728-11eb-a18c-0242ac110002&terminate=false&userId=');

 


