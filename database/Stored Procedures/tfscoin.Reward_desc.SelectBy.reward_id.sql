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
