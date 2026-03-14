-- 3832 - Find Users With Persistent Behavior Patterns

WITH CTE AS (
    SELECT
        *,
        action_date - ROW_NUMBER() OVER (
            PARTITION BY user_id,
            action
            ORDER BY
                action_date
        ) AS id
    FROM
        Activity
)
SELECT
    user_id,
    action,
    COUNT(*) AS streak_length,
    MIN(action_date) AS start_date,
    MAX(action_date) AS end_date
FROM
    CTE
GROUP BY
    user_id,
    id
HAVING
    streak_length >= 5
ORDER BY
    streak_length DESC,
    user_id;
