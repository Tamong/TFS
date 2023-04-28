### Potential development to the database structure
The purpose of this change is to accommodate more reward qualities while minimizing data redundancy, and keeping the tables normalized. 
Therefore, reward_desc may be split into different categories, each with their own qualities.
Reward_Order tracks user selections with the Qualities_Selected attribute.

![alt text](https://github.com/bquigley1/TFS/blob/database_update/database/Future%20Design%20Iterations/Reward%20Database%20example%20table%20structure.PNG)
