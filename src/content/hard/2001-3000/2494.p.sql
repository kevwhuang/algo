-- 2494 - Merge Overlapping Events in the Same Hall

WITH CTE1 AS (
    SELECT
        *,
        start_day > MAX(end_day) OVER (
            PARTITION BY hall_id
            ORDER BY
                start_day ROWS BETWEEN UNBOUNDED PRECEDING
                AND 1 PRECEDING
        ) AS new
    FROM
        HallEvents
),
CTE2 AS (
    SELECT
        hall_id,
        start_day,
        end_day,
        SUM(COALESCE(new, 0)) OVER (
            PARTITION BY hall_id
            ORDER BY
                start_day
        ) AS sum
    FROM
        CTE1
)
SELECT
    hall_id,
    MIN(start_day) AS start_day,
    MAX(end_day) AS end_day
FROM
    CTE2
GROUP BY
    hall_id,
    sum;
