-- 2720 - Popularity Percentage

WITH CTE AS (
    SELECT
        *
    FROM
        Friends
    UNION
    SELECT
        user2,
        user1
    FROM
        Friends
)
SELECT
    user1,
    ROUND(
        100 * COUNT(DISTINCT user2) / COUNT(user1) OVER (),
        2
    ) AS percentage_popularity
FROM
    CTE
GROUP BY
    user1
ORDER BY
    user1;
