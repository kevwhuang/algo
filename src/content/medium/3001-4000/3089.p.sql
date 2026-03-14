-- 3089 - Find Bursty Behavior

WITH CTE1 AS (
    SELECT
        user_id,
        COUNT(post_id) OVER (
            PARTITION BY user_id
            ORDER BY
                post_date RANGE BETWEEN INTERVAL 6 DAY PRECEDING
                AND CURRENT ROW
        ) AS num
    FROM
        Posts
),
CTE2 AS (
    SELECT
        user_id,
        COUNT(post_id) / 4 AS avg_weekly_posts
    FROM
        Posts
    WHERE
        MONTH(post_date) = 2
        AND DAY(post_date) <= 28
    GROUP BY
        user_id
)
SELECT
    user_id,
    MAX(num) AS max_7day_posts,
    avg_weekly_posts
FROM
    CTE1
    JOIN CTE2 USING(user_id)
GROUP BY
    user_id
HAVING
    max_7day_posts >= 2 * avg_weekly_posts
ORDER BY
    user_id;
