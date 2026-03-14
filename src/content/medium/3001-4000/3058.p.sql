-- 3058 - Friends With No Mutual Friends

WITH CTE AS (
    SELECT
        *
    FROM
        Friends
    UNION
    SELECT
        user_id2,
        user_id1
    FROM
        Friends
)
SELECT
    *
FROM
    Friends
WHERE
    (user_id1, user_id2) NOT IN (
        SELECT
            C1.user_id1,
            C2.user_id1
        FROM
            CTE C1
            JOIN CTE C2 USING(user_id2)
    )
ORDER BY
    user_id1,
    user_id2;
