-- 2072 - The Winner University

WITH CTE1 AS (
    SELECT
        COUNT(*) AS count
    FROM
        NewYork
    WHERE
        score >= 90
),
CTE2 AS (
    SELECT
        COUNT(*) AS count
    FROM
        California
    WHERE
        score >= 90
)
SELECT
    CASE
        WHEN C1.count > C2.count THEN 'New York University'
        WHEN C1.count < C2.count THEN 'California University'
        ELSE 'No Winner'
    END AS winner
FROM
    CTE1 C1,
    CTE2 C2;
