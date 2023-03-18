CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward.UpdateBy.reward_id`(
  IN p_reward_id INT,
  IN p_title VARCHAR(70),
  IN p_coin_price DOUBLE
)
BEGIN
  UPDATE `reward`
  SET `title` = p_title,
      `coin_price` = p_coin_price
  WHERE `reward_id` = p_reward_id;
END