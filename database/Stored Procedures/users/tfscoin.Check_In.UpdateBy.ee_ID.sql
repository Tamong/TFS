CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Check_In.UpdateBy.ee_ID`(
    IN p_ee_ID INT
)
BEGIN
    DECLARE previous_checkin DATE;
    DECLARE today_date DATE;
    
    SELECT checkin_date INTO previous_checkin FROM employee WHERE ee_ID = p_ee_ID;
	SET today_date = DATE(NOW());
    
    IF previous_checkin IS NULL OR DATE(previous_checkin) < today_date THEN
        UPDATE employee 
        SET checkin_counter = checkin_counter + 1, 
        checkin_date = today_date WHERE ee_ID = p_ee_ID;
        SELECT CONCAT(checkin_counter) 
        AS message FROM employee WHERE ee_ID = p_ee_ID;
    ELSE
        SELECT CONCAT('Check-in failed') 
        AS message FROM employee WHERE ee_ID = p_ee_ID;
   END IF;
END