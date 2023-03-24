CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Bounty.SelectBy.is_active`()
BEGIN
-- bug bounties are deactivated by setting is_active = 0
-- select active bug bounties by != 0
SELECT * FROM `bug_bounty` WHERE `is_active` != 0;
END