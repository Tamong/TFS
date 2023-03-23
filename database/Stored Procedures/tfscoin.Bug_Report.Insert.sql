CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.Insert`(
IN p_ee_D INT,
IN p_bounty_id INT,
IN p_is_active INT, -- DEFAULT '1'
IN p_time_reported DATETIME -- DEFAULT CURRENT_TIMESTAMP
)
BEGIN
	-- check for existing records of foreign keys
	DECLARE existing_ee INT DEFAULT 0;
    DECLARE existing_bounty INT DEFAULT 0;
	
    SELECT COUNT(*) INTO existing_ee FROM employee WHERE ee_ID = p_ee_id;
    SELECT COUNT(*) INTO existing_bounty FROM bug_bounty WHERE bounty_id = p_bounty_id;
	
    IF existing_ee = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Employee ID does not exist';
    END IF;

    IF existing_bounty = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Bounty ID does not exist';
    END IF;
    
	INSERT INTO bug_report (ee_ID, bounty_id, is_active, time_reported)
    VALUES (p_ee_id, p_bounty_id, p_is_active, p_time_reported);
END