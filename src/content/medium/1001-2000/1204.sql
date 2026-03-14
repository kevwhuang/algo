-- 1204 - Last Person to Fit in the Bus

WITH CTE AS (
    SELECT
        person_name,
        SUM(weight) OVER (
            ORDER BY
                turn
        ) AS sum
    FROM
        Queue
)
SELECT
    person_name
FROM
    CTE
WHERE
    sum <= 1000
ORDER BY
    sum DESC
LIMIT
    1;
