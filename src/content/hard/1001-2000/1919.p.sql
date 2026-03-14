-- 1919 - Leetcodify Similar Friends

SELECT
    *
FROM
    Friendship
WHERE
    (user1_id, user2_id) IN (
        SELECT
            L1.user_id,
            L2.user_id
        FROM
            Listens L1
            JOIN Listens L2 USING(song_id, day)
        WHERE
            L1.user_id < L2.user_id
        GROUP BY
            L1.user_id,
            L2.user_id,
            day
        HAVING
            COUNT(DISTINCT song_id) >= 3
    );
