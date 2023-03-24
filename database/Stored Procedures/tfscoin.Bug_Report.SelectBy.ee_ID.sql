CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.SelectBy.ee_ID`(
IN p_ee_ID INT
)
BEGIN -- Filter Bug Reports by thier associated ee_ID (employee_ID)
SELECT *
FROM `Bug_report` 
WHERE ee_ID = p_ee_ID;
END