Data Model - ER Diagram

![alt text](https://github.com/bquigley1/TFS/blob/database_update/database/DB_ERD_DataModel.png)


Reward's Database - Example Tables

![alt text](https://github.com/bquigley1/TFS/blob/database_update/database/Rewards%20Database%20Example%20Tables.PNG)


Reward's Database - Stored Procedures 

-- Select all distinct description types for a specified reward
-- Use case: the front-end needs to create 1 drop down menu for each desc_type
-- eg. T-Shirts may need 1 drop down menu for each desc_type: Size, Color, Material
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.SelectDistinctTypesBy.reward_id`(
IN rewardId INT
)
BEGIN
SELECT DISTINCT desc_type
FROM reward_desc
WHERE reward_desc.reward_id = rewardId;
END


-- Select all desc_id for a specific desc_type, under a given reward
-- Use case: the frond-end needs to populate the drop down menus with correct desc_id
-- eg. For T-Shirts, the Size menu needs to be populated with Large, Medium, Small…
-- Note: desc_type is varchar(45) eg. ‘Color’, ‘Size’ 
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.SelectBy.reward_id_desc_type`(
IN rewardID int,
IN descType varchar(45)
)
BEGIN
SELECT desc_id
FROM reward_desc
WHERE reward_id = rewardID 
AND desc_type = descType;
END

-- Insert a new reward_order: the database keeps track of all employee’s orders
-- Use case: The user has selected the desired desc_ids from the drop down menus
-- eg. The user has selected the desc_ids for a Red, Medium, Dri-Fit for Toyota Shirt 
-- Note: desc_idA/ desc_idB are for rewards with multiple descriptions
CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_order.Insert`(
IN eeID INT,
IN txnHASH VARCHAR(70),
IN descID INT,
IN descIDA INT,
IN descIDB INT
)
BEGIN
INSERT INTO `reward_order`(
`ee_ID`, `txn_hash`, `desc_id`, `desc_idA`, `desc_idB`)
VALUES(
eeID, txnHASH, descID, descIDA, descIDB);
END
