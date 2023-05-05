### Potential development to the database structure
The purpose of this potential development is to accommodate more reward qualities while minimizing data redundancy, and keeping the tables normalized. The Reward_Desc table may be split into different tables by category, each with their own qualities, inventories, and prices. Reward_Order can maintain user selections with the order_details attribute.


![alt text](https://github.com/bquigley1/TFS/blob/database_update/database/Future%20Design%20Iterations/Reward%20Database%20example%20table%20structure.PNG)


### Future Changes & Upgrades: 
- User permissions to execute specific stored procedures
- More stored procedures as needed per use case
- ON DELETE/ ON UPDATE clauses
