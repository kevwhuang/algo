-- 2995 - Viewers Turned Streamers

WITH CTE AS (
    SELECT
        user_id,
        session_type,
        RANK() OVER (
            PARTITION BY user_id
            ORDER BY
                session_start
        ) AS r
    FROM
        Sessions
)
SELECT
    user_id,
    COUNT(*) AS sessions_count
FROM
    Sessions
WHERE
    user_id IN (
        SELECT
            user_id
        FROM
            CTE
        WHERE
            session_type = 'Viewer'
            AND r = 1
    )
    AND session_type = 'Streamer'
GROUP BY
    user_id
ORDER BY
    sessions_count DESC,
    user_id DESC;
