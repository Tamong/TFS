CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.SelectBy.report_id`(
IN p_report_id INT
)
BEGIN
	SELECT *
	FROM `bug_report`
	WHERE `report_id` = p_report_id;
END