-- 2820 - Election Results

WITH CTE1 AS (
    SELECT
        voter,
        COUNT(*) AS count
    FROM
        Votes
    WHERE
        candidate IS NOT NULL
    GROUP BY
        voter
),
CTE2 AS (
    SELECT
        candidate,
        SUM(1 / count) AS votes
    FROM
        Votes
        JOIN CTE1 USING(voter)
    GROUP BY
        candidate
    ORDER BY
        candidate
)
SELECT
    candidate
FROM
    CTE2
WHERE
    votes = (
        SELECT
            MAX(votes)
        FROM
            CTE2
    );
