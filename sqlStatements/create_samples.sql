use tfscoin;


/* use to grab the sample data */
SELECT * FROM tfscoin.employee;


/* 20 sample employees */

INSERT INTO employee (ee_ID, username, password, is_admin, wallet_address, checkin_counter, checkin_date)
VALUES (1, 'johnsmith', 'mypassword', 0, '0x123abc', 0, '2023-03-09'),
  (2, 'jdoe123', 'P@ssw0rd', 0, '0xabc123', 0, '2023-03-09'),
  (3, 'asmith456', 'Qwerty123', 0, '0xdef456', 0, '2023-03-09'),
  (4, 'bwilliams', 'Password123', 1, '0xghi789', 0, '2023-03-09'),
  (5, 'mjones', 'Secret123', 0, '0xjkl012', 0, '2023-03-09'),
  (6, 'lparker', 'MyPa$$word', 0, '0xmno345', 0, '2023-03-09'),
  (7, 'rsmith', '12345678', 0, '0xpqr678', 0, '2023-03-09'),
  (8, 'jjackson', 'Abcd1234', 0, '0xstu901', 0, '2023-03-09'),
  (9, 'tmiller', 'Password1', 1, '0xvwx234', 0, '2023-03-09'),
  (10, 'jbrown', 'MyPassword1', 0, '0xyz567', 0, '2023-03-09'),
  (11, 'sbaker', 'P@ssword1', 0, '0xabc890', 0, '2023-03-09'),
  (12, 'dmartinez', 'Qwerty1234', 0, '0xdef123', 0, '2023-03-09'),
  (13, 'mlee', 'Abcdefg1', 0, '0xghi456', 0, '2023-03-09'),
  (14, 'jgarcia', 'Password1234', 0, '0xjkl789', 0, '2023-03-09'),
  (15, 'ahernandez', 'Secret1234', 1, '0xmno012', 0, '2023-03-09'),
  (16, 'jgonzalez', 'MyPa$$word1', 0, '0xpqr345', 0, '2023-03-09'),
  (17, 'abrown', '123456789', 0, '0xstu678', 0, '2023-03-09'),
  (18, 'srivera', 'Abcd12345', 0, '0xvwx901', 0, '2023-03-09'),
  (19, 'jramirez', 'Password12345', 0, '0xyz234', 0, '2023-03-09'),
  (20, 'kflores', 'MyPassword123', 0, '0xabc567', 0, '2023-03-09');


/* 20 sample rewards */


INSERT INTO reward (reward_id, title, coin_price) VALUES
  (2, 'Reward 2', 20),
  (3, 'Reward 3', 30),
  (4, 'Reward 4', 40),
  (5, 'Reward 5', 50),
  (6, 'Reward 6', 60),
  (7, 'Reward 7', 70),
  (8, 'Reward 8', 80),
  (9, 'Reward 9', 90),
  (10, 'Reward 10', 100),
  (11, 'Reward 11', 110),
  (12, 'Reward 12', 120),
  (13, 'Reward 13', 130),
  (14, 'Reward 14', 140),
  (15, 'Reward 15', 150),
  (16, 'Reward 16', 160),
  (17, 'Reward 17', 170),
  (18, 'Reward 18', 180),
  (19, 'Reward 19', 190),
  (20, 'Reward 20', 200);


/* 20 sample reward_desc */

INSERT INTO reward_desc (reward_id, desc_type, desc_value, inventory) VALUES
  (1, 'color', 'red', 10),
  (1, 'color', 'blue', 20),
  (1, 'size', 'medium', 30),
  (1, 'size', 'large', 40),
  (2, 'color', 'green', 50),
  (2, 'color', 'purple', 60),
  (2, 'size', 'small', 70),
  (2, 'size', 'medium', 80),
  (3, 'color', 'blue', 90),
  (3, 'color', 'yellow', 100),
  (3, 'size', 'medium', 110),
  (3, 'size', 'large', 120);
