CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Bounty.DeleteBy.bounty_id`(
IN p_bounty_id INT
)
BEGIN
DELETE FROM `bug_bounty` WHERE `bounty_id` = p_bounty_id;
END