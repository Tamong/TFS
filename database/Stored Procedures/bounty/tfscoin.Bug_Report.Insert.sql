CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.Insert`(
  IN p_ee_id INT,
  IN p_title VARCHAR(100),
  IN p_bug_description VARCHAR(650)
)
BEGIN
  INSERT INTO bug_report (ee_ID, title, bug_description)
  VALUES (p_ee_id, p_title, p_bug_description);
END