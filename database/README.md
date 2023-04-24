Data Model - ER Diagram

![alt text](https://github.com/bquigley1/TFS/blob/database_update/database/DB_ERD_DataModel.png)


Reward's Database - Example Tables

![alt text](https://github.com/bquigley1/TFS/blob/database_update/database/Rewards%20Database%20Example%20Tables.PNG)


Reward's Database - Stored Procedures Update

`tfscoin.Reward_desc.SelectDistinctTypesBy.reward_id`

-- Select all distinct description types for a specified reward

-- Use case: the front-end needs to create 1 drop down menu for each desc_type

-- eg. T-Shirts may need 1 drop down menu for each desc_type: Size, Color, Material


`tfscoin.Reward_desc.SelectBy.reward_id_desc_type`

-- Select all desc_id for a specific desc_type, under a given reward

-- Use case: the frond-end needs to populate the drop down menus with correct desc_id

-- eg. For T-Shirts, the Size menu needs to be populated with Large, Medium, Small…

-- Note: desc_type is varchar(45) eg. ‘Color’, ‘Size’ 


`tfscoin.Reward_order.Insert`

-- Insert a new reward_order: the database keeps track of all employee’s orders

-- Use case: The user has selected the desired desc_ids from the drop down menus

-- eg. The user has selected the desc_ids for a Red, Medium, Dri-Fit for Toyota Shirt 

-- Note: desc_idA/ desc_idB are for rewards with multiple descriptions

