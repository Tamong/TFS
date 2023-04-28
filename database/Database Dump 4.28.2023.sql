CREATE DATABASE  IF NOT EXISTS `tfscoin` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tfscoin`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: tfs-database.czqjvutqwptp.us-east-2.rds.amazonaws.com    Database: tfscoin
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `bug_bounty`
--

DROP TABLE IF EXISTS `bug_bounty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bug_bounty` (
  `bounty_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(70) DEFAULT 'untitled',
  `description` varchar(500) DEFAULT 'NA',
  `coin_reward` double NOT NULL DEFAULT '0',
  `is_active` int DEFAULT '1',
  PRIMARY KEY (`bounty_id`),
  UNIQUE KEY `bounty_id_UNIQUE` (`bounty_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bug_bounty`
--

LOCK TABLES `bug_bounty` WRITE;
/*!40000 ALTER TABLE `bug_bounty` DISABLE KEYS */;
INSERT INTO `bug_bounty` VALUES (1,'testTitle','testDescription',20,1);
/*!40000 ALTER TABLE `bug_bounty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bug_report`
--

DROP TABLE IF EXISTS `bug_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bug_report` (
  `report_id` int NOT NULL AUTO_INCREMENT,
  `ee_ID` int NOT NULL,
  `time_reported` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(100) DEFAULT 'untitled',
  `bug_description` varchar(650) DEFAULT 'NA',
  `coin_rewarded` double DEFAULT '0',
  `processor_ee_ID` int DEFAULT NULL,
  `time_processed` datetime DEFAULT NULL,
  `processor_msg` varchar(650) DEFAULT NULL,
  PRIMARY KEY (`report_id`),
  UNIQUE KEY `report_id_UNIQUE` (`report_id`),
  KEY `ee_ID_idx` (`ee_ID`),
  KEY `processor_ee_ID_FK` (`processor_ee_ID`),
  CONSTRAINT `ee_ID_reportFK` FOREIGN KEY (`ee_ID`) REFERENCES `employee` (`ee_ID`),
  CONSTRAINT `processor_ee_ID_FK` FOREIGN KEY (`processor_ee_ID`) REFERENCES `employee` (`ee_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bug_report`
--

LOCK TABLES `bug_report` WRITE;
/*!40000 ALTER TABLE `bug_report` DISABLE KEYS */;
INSERT INTO `bug_report` VALUES (5,7,'2023-04-20 20:51:25','Bounty Test','testing description 1',0,1,NULL,'eee'),(6,7,'2023-04-20 20:51:35','Bounty Test 2','testing dddd 2',0,1,NULL,'eee'),(7,22,'2023-04-20 22:23:37','Test 1','Desc 1',0,NULL,NULL,NULL),(8,27,'2023-04-21 20:04:03','hello testing','hihihihihihihihihihihihihi',0,NULL,NULL,NULL),(9,22,'2023-04-24 16:11:40','hello','1',0,NULL,NULL,NULL),(10,22,'2023-04-24 16:12:38','hello','1',0,NULL,NULL,NULL),(11,22,'2023-04-24 16:13:13','hello','1',0,NULL,NULL,NULL),(12,22,'2023-04-24 16:13:18','hello','1',0,NULL,NULL,NULL),(13,22,'2023-04-24 16:13:27','hello','1',0,NULL,NULL,NULL),(14,22,'2023-04-24 16:15:32','hello','1',0,NULL,NULL,NULL),(15,22,'2023-04-24 16:16:08','e3e','222',0,NULL,NULL,NULL),(16,22,'2023-04-24 16:16:22','e3e','222',0,NULL,NULL,NULL),(17,22,'2023-04-24 16:16:41','e3e','222',0,NULL,NULL,NULL),(18,22,'2023-04-24 16:16:54','e3e','222',0,NULL,NULL,NULL),(19,22,'2023-04-24 16:17:07','e3e','222',0,NULL,NULL,NULL),(20,22,'2023-04-24 16:17:26','e3e','222',0,NULL,NULL,NULL),(21,22,'2023-04-24 16:17:41','e3e','222',0,NULL,NULL,NULL),(22,22,'2023-04-24 16:17:55','e3e','222',0,NULL,NULL,NULL),(23,22,'2023-04-24 16:18:06','e3e','222',0,NULL,NULL,NULL),(24,22,'2023-04-24 16:18:11','e3e','222',0,NULL,NULL,NULL),(25,22,'2023-04-24 16:19:12','e3e','222',0,NULL,NULL,NULL),(26,22,'2023-04-24 16:19:20','e3e','222',0,NULL,NULL,NULL),(27,22,'2023-04-24 16:19:36','e3e','222',0,NULL,NULL,NULL),(28,22,'2023-04-24 16:19:46','e3e','222',0,NULL,NULL,NULL),(29,22,'2023-04-24 16:20:32','e3e','222',0,NULL,NULL,NULL),(30,22,'2023-04-24 16:20:58','e3e','222',0,NULL,NULL,NULL),(31,22,'2023-04-24 16:23:00','eee','eee2',0,NULL,NULL,NULL),(32,22,'2023-04-24 16:23:40','eee','eee2',0,NULL,NULL,NULL),(33,22,'2023-04-24 16:25:04','eee','eee2',0,NULL,NULL,NULL),(34,22,'2023-04-24 16:25:10','eee','eee2',0,NULL,NULL,NULL),(35,22,'2023-04-24 16:25:20','eee','eee2',0,NULL,NULL,NULL),(36,22,'2023-04-24 16:27:46','3eee','eee',0,NULL,NULL,NULL),(37,22,'2023-04-24 16:29:53','eee','eee',0,NULL,NULL,NULL),(38,22,'2023-04-24 16:36:08','eee','eee',0,NULL,NULL,NULL),(39,22,'2023-04-24 16:36:41','eee','eee',0,NULL,NULL,NULL),(40,22,'2023-04-24 16:36:58','eee','eee',0,NULL,NULL,NULL),(41,22,'2023-04-24 16:37:29','eee','eee',0,NULL,NULL,NULL),(42,22,'2023-04-24 16:37:45','eee','eee',0,NULL,NULL,NULL),(43,22,'2023-04-24 16:37:55','eee','eee',0,NULL,NULL,NULL),(44,22,'2023-04-24 16:39:04','eee','eee',44,4,'2023-04-28 02:25:11','remove 44?'),(45,22,'2023-04-24 16:40:53','eee','eee',1,4,'2023-04-28 02:24:22','EEEEEEE'),(46,22,'2023-04-24 17:06:16','eerwer','werwe',25,4,'2023-04-25 04:47:07','how did you do this!!'),(47,22,'2023-04-24 17:25:13','eeeeee','eee',12,4,'2023-04-28 02:23:06','ildaldaskod koasd '),(48,22,'2023-04-24 18:13:20','hello1111','test1111',0,1,NULL,'hello'),(49,22,'2023-04-25 02:33:05','New Bounty?','Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. ',100,4,'2023-04-25 04:43:27','Amazing job, this is very cool. Keep up the good work!'),(50,22,'2023-04-25 02:35:22','New Bounty?','Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. ',1,4,'2023-04-25 04:42:14','1ee'),(51,22,'2023-04-25 02:35:25','New Bounty?2222','Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this is me testing a long text .. Hello this',12,1,NULL,'You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good! You are right, good!');
/*!40000 ALTER TABLE `bug_report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `ee_ID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(70) NOT NULL,
  `is_admin` int DEFAULT '0',
  `wallet_address` varchar(70) NOT NULL,
  `private_key` varchar(300) NOT NULL,
  `checkin_counter` int DEFAULT '0',
  `checkin_date` date DEFAULT NULL,
  PRIMARY KEY (`ee_ID`),
  UNIQUE KEY `ee_ID_UNIQUE` (`ee_ID`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'johnsmith','mypassword',0,'0x123abc','0x2',2,'2023-04-22'),(2,'jdoe123','P@ssw0rd',0,'0xabc123','0x0',7,'2023-04-21'),(3,'asmith456','Qwerty123',0,'0xdef456','0x9',2,'2023-04-21'),(4,'bwilliams','Password123',1,'0xghi789','0x7',1,'2023-04-21'),(5,'mjones','Secret123',0,'0xjkl012','0x6',2,'2023-04-21'),(6,'lparker','MyPa$$word',0,'0xmno345','0x9',1,'2023-04-21'),(7,'rsmith','12345678',0,'0xpqr678','0x8',1,'2023-04-20'),(8,'jjackson','Abcd1234',0,'0xstu901','0x6',0,'2023-03-09'),(9,'tmiller','Password1',1,'0xvwx234','0xa',0,'2023-03-09'),(10,'jbrown','MyPassword1',0,'0xyz567','0x5',0,'2023-03-09'),(11,'sbaker','P@ssword1',0,'0xabc890','0xe',0,'2023-03-09'),(12,'dmartinez','Qwerty1234',0,'0xdef123','0x8',0,'2023-03-09'),(13,'mlee','Abcdefg1',0,'0xghi456','0x8',0,'2023-03-09'),(14,'jgarcia','Password1234',0,'0xjkl789','0x5',0,'2023-03-09'),(15,'ahernandez','Secret1234',1,'0xmno012','0x0',0,'2023-03-09'),(16,'jgonzalez','MyPa$$word1',0,'0xpqr345','0x4',0,'2023-03-09'),(17,'abrown','123456789',0,'0xstu678','0x3',0,'2023-03-09'),(18,'srivera','Abcd12345',0,'0xvwx901','0x8',0,'2023-03-09'),(19,'jramirez','Password12345',0,'0xyz234','0x8',0,'2023-03-09'),(20,'kflores','MyPassword123',0,'0xabc567','0x2',0,'2023-03-09'),(21,'dogbey','password1',0,'0x29Bdc8A1aA8DCAeE884Fd504e08a0b13760cE6b0','0x8',4,'2023-04-22'),(22,'pwallis','password2',0,'0xD52C128186A4028B8fa3E68a5adEa2E274072529','bf62f5510a3893a9d9a17dc210faf56fae43000d33bd50b09a1db81e016f4fc1',34,'2023-04-28'),(23,'bquigley1','password3',1,'0x245cd60167BC2dD40dce94Ac7e08de15b3c3D6aE','0x27c69799d2e30215e43eec92bffc20e58137b2c3431e87310d4309ed690c72f0',2,'2023-04-28'),(24,'bquigley2','password5',0,'0xb5fee1AB82dAdEa48e16Dc9C220A2dB144bb3834','0x41be125881b5bb0488fd421faf333344800ffc81b4a47c87409c3c400f34153f',1,'2023-04-21'),(25,'testuser1','testpass1',0,'0x6501C31929Be7230aE4fd45a189F3cf4Fb944308','0xcd3babc859ab401ba73780df4358145f28da859efb6b1bd44b83cbb3d82f68d7',1,'2023-04-21'),(26,'jake','passpass',0,'0x540D7FdC4A96dB7754C3926D39e44bc5DC19239A','0xaaff4ff2cc23900db28f4d5cac7b3ec471cdb42f54f3f64b994403ca5084a134',2,'2023-04-27'),(27,'paul','passpass',0,'0x9f71F972fe6971303F4011dCa72345621fdb425F','0x108cfcf4eb6d770f57458b8c0476a8bdd8140030513791c6016ac32fcc454198',2,'2023-04-27'),(28,'philip2','password2',0,'0xD647152cd78B9B2e1410E6a5841B9aE9F4253187','0xaece37ccbea23250124f0c4c2157b3996014d6a417f8cc04e549e875a92d6a89',0,NULL);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reward`
--

DROP TABLE IF EXISTS `reward`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reward` (
  `reward_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(70) DEFAULT 'untitled',
  `coin_price` double DEFAULT '0',
  `inventory` int NOT NULL DEFAULT '0',
  `img_url` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`reward_id`),
  UNIQUE KEY `reward_id_UNIQUE` (`reward_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reward`
--

LOCK TABLES `reward` WRITE;
/*!40000 ALTER TABLE `reward` DISABLE KEYS */;
INSERT INTO `reward` VALUES (1,'Very Cool TRD Hat',14.3,25,'https://s7d4.scene7.com/is/image/BIworldwide/TA024400?$GRMProductDetail$&fmt=png'),(2,'Amazing Toyota T-Shirt',20,0,'https://s7d4.scene7.com/is/image/BIworldwide/TO06179?$GRMProductDetail$&fmt=png'),(3,'Huge TRD Bag',30,125,'https://s7d4.scene7.com/is/image/BIworldwide/TA023600?$GRMProductDetail$&fmt=png'),(4,'Reward 4',40,0,NULL),(5,'Reward 5',50,0,NULL),(6,'Reward 6',60,0,NULL),(7,'Reward 7',70,0,NULL),(8,'Reward 8',80,0,NULL),(9,'Reward 9',90,0,NULL);
/*!40000 ALTER TABLE `reward` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reward_desc`
--

DROP TABLE IF EXISTS `reward_desc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reward_desc` (
  `desc_id` int NOT NULL AUTO_INCREMENT,
  `reward_id` int NOT NULL,
  `desc_type` varchar(45) DEFAULT 'NA',
  `desc_value` varchar(45) DEFAULT 'NA',
  PRIMARY KEY (`desc_id`),
  UNIQUE KEY `desc_id_UNIQUE` (`desc_id`),
  KEY `reward_id_idx` (`reward_id`),
  CONSTRAINT `reward_id` FOREIGN KEY (`reward_id`) REFERENCES `reward` (`reward_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reward_desc`
--

LOCK TABLES `reward_desc` WRITE;
/*!40000 ALTER TABLE `reward_desc` DISABLE KEYS */;
INSERT INTO `reward_desc` VALUES (1,1,'color','red'),(2,1,'color','blue'),(3,1,'size','medium'),(4,1,'size','large'),(5,2,'color','green'),(6,2,'color','purple'),(7,2,'size','small'),(8,2,'size','medium'),(9,3,'color','blue'),(10,3,'color','yellow'),(11,3,'size','medium'),(12,3,'size','large'),(13,1,'color','green'),(14,1,'size','small'),(15,1,'size','xlarge'),(17,1,'size','xxlarge');
/*!40000 ALTER TABLE `reward_desc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reward_order`
--

DROP TABLE IF EXISTS `reward_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reward_order` (
  `ro_id` int NOT NULL AUTO_INCREMENT,
  `txn_hash` varchar(70) DEFAULT '0',
  `ee_ID` int NOT NULL,
  `reward_id` int NOT NULL,
  `desc_idA` int DEFAULT NULL,
  `desc_idB` int DEFAULT NULL,
  PRIMARY KEY (`ro_id`),
  UNIQUE KEY `txn_hash_UNIQUE` (`txn_hash`),
  KEY `ee_ID_idx` (`ee_ID`),
  KEY `desc_id_idx` (`reward_id`),
  CONSTRAINT `desc_id` FOREIGN KEY (`reward_id`) REFERENCES `reward_desc` (`desc_id`),
  CONSTRAINT `ee_ID` FOREIGN KEY (`ee_ID`) REFERENCES `employee` (`ee_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reward_order`
--

LOCK TABLES `reward_order` WRITE;
/*!40000 ALTER TABLE `reward_order` DISABLE KEYS */;
INSERT INTO `reward_order` VALUES (1,'0x123456789abcdef',1,1,NULL,NULL);
/*!40000 ALTER TABLE `reward_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'tfscoin'
--
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Bug_Bounty.DeleteBy.bounty_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Bounty.DeleteBy.bounty_id`(
IN p_bounty_id INT
)
BEGIN
DELETE FROM `bug_bounty` WHERE `bounty_id` = p_bounty_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Bug_bounty.Insert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_bounty.Insert`(
	IN p_title VARCHAR(70),
    IN p_description VARCHAR(500),
    IN p_coin_reward DOUBLE,
    IN p_is_active INT
)
BEGIN
INSERT INTO `bug_bounty` (
        `title`,
        `description`,
        `coin_reward`,
        `is_active`) 
	VALUES(
        p_title,
        p_description,
        p_coin_reward,
        p_is_active);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Bug_Bounty.SelectBy.bounty_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Bounty.SelectBy.bounty_id`(
IN p_bounty_id INT
)
BEGIN
SELECT * FROM `bug_bounty` WHERE `bounty_id` = p_bounty_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Bug_Bounty.SelectBy.is_active` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Bounty.SelectBy.is_active`()
BEGIN
-- bug bounties are deactivated by setting is_active = 0
-- select active bug bounties by != 0
SELECT * FROM `bug_bounty` WHERE `is_active` != 0;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Bug_Bounty.UpdateBy.bounty_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Bounty.UpdateBy.bounty_id`(
	IN p_bounty_id INT,
    IN p_title VARCHAR(70),
    IN p_description VARCHAR(500),
    IN p_coin_reward DOUBLE,
    IN p_is_active INT
    )
BEGIN
	UPDATE `bug_bounty`
    SET 
        `title` = p_title,
        `description` = p_description,
        `coin_reward` = p_coin_reward,
        `is_active` = p_is_active
    WHERE 
        `bounty_id` = p_bounty_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Bug_Report.DeleteBy.report_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.DeleteBy.report_id`(
IN p_report_id INT
)
BEGIN
	DELETE FROM bug_report WHERE report_id = p_report_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Bug_Report.Insert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.Insert`(
  IN p_ee_id INT,
  IN p_title VARCHAR(100),
  IN p_bug_description VARCHAR(650)
)
BEGIN
  INSERT INTO bug_report (ee_ID, title, bug_description)
  VALUES (p_ee_id, p_title, p_bug_description);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Bug_Report.SelectAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.SelectAll`(
)
BEGIN
  SELECT b.report_id, b.ee_id, b.title, b.bug_description, b.coin_rewarded, b.processor_ee_id, b.processor_msg
  FROM bug_report b;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Bug_Report.SelectBy.bounty_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.SelectBy.bounty_id`(
IN p_bounty_id INT
)
BEGIN -- Filter Bug Reports by thier associated bounty_id
SELECT *
FROM `Bug_report` 
WHERE bounty_id = p_bounty_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Bug_Report.SelectBy.ee_ID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.SelectBy.ee_ID`(
IN p_ee_ID INT
)
BEGIN -- Filter Bug Reports by thier associated ee_ID (employee_ID)
SELECT *
FROM `Bug_report` 
WHERE ee_ID = p_ee_ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Bug_Report.SelectBy.is_active` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.SelectBy.is_active`()
BEGIN 
SELECT *
FROM `Bug_report` 
WHERE `is_active` != 0;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Bug_Report.SelectBy.report_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.SelectBy.report_id`(
IN p_report_id INT
)
BEGIN
	SELECT *
	FROM `bug_report`
	WHERE `report_id` = p_report_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Bug_Report.UpdateBy.report_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.UpdateBy.report_id`(
	IN p_report_id INT,
    IN p_processor_ee_id INT,
    IN p_reward_amount INT,
    IN p_notes TEXT
)
BEGIN
    UPDATE tfscoin.bug_report
    SET coin_rewarded = p_reward_amount,
        processor_ee_ID = p_processor_ee_id,
        time_processed = NOW(),
        processor_msg = p_notes
    WHERE report_id = p_report_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Check_In.SelectBy.ee_ID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Check_In.SelectBy.ee_ID`(
  IN p_ee_ID INT
)
BEGIN
  SELECT e.checkin_counter
  FROM employee e
  WHERE e.ee_ID = p_ee_ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Check_In.UpdateBy.ee_ID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Check_In.UpdateBy.ee_ID`(
    IN p_ee_ID INT
)
BEGIN
    DECLARE previous_checkin DATE;
    DECLARE today_date DATE;
    
    SELECT checkin_date INTO previous_checkin FROM employee WHERE ee_ID = p_ee_ID;
	SET today_date = DATE(NOW());
    
    IF previous_checkin IS NULL OR DATE(previous_checkin) < today_date THEN
        UPDATE employee 
        SET checkin_counter = checkin_counter + 1, 
        checkin_date = today_date WHERE ee_ID = p_ee_ID;
        SELECT CONCAT(checkin_counter) 
        AS message FROM employee WHERE ee_ID = p_ee_ID;
    ELSE
        SELECT CONCAT('Check-in failed') 
        AS message FROM employee WHERE ee_ID = p_ee_ID;
   END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Employee.DeleteBy.ee_ID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.DeleteBy.ee_ID`(
    IN emp_ID INT
)
BEGIN
    DELETE FROM employee
    WHERE ee_ID = emp_ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Employee.Insert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.Insert`(
  IN p_username VARCHAR(45),
  IN p_password VARCHAR(70),
  IN p_wallet_address VARCHAR(70),
  IN p_private_key VARCHAR(300)
)
BEGIN
  INSERT INTO `employee` (`username`, `password`, `wallet_address`, `private_key`)
  VALUES (p_username, p_password, p_wallet_address, p_private_key);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Employee.SelectBy.ee_ID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.SelectBy.ee_ID`(
	IN emp_ID INT
)
BEGIN
    SELECT e.ee_ID, e.username, e.is_admin, e.wallet_address 
	FROM employee e
    WHERE e.ee_ID = emp_ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Employee.SelectBy.TransferVerify` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.SelectBy.TransferVerify`(
  IN p_from_username varchar(45),
  IN p_to_username varchar(45)
)
BEGIN
  SELECT e.username
  FROM employee e
  WHERE e.username = p_from_username OR e.username = p_to_username;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Employee.SelectBy.username` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.SelectBy.username`(
IN uname varchar(45)
)
BEGIN
	SELECT e.ee_ID, e.username, e.is_admin, e.wallet_address, e.private_key 
    FROM employee e
    WHERE e.username = uname;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Employee.SelectBy.userpass` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.SelectBy.userpass`(
  IN p_username VARCHAR(45),
  IN p_password VARCHAR(70)
)
BEGIN
  SELECT `ee_ID`, `username`, `is_admin`, `wallet_address`
  FROM `employee`
  WHERE `username` = p_username AND `password` = p_password;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Employee.UpdateBy.ee_ID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.UpdateBy.ee_ID`(
    IN emp_ID INT,
    IN emp_username VARCHAR(45),
    IN emp_password VARCHAR(70),
    IN emp_is_admin INT,
    IN emp_wallet_address VARCHAR(70),
    IN emp_private_key VARCHAR(300),
    IN emp_checkin_counter INT,
    IN emp_checkin_date DATE
)
BEGIN
    UPDATE employee
    SET username = emp_username,
        password = emp_password,
        is_admin = emp_is_admin,
        wallet_address = emp_wallet_address,
        private_key = emp_private_key,
        checkin_counter = emp_checkin_counter,
        checkin_date = emp_checkin_date
    WHERE ee_ID = emp_ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward.DeleteBy.reward_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward.DeleteBy.reward_id`(
  IN p_reward_id INT
)
BEGIN
  DELETE FROM `reward`
  WHERE `reward_id` = p_reward_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward.Insert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward.Insert`(
    IN p_title VARCHAR(70),
    IN p_coin_price DOUBLE,
    IN p_inventory INT,
    IN p_img_url varchar(255)
)
BEGIN
    INSERT INTO reward (title, coin_price, inventory, img_url)
    VALUES (p_title, p_coin_price, p_inventory, p_img_url);
    
    SELECT reward_id, title, coin_price, inventory, img_url FROM reward WHERE reward_id = LAST_INSERT_ID();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward.Select` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward.Select`()
BEGIN
SELECT `reward`.`reward_id`,
    `reward`.`title`,
    `reward`.`coin_price`
FROM `tfscoin`.`reward`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward.SelectAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward.SelectAll`(
)
BEGIN
  SELECT reward_id, title, coin_price, inventory, img_url
  FROM reward;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward.SelectBy.reward_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward.SelectBy.reward_id`(
  IN p_reward_id INT
)
BEGIN
  SELECT `reward_id`, `title`, `coin_price`, `inventory`
  FROM `reward`
  WHERE `reward_id` = p_reward_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward.UpdateBy.reward_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward.UpdateBy.reward_id`(
  IN p_reward_id INT,
  IN p_title VARCHAR(70),
  IN p_coin_price DOUBLE
)
BEGIN
  UPDATE `reward`
  SET `title` = p_title,
      `coin_price` = p_coin_price
  WHERE `reward_id` = p_reward_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward_desc.DeleteBy.desc_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.DeleteBy.desc_id`(
    IN p_desc_id INT
)
BEGIN
    DELETE FROM reward_desc
    WHERE desc_id = p_desc_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward_desc.DeleteBy.reward_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.DeleteBy.reward_id`(
    IN p_reward_id INT
)
BEGIN
    DELETE FROM reward_desc
    WHERE reward_id = p_reward_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward_desc.Insert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.Insert`(
    IN p_reward_id INT,
    IN p_desc_type VARCHAR(45),
    IN p_desc_value VARCHAR(45)
)
BEGIN
    -- Check if the reward exists for this description
    IF EXISTS (SELECT 1 FROM `reward` WHERE `reward_id` = p_reward_id) THEN
        -- Insert the new description into the reward_desc table
        INSERT INTO `reward_desc` (`reward_id`, `desc_type`, `desc_value`) 
        VALUES (p_reward_id, p_desc_type, p_desc_value);
    ELSE
        -- Raise an error if the reward_id is invalid
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid reward_id';
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward_desc.SelectBy.desc_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.SelectBy.desc_id`(
    IN p_desc_id INT
)
BEGIN
    SELECT *
    FROM reward_desc
    WHERE desc_id = p_desc_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward_desc.SelectBy.reward_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.SelectBy.reward_id`(
    IN p_reward_id INT
)
BEGIN
    SELECT desc_id, desc_type, desc_value
    FROM reward_desc
    WHERE reward_id = p_reward_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward_desc.SelectBy.reward_id_desc_type` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.SelectBy.reward_id_desc_type`(
IN rewardID int,
IN descType varchar(45)
)
BEGIN
SELECT desc_id
FROM reward_desc
WHERE reward_id = rewardID 
AND desc_type = descType;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward_desc.SelectDistinctTypesBy.reward_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.SelectDistinctTypesBy.reward_id`(
IN rewardId INT
)
BEGIN
	SELECT DISTINCT desc_type
    FROM reward_desc
    WHERE reward_desc.reward_id = rewardId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward_desc.UpdateBy.desc_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.UpdateBy.desc_id`(
    IN p_desc_id INT,
    IN p_desc_type VARCHAR(45),
    IN p_desc_value VARCHAR(45),
    IN p_inventory INT
)
BEGIN
    UPDATE reward_desc
    SET desc_type = p_desc_type,
        desc_value = p_desc_value,
        inventory = p_inventory
    WHERE desc_id = p_desc_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward_desc.UpdateBy.reward_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.UpdateBy.reward_id`(
    IN p_reward_id INT,
    IN p_desc_type VARCHAR(45),
    IN p_desc_value VARCHAR(45),
    IN p_inventory INT
)
BEGIN
    UPDATE reward_desc
    SET desc_type = p_desc_type,
        desc_value = p_desc_value,
        inventory = p_inventory
    WHERE reward_id = p_reward_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward_order.DeleteBy.txn_hash` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_order.DeleteBy.txn_hash`(
    IN p_txn_hash VARCHAR(70)
)
BEGIN
    DELETE FROM reward_order WHERE txn_hash = p_txn_hash;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward_order.Insert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_order.Insert`(
IN eeID INT,
IN txnHASH VARCHAR(70),
IN rewardID INT,
IN descIDA INT,
IN descIDB INT
)
BEGIN
INSERT INTO `reward_order`(
`ee_ID`, `txn_hash`, `reward_id`, `desc_idA`, `desc_idB`)
VALUES(
eeID, txnHASH, rewardID, descIDA, descIDB);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward_order.SelectBy.ee_ID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_order.SelectBy.ee_ID`(
    IN p_ee_ID INT
)
BEGIN
    SELECT * FROM reward_order WHERE ee_ID = p_ee_ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward_order.SelectBy.txn_hash` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_order.SelectBy.txn_hash`(
    IN p_txn_hash VARCHAR(70)
)
BEGIN
    SELECT * FROM reward_order WHERE txn_hash = p_txn_hash;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tfscoin.Reward_order.UpdateBy.txn_hash` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_order.UpdateBy.txn_hash`(
    IN p_txn_hash VARCHAR(70),
    IN p_ee_ID INT,
    IN p_desc_id INT
)
BEGIN
    UPDATE reward_order SET ee_ID = p_ee_ID, desc_id = p_desc_id WHERE txn_hash = p_txn_hash;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-28  8:52:43
