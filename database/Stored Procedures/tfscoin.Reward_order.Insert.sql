-- Insert a new reward_order: the database keeps track of all employee’s orders
-- Use case: The user has selected the desired reward_id and desc_ids from the drop down menus
-- eg. The user has selected the a Toyota Shirt with desc_ids: Red, Medium, Dri-Fit
-- Multiple descriptions exist as mutliple records grouped by the same blockhain transaction hash

CREATE DEFINER=admin@% PROCEDURE tfscoin.Reward_order.Insert(
IN eeID INT,
IN txnHASH VARCHAR(70),
IN rewardID INT,
IN descID INT
)
BEGIN
INSERT INTO reward_order(
ee_ID, txn_hash, reward_id, desc_id)
VALUES(
eeID, txnHASH, rewardID, descID);
END
