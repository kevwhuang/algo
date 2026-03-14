-- 1917 - Leetcodify Friends Recommendations

WITH CTE AS (
    SELECT
        L1.user_id,
        L2.user_id AS recommended_id
    FROM
        Listens L1
        JOIN Listens L2 USING(song_id, day)
    WHERE
        L1.user_id < L2.user_id
    GROUP BY
        user_id,
        recommended_id,
        day
    HAVING
        COUNT(DISTINCT song_id) >= 3
)
SELECT
    *
FROM
    CTE
UNION
SELECT
    recommended_id,
    user_id
FROM
    CTE
EXCEPT
SELECT
    *
FROM
    Friendship
EXCEPT
SELECT
    user2_id,
    user1_id
FROM
    Friendship;
