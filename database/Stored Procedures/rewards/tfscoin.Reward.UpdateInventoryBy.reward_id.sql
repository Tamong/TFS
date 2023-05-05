CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward.UpdateInventoryBy.reward_id`(
    IN p_reward_id INT
)
BEGIN
    UPDATE tfscoin.reward
    SET inventory = inventory - 1
    WHERE reward_id = p_reward_id;
END