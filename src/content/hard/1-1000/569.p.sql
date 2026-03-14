-- 569 - Median Employee Salary

WITH CTE AS (
    SELECT
        *,
        ROW_NUMBER() OVER (
            PARTITION BY company
            ORDER BY
                salary
        ) AS r,
        COUNT(*) OVER (PARTITION BY company) AS count
    FROM
        Employee
)
SELECT
    id,
    company,
    salary
FROM
    CTE
WHERE
    count % 2 = 0
    AND r = count / 2
    OR count % 2 = 0
    AND r = count / 2 + 1
    OR count % 2 = 1
    AND r = FLOOR(count / 2) + 1;
