CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.SelectBy.bounty_id`(
IN p_bounty_id INT
)
BEGIN -- Filter Bug Reports by thier associated bounty_id
SELECT *
FROM `Bug_report` 
WHERE bounty_id = p_bounty_id;
END