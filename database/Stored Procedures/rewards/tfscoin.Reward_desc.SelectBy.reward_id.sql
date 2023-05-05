CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.SelectBy.reward_id`(
    IN p_reward_id INT
)
BEGIN
    SELECT desc_id, desc_type, desc_value
    FROM reward_desc
    WHERE reward_id = p_reward_id;
END