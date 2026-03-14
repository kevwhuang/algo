-- 181 - Employees Earning More Than Their Managers

SELECT
    E1.name AS employee
FROM
    Employee E1
    JOIN Employee E2 ON E1.managerid = E2.id
    AND E1.salary > E2.salary;
