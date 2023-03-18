CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.SelectBy.desc_id`(
    IN p_desc_id INT
)
BEGIN
    SELECT *
    FROM reward_desc
    WHERE desc_id = p_desc_id;
END