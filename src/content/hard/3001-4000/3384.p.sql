-- 3384 - Team Dominance by Pass Success

SELECT
    T1.team_name,
    IF(time_stamp <= '45:00', 1, 2) AS half_number,
    SUM(IF(T1.team_name = T2.team_name, 1, -1)) AS dominance
FROM
    Passes
    JOIN Teams T1 ON pass_from = player_id
    JOIN Teams T2 ON pass_to = T2.player_id
GROUP BY
    team_name,
    half_number
ORDER BY
    team_name,
    half_number;
