-- 1811 - Find Interview Candidates

WITH CTE1 AS (
    SELECT
        contest_id,
        gold_medal AS user_id
    FROM
        Contests
    UNION
    SELECT
        contest_id,
        silver_medal
    FROM
        Contests
    UNION
    SELECT
        contest_id,
        bronze_medal
    FROM
        Contests
),
CTE2 AS (
    SELECT
        contest_id,
        user_id,
        ROW_NUMBER() OVER (
            PARTITION BY user_id
            ORDER BY
                contest_id
        ) AS r
    FROM
        CTE1
),
CTE3 AS (
    SELECT
        user_id
    FROM
        CTE2
    GROUP BY
        user_id,
        contest_id - r
    HAVING
        COUNT(*) >= 3
    UNION
    SELECT
        gold_medal AS user_id
    FROM
        Contests
    GROUP BY
        user_id
    HAVING
        COUNT(*) >= 3
)
SELECT
    name,
    mail
FROM
    CTE3
    JOIN Users USING(user_id);
