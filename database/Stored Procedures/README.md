Why Use Stored Procedures?

Performance: Stored procedures reduce network traffic between the database and the application by executing queries directly on the database. Stored procedures are pre-compiled and cached in server-side memory, allowing them to execute faster than SQL statements generated at runtime. 

Scalability & Availability: Application processing is isolated on the server. The server can be optimized and configured to handle a large number of tasks to process. For example, a load balancer can distribute client requests to multiple instances of a server. In a load balanced cluster, the software system scales linearly with the number of instances of a server. This also increases availability in the event that one instance of the server fails. 

Reduced Coupling, Reusability & Testability: Stored procedures provide a modular layer of abstraction between the application and the underlying database. By encapsulating database logic within stored procedures, the application can be less impacted by changes in the database. Furthermore, the stored procedures may be reused by other clients working with the same data. Reduced coupling also makes it easier to test components in isolation.

Security: SQL Injection attacks are prevented by using parameterized stored procedures. Injection attacks occur when malicious code is injected into an SQL statement. With parameterized stored procedures, the user input is treated as a variable, rather than as part of the SQL statement itself, which makes it much harder for an attacker to inject malicious code into the SQL statement. The database server automatically checks and validates the user input before using it in the SQL statement, preventing any SQL injection attempts. 




Naming Convention

[tfscoin].[Table_name].[Action/ActionBy].[Attribute_Filter]

eg. tfscoin.Employee.SelectBy.ee_ID



Future Iterations: 
- More stored procedures as needed per use case
- ON DELETE/ ON UPDATE clauses