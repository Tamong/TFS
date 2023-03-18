CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.DeleteBy.reward_id`(
    IN p_reward_id INT
)
BEGIN
    DELETE FROM reward_desc
    WHERE reward_id = p_reward_id;
END