CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.UpdateBy.report_id`(
IN p_report_id INT,
IN p_ee_ID INT,
IN p_bounty_id INT,
IN p_is_active INT,
IN p_time_reported INT
)
BEGIN
UPDATE bug_report
SET ee_ID = p_ee_ID,
bounty_id = p_bounty_id,
is_active = p_is_active,
time_reported = p_time_reported
WHERE report_id = p_report_id;
END