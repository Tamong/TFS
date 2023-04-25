CREATE DATABASE `tfscoin` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

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

CREATE TABLE `reward` (
  `reward_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(70) DEFAULT 'untitled',
  `coin_price` double DEFAULT '0',
  `inventory` int NOT NULL DEFAULT '0',
  `img_url` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`reward_id`),
  UNIQUE KEY `reward_id_UNIQUE` (`reward_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `reward_desc` (
  `desc_id` int NOT NULL AUTO_INCREMENT,
  `reward_id` int NOT NULL,
  `desc_type` varchar(45) DEFAULT 'NA',
  `desc_value` varchar(45) DEFAULT 'NA',
  PRIMARY KEY (`desc_id`),
  UNIQUE KEY `desc_id_UNIQUE` (`desc_id`),
  KEY `reward_id_idx` (`reward_id`),
  CONSTRAINT `reward_id` FOREIGN KEY (`reward_id`) REFERENCES `reward` (`reward_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `reward_order` (
  `ro_id` int NOT NULL AUTO_INCREMENT,
  `txn_hash` varchar(70) DEFAULT '0',
  `ee_ID` int NOT NULL,
  `desc_id` int NOT NULL,
  `desc_idA` int DEFAULT NULL,
  `desc_idB` int DEFAULT NULL,
  PRIMARY KEY (`ro_id`),
  UNIQUE KEY `txn_hash_UNIQUE` (`txn_hash`),
  KEY `ee_ID_idx` (`ee_ID`),
  KEY `desc_id_idx` (`desc_id`),
  CONSTRAINT `desc_id` FOREIGN KEY (`desc_id`) REFERENCES `reward_desc` (`desc_id`),
  CONSTRAINT `ee_ID` FOREIGN KEY (`ee_ID`) REFERENCES `employee` (`ee_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



