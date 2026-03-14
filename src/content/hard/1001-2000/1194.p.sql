-- 1194 - Tournament Winners

WITH CTE AS (
    SELECT
        group_id,
        player_id,
        RANK() OVER (
            PARTITION BY group_id
            ORDER BY
                SUM(
                    IF(
                        player_id = first_player,
                        first_score,
                        second_score
                    )
                ) DESC,
                player_id
        ) AS r
    FROM
        Players
        JOIN Matches ON player_id IN (first_player, second_player)
    GROUP BY
        player_id
)
SELECT
    group_id,
    player_id
FROM
    CTE
WHERE
    r = 1;
