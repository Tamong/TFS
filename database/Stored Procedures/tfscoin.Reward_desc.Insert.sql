CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.Insert`(
    IN p_reward_id INT,
    IN p_desc_type VARCHAR(45),
    IN p_desc_value VARCHAR(45),
    IN p_inventory INT)
BEGIN
	-- check if the reward exists for this description
	DECLARE v_count INT DEFAULT 0;
    SELECT COUNT(*) INTO v_count FROM `reward` WHERE `reward_id` = p_reward_id;
    IF v_count = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid reward_id';
    ELSE
        INSERT INTO `reward_desc` (`reward_id`, `desc_type`, `desc_value`, `inventory`) 
	VALUES (p_reward_id, p_desc_type, p_desc_value, p_inventory);
	END IF;
END