-- 1468 - Calculate Salaries

WITH CTE AS (
    SELECT
        company_id,
        CASE
            WHEN MAX(salary) < 1000 THEN 1
            WHEN MAX(salary) > 10000 THEN 0.51
            ELSE 0.76
        END AS mult
    FROM
        Salaries
    GROUP BY
        company_id
)
SELECT
    company_id,
    employee_id,
    employee_name,
    ROUND(salary * mult) AS salary
FROM
    Salaries
    JOIN CTE USING(company_id);
