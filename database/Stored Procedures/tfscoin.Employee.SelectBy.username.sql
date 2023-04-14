CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.SelectBy.username`(
IN uname varchar(45)
)
BEGIN
	SELECT *
    FROM employee
    WHERE username = uname;
END