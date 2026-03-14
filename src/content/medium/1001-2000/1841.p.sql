-- 1841 - League Statistics

WITH CTE AS (
    SELECT
        team_name,
        COUNT(*) AS matches_played,
        SUM(
            CASE
                WHEN team_id = home_team_id
                AND home_team_goals > away_team_goals THEN 3
                WHEN team_id = away_team_id
                AND away_team_goals > home_team_goals THEN 3
                WHEN home_team_goals = away_team_goals THEN 1
                ELSE 0
            END
        ) AS points,
        SUM(IF(team_id = home_team_id, home_team_goals, 0)) + SUM(IF(team_id = away_team_id, away_team_goals, 0)) AS goal_for,
        SUM(IF(team_id = home_team_id, away_team_goals, 0)) + SUM(IF(team_id = away_team_id, home_team_goals, 0)) AS goal_against
    FROM
        Teams
        JOIN Matches ON team_id = home_team_id
        OR team_id = away_team_id
    GROUP BY
        team_id
)
SELECT
    *,
    goal_for - goal_against AS goal_diff
FROM
    CTE
ORDER BY
    points DESC,
    goal_diff DESC,
    team_name;
