# TFSCoin Software System Database
## Entity Relational Diagram

![alt text](https://github.com/bquigley1/TFS/blob/DB-update/database/Data%20Model%20ERD.png)

## Database Schema & Implementation
The database has been built in MySQL workbench and deployed to AWS RDS. As depicted in the above entity relational diagram, the relational schema is designed to support the functional and nonfunctional requirements of the software system. Furthermore, stored procedures are implemented for backend functions which are optimal for the performance, scalability, and the security of the software system.
### Employee Table
The Employee table stores all information related to employees. It supports logging in, maintaining individual blockchain wallet information, and it maintains the information for the time tracking application as a daily check-in feature. It also keeps track of if a user is an administrator or regular employee.
### Bug Report Table
The Bug_report table keeps track of all bug report information, and has a relationship with the employee table based on the unique key, ee_ID (employee ID). It supports the use case of regular employees filing a bug report, and administrators reviewing the bug report before determining an appropriate TFSCoin reward.
### Reward & Reward Description Table
The Reward table keeps track of all rewards, their inventory, TFSCoin price, and image links. The Reward_Desc table is used to assign qualities to different rewards through the desc_type/ desc_value key value pair. For example, desc_types may be color, size, or length of time, whereas matching desc_values may be blue, red, green, medium, large, 1 week, etc. The Reward_desc table references the reward table in order to maintain which description refers to which reward.
### Reward Order table
Finally, the Reward_Order table keeps track of which employee purchased which reward, and which qualities they selected with that reward. This is accomplished by references to the primary keys of the Employee table, Reward table, and Reward_Desc table.  It keeps track of the blockchain transaction hash for each order, so that relevant data can be applied to the appropriate use cases, such as determining when a transaction occurred, the total value of the transaction, and the wallet information of the transaction. This table allows for the selection of multiple qualities for each reward by the grouping of multiple Reward_Order records by using the unique txn_hash (blockchain transaction hash) as a key on the backend, as demonstrated by the below example tables.

![alt text](https://github.com/bquigley1/TFS/blob/DB-update/database/Reward%20DB%20example%20table.PNG)

## Why Use Stored Procedures?

### Performance 
Stored procedures reduce network traffic between the database and the application by executing queries directly on the database. Stored procedures are pre-compiled and cached in server-side memory, allowing them to execute faster than SQL statements generated at runtime. 

### Scalability & Availability
Application processing is isolated on the server. The server can be optimized and configured to handle a large number of tasks to process. For example, a load balancer can distribute client requests to multiple instances of a server. In a load balanced cluster, the software system scales linearly with the number of instances of a server. This also increases availability in the event that one instance of the server fails. 

### Reduced Coupling, Reusability & Testability
Stored procedures provide a modular layer of abstraction between the application and the underlying database. By encapsulating database logic within stored procedures, the application can be less impacted by changes in the database. Furthermore, the stored procedures may be reused by other clients working with the same data. Reduced coupling also makes it easier to test components in isolation.

### Security
SQL Injection attacks are prevented by using parameterized stored procedures. Injection attacks occur when malicious code is injected into an SQL statement. With parameterized stored procedures, the user input is treated as a variable, rather than as part of the SQL statement itself, which makes it much harder for an attacker to inject malicious code into the SQL statement. The database server automatically checks and validates the user input before using it in the SQL statement, preventing any SQL injection attempts. 
