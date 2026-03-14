-- 1783 - Grand Slam Titles

SELECT
    player_id,
    player_name,
    SUM(player_id = wimbledon) + SUM(player_id = fr_open) + SUM(player_id = us_open) + SUM(player_id = au_open) AS grand_slams_count
FROM
    Players,
    Championships
GROUP BY
    player_id
HAVING
    grand_slams_count != 0;
