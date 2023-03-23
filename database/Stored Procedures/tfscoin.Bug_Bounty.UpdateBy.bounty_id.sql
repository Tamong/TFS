CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Bounty.UpdateBy.bounty_id`(
	IN p_bounty_id INT,
    IN p_title VARCHAR(70),
    IN p_description VARCHAR(500),
    IN p_coin_reward DOUBLE,
    IN p_is_active INT
    )
BEGIN
	UPDATE `bug_bounty`
    SET 
        `title` = p_title,
        `description` = p_description,
        `coin_reward` = p_coin_reward,
        `is_active` = p_is_active
    WHERE 
        `bounty_id` = p_bounty_id;
END