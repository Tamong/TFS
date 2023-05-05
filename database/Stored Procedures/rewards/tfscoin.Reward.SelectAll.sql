CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward.SelectAll`(
)
BEGIN
  SELECT reward_id, title, coin_price, inventory, img_url
  FROM reward;
END