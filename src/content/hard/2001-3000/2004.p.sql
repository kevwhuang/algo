-- 2004 - The Number of Seniors and Juniors to Join the Company

WITH CTE1 AS (
    SELECT
        experience,
        SUM(salary) OVER (
            PARTITION BY experience
            ORDER BY
                salary ROWS BETWEEN UNBOUNDED PRECEDING
                AND CURRENT ROW
        ) AS sum
    FROM
        Candidates
),
CTE2 AS (
    SELECT
        'Senior' AS experience,
        COUNT(*) AS accepted_candidates,
        IFNULL(MAX(sum), 0) AS max
    FROM
        CTE1
    WHERE
        experience = 'Senior'
        AND sum <= 70000
)
SELECT
    experience,
    accepted_candidates
FROM
    CTE2
UNION
SELECT
    'Junior',
    COUNT(*)
FROM
    CTE1
WHERE
    experience = 'Junior'
    AND sum <= 70000 - (
        SELECT
            max
        FROM
            CTE2
    );
