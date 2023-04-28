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
END;
