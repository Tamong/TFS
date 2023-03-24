CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.SelectBy.ee_ID`(
	IN emp_ID INT
)
BEGIN
    SELECT *
    FROM employee
    WHERE ee_ID = emp_ID;
END