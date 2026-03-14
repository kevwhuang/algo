-- 184 - Department Highest Salary

SELECT
    D.name AS department,
    E.name AS employee,
    salary
FROM
    Employee E
    JOIN Department D ON E.departmentid = D.id
WHERE
    (departmentid, salary) IN (
        SELECT
            departmentid,
            MAX(salary)
        FROM
            Employee
        GROUP BY
            departmentid
    );
