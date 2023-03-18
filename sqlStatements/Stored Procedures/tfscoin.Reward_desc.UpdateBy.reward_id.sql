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
END