CREATE DEFINER=`admin`@`%` PROCEDURE `tfscoin.Bug_Report.UpdateBy.report_id`(
    IN p_report_id INT,
    IN p_processor_ee_id INT,
    IN p_reward_amount INT,
    IN p_notes TEXT
)
BEGIN
    UPDATE tfscoin.bug_report
    SET coin_rewarded = p_reward_amount,
        processor_ee_ID = p_processor_ee_id,
        time_processed = NOW(),
        processor_msg = p_notes
    WHERE report_id = p_report_id;
END
