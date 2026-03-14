-- 1132 - Reported Posts II

WITH CTE1 AS (
    SELECT
        action_date,
        COUNT(DISTINCT post_id) AS removed
    FROM
        Actions
        JOIN Removals USING(post_id)
    WHERE
        extra = 'spam'
    GROUP BY
        action_date
),
CTE2 AS (
    SELECT
        COALESCE(removed / COUNT(DISTINCT post_id), 0) AS ratio
    FROM
        Actions
        LEFT JOIN CTE1 USING(action_date)
    WHERE
        extra = 'spam'
    GROUP BY
        action_date
)
SELECT
    ROUND(100 * AVG(ratio), 2) AS average_daily_percent
FROM
    CTE2;
