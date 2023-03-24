CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Bounty.SelectBy.bounty_id`(
IN p_bounty_id INT
)
BEGIN
SELECT * FROM `bug_bounty` WHERE `bounty_id` = p_bounty_id;
END