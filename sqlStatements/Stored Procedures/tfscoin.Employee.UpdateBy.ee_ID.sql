CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.UpdateBy.ee_ID`(
    IN emp_ID INT,
    IN emp_username VARCHAR(45),
    IN emp_password VARCHAR(70),
    IN emp_is_admin INT,
    IN emp_wallet_address VARCHAR(70),
    IN emp_checkin_counter INT,
    IN emp_checkin_date DATE
)
BEGIN
    UPDATE employee
    SET username = emp_username,
        password = emp_password,
        is_admin = emp_is_admin,
        wallet_address = emp_wallet_address,
        checkin_counter = emp_checkin_counter,
        checkin_date = emp_checkin_date
    WHERE ee_ID = emp_ID;
END