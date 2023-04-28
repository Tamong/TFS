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