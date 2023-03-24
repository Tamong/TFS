CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward.Insert`(
    IN p_title VARCHAR(70),
    IN p_coin_price DOUBLE
)
BEGIN
    INSERT INTO reward (title, coin_price)
    VALUES (p_title, p_coin_price);
END