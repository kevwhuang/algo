-- 1378 - Replace Employee ID With the Unique Identifier

SELECT
    unique_id,
    name
FROM
    Employees
    LEFT JOIN EmployeeUNI USING(id);
