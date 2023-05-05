CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward.Insert`(
    IN p_title VARCHAR(70),
    IN p_coin_price DOUBLE,
    IN p_inventory INT,
    IN p_img_url varchar(255)
)
BEGIN
    INSERT INTO reward (title, coin_price, inventory, img_url)
    VALUES (p_title, p_coin_price, p_inventory, p_img_url);
    
    SELECT reward_id, title, coin_price, inventory, img_url FROM reward WHERE reward_id = LAST_INSERT_ID();
END