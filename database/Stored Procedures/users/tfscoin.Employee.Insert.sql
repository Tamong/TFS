CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.Insert`(
  IN p_username VARCHAR(45),
  IN p_password VARCHAR(70),
  IN p_wallet_address VARCHAR(70),
  IN p_private_key VARCHAR(300)
)
BEGIN
  INSERT INTO `employee` (`username`, `password`, `wallet_address`, `private_key`)
  VALUES (p_username, p_password, p_wallet_address, p_private_key);
END