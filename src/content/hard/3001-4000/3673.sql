-- 3673 - Find Zombie Sessions

SELECT
    session_id,
    user_id,
    TIMESTAMPDIFF(
        MINUTE,
        MIN(event_timestamp),
        MAX(event_timestamp)
    ) AS session_duration_minutes,
    SUM(event_type = 'scroll') AS scroll_count
FROM
    App_Events
GROUP BY
    session_id
HAVING
    session_duration_minutes > 30
    AND scroll_count >= 5
    AND SUM(event_type = 'purchase') = 0
    AND SUM(event_type = 'click') / scroll_count < 0.2
ORDER BY
    scroll_count DESC,
    session_id;
