-- 3497 - Analyze Subscription Conversion

WITH CTE1 AS (
    SELECT
        user_id,
        ROUND(AVG(activity_duration), 2) AS trial_avg_duration
    FROM
        UserActivity
    WHERE
        activity_type = 'free_trial'
    GROUP BY
        user_id
),
CTE2 AS (
    SELECT
        user_id,
        ROUND(AVG(activity_duration), 2) AS paid_avg_duration
    FROM
        UserActivity
    WHERE
        activity_type = 'paid'
    GROUP BY
        user_id
)
SELECT
    *
FROM
    CTE1
    JOIN CTE2 USING(user_id)
ORDER BY
    user_id;
