CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_order.Insert`(
IN eeID INT,
IN txnHASH VARCHAR(70),
IN rewardID INT,
IN descID INT
)
BEGIN
INSERT INTO `reward_order`(
`ee_ID`, `txn_hash`, `reward_id`, `desc_id`)
VALUES(
eeID, txnHASH, rewardID, descID);
END