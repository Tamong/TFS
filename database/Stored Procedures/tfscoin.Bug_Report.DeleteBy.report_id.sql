CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.DeleteBy.report_id`(
IN p_report_id INT
)
BEGIN
	DELETE FROM bug_report WHERE report_id = p_report_id;
END