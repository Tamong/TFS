CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.SelectBy.is_active`()
BEGIN 
SELECT *
FROM `Bug_report` 
WHERE `is_active` != 0;
END