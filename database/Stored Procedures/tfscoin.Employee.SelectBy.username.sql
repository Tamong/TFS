CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.SelectBy.username`(
    IN uname varchar(45)
)
BEGIN
    SELECT e.ee_ID, e.username, e.is_admin, e.wallet_address, e.private_key 
    FROM employee e
    WHERE e.username = uname;
END
