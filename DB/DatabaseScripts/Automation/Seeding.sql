#MOVIES
INSERT INTO `mediatime-db`.Movies(`Name`,`Genre`,`Thumbnail`,`Video`,`Desc`,`Rating`,`URL`) 
VALUES('Big Buck Bunny','Comedy,Animation','https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/1200px-Big_buck_bunny_poster_big.jpg','http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4','A day in the life of Big Buck Bunny', 6.5,'Mjk1NDE=');



#GENRES 
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Comedy');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Animation');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Action');
INSERT INTO `mediatime-db`.Genres(`Name`)
VALUES('Adeventure');
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
INSERT INTO `mediatime-db`.Shows(`Name`,`Genre`,`Thumbnail`,`Desc`,`Rating`,`URL`) 
VALUES('For Bigger What?','Other','https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg','Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman\'s escapes aren\'t quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.', 9.1,'NzM2MTQ=');



#LIVE
INSERT INTO `mediatime-db`.Live(`Name`,`EPGID`,`Thumbnail`,`Source`)
VALUES('Comedy Central Pluto TV', '5ca671f215a62078d2ec0abf','https://images.pluto.tv/channels/5ca671f215a62078d2ec0abf/colorLogoPNG.png',
'https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/5ca671f215a62078d2ec0abf/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channe
l&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel
&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS&already_redirected=true');
INSERT INTO `mediatime-db`.Live(`Name`,`EPGID`,`Thumbnail`,`Source`)
VALUES('Nick Pluto TV', '5ca673e0d0bd6c2689c94ce3','https://images.pluto.tv/channels/5ca673e0d0bd6c2689c94ce3/colorLogoPNG.png',
'http://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ca673e0d0bd6c2689c94ce3livestitch/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5ca673e0d0bd6c2689c94ce3&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=977&terminate=false&userId=&profilesFromStream=true');

 


