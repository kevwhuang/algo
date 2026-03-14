-- 3390 - Longest Team Pass Streak

WITH CTE1 AS (
    SELECT
        T1.team_name AS team1,
        T2.team_name AS team2,
        ROW_NUMBER() OVER (
            PARTITION BY T1.team_name
            ORDER BY
                time_stamp
        ) AS r
    FROM
        Passes
        JOIN Teams T1 ON pass_from = player_id
        JOIN Teams T2 ON pass_to = T2.player_id
),
CTE2 AS (
    SELECT
        team1 AS team_name,
        r - ROW_NUMBER() OVER (PARTITION BY team1) AS gap
    FROM
        CTE1
    WHERE
        team1 = team2
),
CTE3 AS (
    SELECT
        team_name,
        COUNT(*) AS count
    FROM
        CTE2
    GROUP BY
        team_name,
        gap
)
SELECT
    team_name,
    MAX(count) AS longest_streak
FROM
    CTE3
GROUP BY
    team_name
ORDER BY
    team_name;
