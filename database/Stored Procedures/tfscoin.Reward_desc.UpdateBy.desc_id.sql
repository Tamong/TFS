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
END