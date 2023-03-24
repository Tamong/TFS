CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Reward.Select`()
BEGIN
SELECT `reward`.`reward_id`,
    `reward`.`title`,
    `reward`.`coin_price`
FROM `tfscoin`.`reward`;
END