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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `bug_bounty` (
  `bounty_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(70) DEFAULT 'untitled',
  `description` varchar(500) DEFAULT 'NA',
  `coin_reward` double NOT NULL DEFAULT '0',
  `is_active` int DEFAULT '1',
  PRIMARY KEY (`bounty_id`),
  UNIQUE KEY `bounty_id_UNIQUE` (`bounty_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `bug_report` (
  `report_id` int NOT NULL AUTO_INCREMENT,
  `ee_ID` int NOT NULL,
  `bounty_id` int NOT NULL,
  `is_active` int NOT NULL DEFAULT '1',
  `time_reported` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`report_id`),
  UNIQUE KEY `report_id_UNIQUE` (`report_id`),
  KEY `ee_ID_idx` (`ee_ID`),
  KEY `bounty_id_idx` (`bounty_id`),
  CONSTRAINT `bounty_id` FOREIGN KEY (`bounty_id`) REFERENCES `bug_bounty` (`bounty_id`),
  CONSTRAINT `ee_ID_reportFK` FOREIGN KEY (`ee_ID`) REFERENCES `employee` (`ee_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `reward` (
  `reward_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(70) DEFAULT 'untitled',
  `coin_price` double DEFAULT '0',
  PRIMARY KEY (`reward_id`),
  UNIQUE KEY `reward_id_UNIQUE` (`reward_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `reward_desc` (
  `desc_id` int NOT NULL AUTO_INCREMENT,
  `reward_id` int NOT NULL,
  `desc_type` varchar(45) DEFAULT 'NA',
  `desc_value` varchar(45) DEFAULT 'NA',
  `inventory` int DEFAULT '0',
  PRIMARY KEY (`desc_id`),
  UNIQUE KEY `desc_id_UNIQUE` (`desc_id`),
  KEY `reward_id_idx` (`reward_id`),
  CONSTRAINT `reward_id` FOREIGN KEY (`reward_id`) REFERENCES `reward` (`reward_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `reward_order` (
  `txn_hash` varchar(70) NOT NULL,
  `ee_ID` int NOT NULL,
  `desc_id` int NOT NULL,
  PRIMARY KEY (`txn_hash`),
  UNIQUE KEY `txn_hash_UNIQUE` (`txn_hash`),
  KEY `ee_ID_idx` (`ee_ID`),
  KEY `desc_id_idx` (`desc_id`),
  CONSTRAINT `desc_id` FOREIGN KEY (`desc_id`) REFERENCES `reward_desc` (`desc_id`),
  CONSTRAINT `ee_ID` FOREIGN KEY (`ee_ID`) REFERENCES `employee` (`ee_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



