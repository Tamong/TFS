-- Insert a new reward_order: the database keeps track of all employee’s orders
-- Use case: The user has selected the desired desc_ids from the drop down menus
-- eg. The user has selected the desc_ids for a Red, Medium, Dri-Fit for Toyota Shirt 
-- Note: desc_idA/ desc_idB are for rewards with multiple descriptions

CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_order.Insert`(
IN eeID INT,
IN txnHASH VARCHAR(70),
IN rewardID INT,
IN descIDA INT,
IN descIDB INT
)
BEGIN
INSERT INTO `reward_order`(
`ee_ID`, `txn_hash`, `reward_id`, `desc_idA`, `desc_idB`)
VALUES(
eeID, txnHASH, rewardID, descIDA, descIDB);
END
