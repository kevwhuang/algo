-- 1949 - Strong Friendship

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
    F.user1_id,
    F.user2_id,
    COUNT(C1.user2_id) AS common_friend
FROM
    Friendship F
    JOIN CTE C1 ON F.user1_id = C1.user1_id
    JOIN CTE C2 ON F.user2_id = C2.user1_id
    AND C1.user2_id = C2.user2_id
GROUP BY
    user1_id,
    user2_id
HAVING
    common_friend >= 3;
