CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_order.Insert`(
    IN p_txn_hash VARCHAR(70),
    IN p_ee_ID INT,
    IN p_desc_id INT
)
BEGIN
    DECLARE l_ee_ID INT;
    DECLARE l_desc_id INT;

    -- Check if ee_ID exists in employee table
    SELECT COUNT(*) INTO l_ee_ID FROM employee WHERE ee_ID = p_ee_ID;
    IF l_ee_ID = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'ee_ID does not exist in employee table';
        RESIGNAL;
    END IF;

    -- Check if desc_id exists in reward_desc table
    SELECT COUNT(*) INTO l_desc_id FROM reward_desc WHERE desc_id = p_desc_id;
    IF l_desc_id = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'desc_id does not exist in reward_desc table';
        RESIGNAL;
    END IF;

    INSERT INTO reward_order (txn_hash, ee_ID, desc_id) VALUES (p_txn_hash, p_ee_ID, p_desc_id);
END