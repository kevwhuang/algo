-- 1097 - Game Play Analysis V

WITH CTE AS (
    SELECT
        player_id,
        MIN(event_date) AS install_dt
    FROM
        Activity
    GROUP BY
        player_id
)
SELECT
    install_dt,
    COUNT(*) AS installs,
    ROUND(COUNT(event_date) / COUNT(*), 2) AS day1_retention
FROM
    CTE C
    LEFT JOIN Activity A ON C.player_id = A.player_id
    AND install_dt + 1 = event_date
GROUP BY
    install_dt;
