CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_order.UpdateBy.txn_hash`(
    IN p_txn_hash VARCHAR(70),
    IN p_ee_ID INT,
    IN p_desc_id INT
)
BEGIN
    UPDATE reward_order SET ee_ID = p_ee_ID, desc_id = p_desc_id WHERE txn_hash = p_txn_hash;
END