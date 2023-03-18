CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_order.SelectBy.txn_hash`(
    IN p_txn_hash VARCHAR(70)
)
BEGIN
    SELECT * FROM reward_order WHERE txn_hash = p_txn_hash;
END