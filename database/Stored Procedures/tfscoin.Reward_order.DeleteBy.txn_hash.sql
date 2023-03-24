CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_order.DeleteBy.txn_hash`(
    IN p_txn_hash VARCHAR(70)
)
BEGIN
    DELETE FROM reward_order WHERE txn_hash = p_txn_hash;
END