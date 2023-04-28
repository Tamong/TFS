CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.SelectAll`(
)
BEGIN
  SELECT b.report_id, b.ee_id, b.title, b.bug_description, b.coin_rewarded, b.processor_ee_id, b.processor_msg
  FROM bug_report b;
END