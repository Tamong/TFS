CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward.SelectBy.reward_id`(
  IN p_reward_id INT
)
BEGIN
  SELECT `reward_id`, `title`, `coin_price`
  FROM `reward`
  WHERE `reward_id` = p_reward_id;
END