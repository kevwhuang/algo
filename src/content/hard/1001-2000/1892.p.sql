-- 1892 - Page Recommendations II

WITH CTE AS (
    SELECT
        *
    FROM
        Friendship
    UNION
    SELECT
        user2_id,
        user1_id
    FROM
        Friendship
)
SELECT
    user1_id AS user_id,
    L1.page_id,
    COUNT(*) AS friends_likes
FROM
    CTE
    JOIN Likes L1 ON user2_id = user_id
    LEFT JOIN Likes L2 ON user1_id = L2.user_id
    AND L1.page_id = L2.page_id
WHERE
    L2.page_id IS NULL
GROUP BY
    user_id,
    page_id;
