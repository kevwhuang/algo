-- 185 - Department Top Three Salaries

WITH CTE AS (
    SELECT
        D.name AS department,
        E.name AS employee,
        salary,
        DENSE_RANK() OVER (
            PARTITION BY D.name
            ORDER BY
                salary DESC
        ) AS r
    FROM
        Employee E
        JOIN Department D ON E.departmentid = D.id
)
SELECT
    department,
    employee,
    salary
FROM
    CTE
WHERE
    r <= 3;
