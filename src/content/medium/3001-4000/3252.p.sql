-- 3252 - Premier League Table Ranking II

WITH CTE1 AS (
    SELECT
        COUNT(*)
    FROM
        TeamStats
),
CTE2 AS (
    SELECT
        team_name,
        wins * 3 + draws AS points,
        RANK() OVER (
            ORDER BY
                wins * 3 + draws DESC
        ) AS position
    FROM
        TeamStats
    GROUP BY
        team_name
    ORDER BY
        points DESC,
        team_name
)
SELECT
    team_name,
    points,
    position,
    CASE
        WHEN (position - 1) / (
            SELECT
                *
            FROM
                CTE1
        ) <= 0.33 THEN 'Tier 1'
        WHEN (position - 1) / (
            SELECT
                *
            FROM
                CTE1
        ) <= 0.66 THEN 'Tier 2'
        ELSE 'Tier 3'
    END AS tier
FROM
    CTE2;
