CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.DeleteBy.ee_ID`(
    IN emp_ID INT
)
BEGIN
    DELETE FROM employee
    WHERE ee_ID = emp_ID;
END