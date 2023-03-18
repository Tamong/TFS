CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward.DeleteBy.reward_id`(
  IN p_reward_id INT
)
BEGIN
  DELETE FROM `reward`
  WHERE `reward_id` = p_reward_id;
END