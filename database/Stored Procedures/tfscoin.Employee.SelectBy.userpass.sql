CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.SelectBy.userpass`(
	IN p_username VARCHAR(45), 
	IN p_password VARCHAR(70), 
	OUT p_employee_id INT, 
	OUT p_is_admin INT
)
BEGIN
	DECLARE employee_count INT;
	DECLARE employee_id INT;
	DECLARE is_admin INT;

	-- count the number of records with this username and password combination
	SELECT COUNT(*) INTO employee_count FROM employee WHERE username = p_username AND password = p_password;

	-- if there is one record for this employee
	IF employee_count = 1 THEN
        SELECT ee_ID, is_admin INTO employee_id, is_admin FROM employee WHERE username = p_username AND password = p_password;
        SET p_employee_id = employee_id;
        SET p_is_admin = is_admin;
        
    -- if there is no record it will return 0
    ELSE
        SET p_employee_id = 0;
        SET p_is_admin = 0;
    END IF;
END