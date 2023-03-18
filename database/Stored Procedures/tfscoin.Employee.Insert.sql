CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Employee.Insert`(
  IN username VARCHAR(45),
  IN pswd VARCHAR(70),
  IN is_admin INT,
  IN wallet_address VARCHAR(70),
  IN checkin_counter INT,
  IN checkin_date DATE
)
BEGIN
  INSERT INTO `employee` (`username`, `password`, `is_admin`, `wallet_address`, `checkin_counter`, `checkin_date`)
  VALUES (username, pswd, is_admin, wallet_address, checkin_counter, checkin_date);
END