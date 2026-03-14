-- 2688 - Find Active Users

WITH CTE AS (
    SELECT
        user_id,
        COUNT(created_at) OVER (
            PARTITION BY user_id
            ORDER BY
                created_at RANGE INTERVAL 7 DAY PRECEDING
        ) AS count
    FROM
        Users
)
SELECT
    DISTINCT user_id
FROM
    CTE
WHERE
    count > 1;
