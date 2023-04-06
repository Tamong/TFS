SQL Injection attacks are prevented by using parameterized stored procedures. Injection attacks occur when malicious code is injected into an SQL statement. With parameterized stored procedures, the user input is treated as a variable, rather than as part of the SQL statement itself, which makes it much harder for an attacker to inject malicious code into the SQL statement. The database server automatically checks and validates the user input before using it in the SQL statement, preventing any SQL injection attempts. However, other security measures such as input validation, input filtering, and access control should also be implemented to prevent security breaches.


Naming Convention
[tfscoin].[Table_name].[Action/ActionBy].[Attribute_Filter]

eg. tfscoin.Employee.SelectBy.ee_ID


Future Iterations: 
- More stored procedures as needed per use case
- ON DELETE/ ON UPDATE clauses


