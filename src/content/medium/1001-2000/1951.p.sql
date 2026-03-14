-- 1951 - All the Pairs With the Maximum Number of Common Followers

WITH CTE AS (
    SELECT
        R1.user_id AS user1_id,
        R2.user_id AS user2_id,
        RANK() OVER (
            ORDER BY
                COUNT(*) DESC
        ) AS r
    FROM
        Relations R1,
        Relations R2
    WHERE
        R1.user_id < R2.user_id
        AND R1.follower_id = R2.follower_id
    GROUP BY
        user1_id,
        user2_id
)
SELECT
    user1_id,
    user2_id
FROM
    CTE
WHERE
    r = 1;
