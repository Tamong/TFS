CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_order.SelectBy.ee_ID`(
    IN p_ee_ID INT
)
BEGIN
    SELECT * FROM reward_order WHERE ee_ID = p_ee_ID;
END