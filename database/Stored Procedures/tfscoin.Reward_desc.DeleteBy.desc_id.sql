CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward_desc.DeleteBy.desc_id`(
    IN p_desc_id INT
)
BEGIN
    DELETE FROM reward_desc
    WHERE desc_id = p_desc_id;
END