-- 3338 - Second Highest Salary II

WITH CTE AS (
    SELECT
        emp_id,
        dept,
        DENSE_RANK() OVER (
            PARTITION BY dept
            ORDER BY
                salary DESC
        ) AS r
    FROM
        Employees
)
SELECT
    emp_id,
    dept
FROM
    CTE
WHERE
    r = 2
ORDER BY
    emp_id;
