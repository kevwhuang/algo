-- 2173 - Longest Winning Streak

WITH CTE1 AS (
    SELECT
        player_id,
        result,
        ROW_NUMBER() OVER (
            PARTITION BY player_id
            ORDER BY
                match_day
        ) - RANK() OVER (
            PARTITION BY player_id,
            result
            ORDER BY
                match_day
        ) AS gap
    FROM
        Matches
),
CTE2 AS (
    SELECT
        player_id,
        COUNT(gap) AS streak
    FROM
        CTE1
    WHERE
        result = 'win'
    GROUP BY
        player_id,
        gap
)
SELECT
    player_id,
    IFNULL(MAX(streak), 0) AS longest_streak
FROM
    Matches
    LEFT JOIN CTE2 USING(player_id)
GROUP BY
    player_id;
