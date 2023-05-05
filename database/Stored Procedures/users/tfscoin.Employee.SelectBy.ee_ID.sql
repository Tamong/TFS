CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.SelectBy.ee_ID`(
	IN emp_ID INT
)
BEGIN
    SELECT e.ee_ID, e.username, e.is_admin, e.wallet_address 
	FROM employee e
    WHERE e.ee_ID = emp_ID;
END