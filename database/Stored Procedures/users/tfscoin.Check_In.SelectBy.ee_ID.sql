CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Check_In.SelectBy.ee_ID`(
  IN p_ee_ID INT
)
BEGIN
  SELECT e.checkin_counter
  FROM employee e
  WHERE e.ee_ID = p_ee_ID;
END