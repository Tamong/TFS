CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_bounty.Insert`(
	IN p_title VARCHAR(70),
    IN p_description VARCHAR(500),
    IN p_coin_reward DOUBLE,
    IN p_is_active INT
)
BEGIN
INSERT INTO `bug_bounty` (
        `title`,
        `description`,
        `coin_reward`,
        `is_active`) 
	VALUES(
        p_title,
        p_description,
        p_coin_reward,
        p_is_active);
END