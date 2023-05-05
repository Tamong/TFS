CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.SelectBy.userpass`(
  IN p_username VARCHAR(45),
  IN p_password VARCHAR(70)
)
BEGIN
  SELECT `ee_ID`, `username`, `is_admin`, `wallet_address`
  FROM `employee`
  WHERE `username` = p_username AND `password` = p_password;
END