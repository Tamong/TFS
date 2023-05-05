CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_order.SelectAll`(
)
BEGIN
  SELECT
	txn_hash AS txn_id,
	ee_id,
	reward_id,
	GROUP_CONCAT(desc_id) AS desc_ids
	FROM
		tfscoin.reward_order
	GROUP BY txn_hash
	ORDER BY ro_id DESC;
END