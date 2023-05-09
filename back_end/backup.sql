-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: mediatime-db
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Episodes`
--

DROP TABLE IF EXISTS `Episodes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Episodes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) DEFAULT NULL,
  `ShowName` varchar(50) DEFAULT NULL,
  `Season` int DEFAULT NULL,
  `Episode` int DEFAULT NULL,
  `Video` varchar(750) DEFAULT NULL,
  `Desc` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Episodes`
--

LOCK TABLES `Episodes` WRITE;
/*!40000 ALTER TABLE `Episodes` DISABLE KEYS */;
/*!40000 ALTER TABLE `Episodes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Genres`
--

DROP TABLE IF EXISTS `Genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Genres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Genres`
--

LOCK TABLES `Genres` WRITE;
/*!40000 ALTER TABLE `Genres` DISABLE KEYS */;
INSERT INTO `Genres` VALUES (1,'Comedy'),(2,'Animation'),(3,'Action'),(4,'Adventure'),(5,'Anime'),(6,'Horror'),(7,'Fantasy'),(8,'Thriller'),(9,'Crime'),(10,'Historical'),(11,'Romance'),(12,'Sci-Fi'),(13,'Western'),(14,'Other');
/*!40000 ALTER TABLE `Genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Live`
--

DROP TABLE IF EXISTS `Live`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Live` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `EPGID` varchar(30) DEFAULT NULL,
  `Thumbnail` varchar(250) DEFAULT NULL,
  `Source` varchar(750) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Live`
--

LOCK TABLES `Live` WRITE;
/*!40000 ALTER TABLE `Live` DISABLE KEYS */;
INSERT INTO `Live` VALUES (3,'Pluto TV News ','5268abcd0ce20a8472000114','https://images.pluto.tv/channels/5268abcd0ce20a8472000114/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5268abcd0ce20a8472000114/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5268abcd0ce20a8472000114&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=202&terminate=false&userId='),(4,'CBS News','5a6b92f6e22a617379789618','https://images.pluto.tv/channels/5a6b92f6e22a617379789618/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5a6b92f6e22a617379789618/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5a6b92f6e22a617379789618&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=204&terminate=false&userId='),(5,'NBC News Now','5df97894467dfa00091c873c','https://images.pluto.tv/channels/5df97894467dfa00091c873c/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5df97894467dfa00091c873c/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(6,'Pluto TV Action','561d7d484dc7c8770484914a','https://images.pluto.tv/channels/561d7d484dc7c8770484914a/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/561d7d484dc7c8770484914a/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=561d7d484dc7c8770484914a&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=54&terminate=false&userId='),(7,'Pluto TV Horror','569546031a619b8f07ce6e25','https://images.pluto.tv/channels/569546031a619b8f07ce6e25/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/569546031a619b8f07ce6e25/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=569546031a619b8f07ce6e25&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=75&terminate=false&userId='),(8,'Pluto TV Comedy','5a4d3a00ad95e4718ae8d8db','https://images.pluto.tv/channels/5a4d3a00ad95e4718ae8d8db/colorLogoPNG-1630516100243.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5c363c2411c5ca053f198f97/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGD'),(9,'Pluto TV Drama','5b4e92e4694c027be6ecece1','https://images.pluto.tv/channels/5b4e92e4694c027be6ecece1/colorLogoPNG.png','https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/5b4e92e4694c027be6ecece1/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS&already_redirected=true'),(10,'Pluto TV Thrillers','5b4e69e08291147bd04a9fd7','https://images.pluto.tv/channels/5b4e69e08291147bd04a9fd7/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5b4e69e08291147bd04a9fd7/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5b4e69e08291147bd04a9fd7&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=74&terminate=false&userId='),(11,' Pluto TV Sci-fi','5b4fc274694c027be6ed3eea','https://images.pluto.tv/channels/5b4fc274694c027be6ed3eea/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5b4fc274694c027be6ed3eea/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(12,'Kevin Hart’s LOL Network','5af09e645126c2157123f9eb','https://images.pluto.tv/channels/5af09e645126c2157123f9eb/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5af09e645126c2157123f9eb/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5af09e645126c2157123f9eb&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=462&terminate=false&userId='),(13,'TV Land Sitcoms','5c2d64ffbdf11b71587184b8','https://images.pluto.tv/channels/5c2d64ffbdf11b71587184b8/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5c2d64ffbdf11b71587184b8/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(14,'Comedy Central Pluto TV','5ca671f215a62078d2ec0abf','https://images.pluto.tv/channels/5ca671f215a62078d2ec0abf/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5ca671f215a62078d2ec0abf/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(15,'BET Pluto TV','5ca670f6593a5d78f0e85aed','https://images.pluto.tv/channels/5ca670f6593a5d78f0e85aed/colorLogoPNG.png','http://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ca670f6593a5d78f0e85aed/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5ca670f6593a5d78f0e85aed&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=174&terminate=false&userId='),(16,'Wild \'N Out','5d48678d34ceb37d3c458a55','https://images.pluto.tv/channels/5d48678d34ceb37d3c458a55/colorLogoPNG.png','http://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5d48678d34ceb37d3c458a55/master.m3u8?advertisingId=91a6ae51-6f9d-4fbb-adb0-bdfffa44693e&appVersion=unknown&deviceDNT=0&deviceId=91a6ae51-6f9d-4fbb-adb0-bdfffa44693e&deviceLat=0&deviceLon=0&deviceMake=samsung&deviceModel=samsung&deviceType=samsung-tvplus&deviceUA=samsung/SM-T720/10&deviceVersion=unknown&embedPartner=samsung-tvplus&profileFloor=&profileLimit=&samsung_app_domain=https://play.google.com/store/apps/details?id=com.samsung.android.tvplus&samsung_app_name=Mobile+TV+Plus&us_privacy=1YNY'),(17,'MTV Pluto TV','5ca672f515a62078d2ec0ad2','https://images.pluto.tv/channels/5ca672f515a62078d2ec0ad2/colorLogoPNG-1641928171062.png','http://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ca672f515a62078d2ec0ad2/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5ca672f515a62078d2ec0ad2&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=178&terminate=false&userId='),(18,'Love & Hip Hop','5d51ddf0369acdb278dfb05e','https://images.pluto.tv/channels/5d51ddf0369acdb278dfb05e/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5d51ddf0369acdb278dfb05e/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(19,'Fear Factor','588128d17d64bc0d0f385c34','https://images.pluto.tv/channels/588128d17d64bc0d0f385c34/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5c362ded581a86051df509b4/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(20,'Game Show Central','5e54187aae660e00093561d6','https://images.pluto.tv/channels/5e54187aae660e00093561d6/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5e54187aae660e00093561d6/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(21,'Pluto TV Cars','5812b3a4249444e05d09cc46','https://images.pluto.tv/channels/5812b3a4249444e05d09cc46/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5812b3a4249444e05d09cc46/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5812b3a4249444e05d09cc46&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=663&terminate=false&userId='),(22,'Food TV','5877ac8cb791f4eb4a140d81','https://images.pluto.tv/channels/5877ac8cb791f4eb4a140d81/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5877ac8cb791f4eb4a140d81/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5877ac8cb791f4eb4a140d81&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=601&terminate=false&userId='),(23,'Court TV','5dae0b4841a7d0000938ddbd','https://images.pluto.tv/channels/5dae0b4841a7d0000938ddbd/colorLogoPNG.png','http://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5dae0b4841a7d0000938ddbd/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5dae0b4841a7d0000938ddbd&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=395&terminate=false&userId='),(24,'Pluto TV Travel','59c01b1953680139c6ae9d4d','https://images.pluto.tv/channels/59c01b1953680139c6ae9d4d/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/59c01b1953680139c6ae9d4d/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(25,'Pluto TV History','5a4d35dfa5c02e717a234f86','https://images.pluto.tv/channels/5a4d35dfa5c02e717a234f86/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5a4d35dfa5c02e717a234f86/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5a4d35dfa5c02e717a234f86&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=651&terminate=false&userId='),(26,'Pluto TV Documentaries','5b85a7582921777994caea63','https://images.pluto.tv/channels/5b85a7582921777994caea63/colorLogoPNG-1646155426722.png','https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5b85a7582921777994caea63/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5b85a7582921777994caea63&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=91&terminate=false&userId='),(27,'NFL Channel','5ced7d5df64be98e07ed47b6','https://images.pluto.tv/channels/5ced7d5df64be98e07ed47b6/colorLogoPNG.png','http://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ced7d5df64be98e07ed47b6/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5ced7d5df64be98e07ed47b6&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=708&terminate=false&userId='),(28,'beIN SPORTS XTRA','5df975e2b27cf5000921c102','https://images.pluto.tv/channels/5df975e2b27cf5000921c102/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5df975e2b27cf5000921c102/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=2.9.3-b879e400d5df7a969d4bff8863fe5cb02c7120e6&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=b702181a-c1d6-4ee2-9481-753f471e2ce7&deviceLat=40.8364&deviceLon=-74.1403&deviceMake=Opera&deviceModel=Opera&deviceType=web&deviceVersion=66.0.3515.44&includeExtendedEvents=false&serverSideAds=tr&sid=855d6801-c912-428d-b620-ede4dd0c3b15&userId='),(29,'Impact Wrestling','59b722526996084038c01e1b','https://images.pluto.tv/channels/59b722526996084038c01e1b/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/59b722526996084038c01e1b/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(30,'Nick Pluto TV','5ca673e0d0bd6c2689c94ce3','https://images.pluto.tv/channels/5ca673e0d0bd6c2689c94ce3/colorLogoPNG-1646154941424.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5ca673e0d0bd6c2689c94ce3/master.m3u8?advertisingId=91a6ae51-6f9d-4fbb-adb0-bdfffa44693e&appVersion=unknown&coppa=1&deviceDNT=0&deviceId=91a6ae51-6f9d-4fbb-adb0-bdfffa44693e&deviceLat=0&deviceLon=0&deviceMake=samsung&deviceModel=samsung&deviceType=samsung-tvplus&deviceUA=samsung/SM-T720/10&deviceVersion=unknown&embedPartner=samsung-tvplus&profileFloor=&profileLimit=&samsung_app_domain=https://play.google.com/store/apps/details?id=com.samsung.android.tvplus&samsung_app_name=Mobile+TV+Plus&us_privacy=1YNY'),(31,'Degrassi','5c6eeb85c05dfc257e5a50c4','https://images.pluto.tv/channels/5c6eeb85c05dfc257e5a50c4/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5c6eeb85c05dfc257e5a50c4/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(32,'Nick Jr. Pluto TV','5ca6748a37b88b269472dad9','https://images.pluto.tv/channels/5ca6748a37b88b269472dad9/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5ca6748a37b88b269472dad9/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(33,'Naruto','5da0c85bd2c9c10009370984','https://images.pluto.tv/channels/5da0c85bd2c9c10009370984/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5da0c85bd2c9c10009370984/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(34,'One Piece','5f7790b3ed0c88000720b241','https://images.pluto.tv/channels/5f7790b3ed0c88000720b241/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f7790b3ed0c88000720b241/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(35,'Comedy Central Animation','5f99e24636d67d0007a94e6d','https://images.pluto.tv/channels/5f99e24636d67d0007a94e6d/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f99e24636d67d0007a94e6d/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(36,'Minecraft TV','5812b821249444e05d09cc4c','https://images.pluto.tv/channels/5812b821249444e05d09cc4c/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5812b821249444e05d09cc4c/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5812b821249444e05d09cc4c&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=815&terminate=false&userId='),(37,'Pluto TV Gamer','5ca7f16c37b88b2694731c79','https://images.pluto.tv/channels/5ca7f16c37b88b2694731c79/colorLogoPNG-1667318274182.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5ca7f16c37b88b2694731c79/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(38,'Live Music Replay','5873fc21cad696fb37aa9054','https://images.pluto.tv/channels/5873fc21cad696fb37aa9054/colorLogoPNG.png','http://stitcher.pluto.tv/stitch/hls/channel/5873fc21cad696fb37aa9054/master.m3u8?appVersion=5.2.7&deviceDNT=web&deviceId=web24163643069&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=1&serverSideAds=false&sid=web24157571521'),(39,'Vevo Pop','5d93b635b43dd1a399b39eee','https://images.pluto.tv/channels/5d93b635b43dd1a399b39eee/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5d93b635b43dd1a399b39eee/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5d93b635b43dd1a399b39eee&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=890&terminate=false&userId='),(40,'Vevo R&B','5da0d83f66c9700009b96d0e','https://images.pluto.tv/channels/5da0d83f66c9700009b96d0e/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5da0d83f66c9700009b96d0e/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(41,'Vevo Reggaeton & Trap','5f32f397795b750007706448','https://images.pluto.tv/channels/5f32f397795b750007706448/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f32f397795b750007706448/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(42,'Vevo Country','5da0d75e84830900098a1ea0','https://images.pluto.tv/channels/5da0d75e84830900098a1ea0/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5da0d75e84830900098a1ea0/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(43,'Vevo ‘70s','5f32f26bcd8aea00071240e5','https://images.pluto.tv/channels/5f32f26bcd8aea00071240e5/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f32f26bcd8aea00071240e5/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(44,'Vevo \'80s','5fd7b8bf927e090007685853','https://images.pluto.tv/channels/5fd7b8bf927e090007685853/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5fd7b8bf927e090007685853/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(45,'Vevo \'90s','5fd7bb1f86d94a000796e2c2','https://images.pluto.tv/channels/5fd7bb1f86d94a000796e2c2/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5fd7bb1f86d94a000796e2c2/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS'),(46,'Vevo 2K','5fd7bca3e0a4ee0007a38e8c','https://images.pluto.tv/channels/5fd7bca3e0a4ee0007a38e8c/colorLogoPNG.png','https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5fd7bca3e0a4ee0007a38e8c/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS');
/*!40000 ALTER TABLE `Live` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Movies`
--

DROP TABLE IF EXISTS `Movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) DEFAULT NULL,
  `Genre` varchar(100) DEFAULT NULL,
  `Thumbnail` varchar(250) DEFAULT NULL,
  `Video` varchar(750) DEFAULT NULL,
  `Desc` varchar(250) DEFAULT NULL,
  `Rating` decimal(4,1) DEFAULT NULL,
  `URL` varchar(50) DEFAULT NULL,
  `Trailer` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `URL_UNIQUE` (`URL`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Movies`
--

LOCK TABLES `Movies` WRITE;
/*!40000 ALTER TABLE `Movies` DISABLE KEYS */;
INSERT INTO `Movies` VALUES (2,'X','Horror, Thriller','https://m.media-amazon.com/images/M/MV5BMTJiMmE5YWItOWZjYS00YTg0LWE0MTYtMzg2ZTY4YjNkNDEzXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_Ratio0.8108_AL_.jpg','coemediatime/Movies/x-trailer-1-stereo_h480p.mov','2022 Mia Goth, Jenna Ortega',7.0,'ODIxOTc0','...');
/*!40000 ALTER TABLE `Movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Shows`
--

DROP TABLE IF EXISTS `Shows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Shows` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) DEFAULT NULL,
  `Genre` varchar(100) DEFAULT NULL,
  `Thumbnail` varchar(250) DEFAULT NULL,
  `Desc` varchar(250) DEFAULT NULL,
  `Rating` decimal(4,1) DEFAULT NULL,
  `URL` varchar(50) DEFAULT NULL,
  `Trailer` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `URL_UNIQUE` (`URL`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Shows`
--

LOCK TABLES `Shows` WRITE;
/*!40000 ALTER TABLE `Shows` DISABLE KEYS */;
/*!40000 ALTER TABLE `Shows` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-09 22:44:56
