-- 3246 - Premier League Table Ranking

SELECT
    team_id,
    team_name,
    wins * 3 + draws AS points,
    RANK() OVER (
        ORDER BY
            wins * 3 + draws DESC
    ) AS position
FROM
    TeamStats
GROUP BY
    team_id
ORDER BY
    points DESC,
    team_name;
