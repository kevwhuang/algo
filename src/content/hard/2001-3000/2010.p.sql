-- 2010 - The Number of Seniors and Juniors to Join the Company II

WITH CTE AS (
    SELECT
        employee_id,
        experience,
        SUM(salary) OVER (
            PARTITION BY experience
            ORDER BY
                salary ROWS BETWEEN UNBOUNDED PRECEDING
                AND CURRENT ROW
        ) AS sum
    FROM
        Candidates
)
SELECT
    employee_id
FROM
    CTE
WHERE
    experience = 'Senior'
    AND sum <= 70000
UNION
SELECT
    employee_id
FROM
    CTE
WHERE
    experience = 'Junior'
    AND sum <= 70000 - (
        SELECT
            IFNULL(MAX(sum), 0)
        FROM
            CTE
        WHERE
            experience = 'Senior'
            AND sum <= 70000
    );
