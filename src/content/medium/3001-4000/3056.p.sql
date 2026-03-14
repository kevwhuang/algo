-- 3056 - Snaps Analysis

WITH CTE AS (
    SELECT
        age_bucket,
        ROUND(
            100 * SUM(IF(activity_type = 'send', time_spent, 0)) / SUM(time_spent),
            2
        ) AS send_perc
    FROM
        Age
        JOIN Activities USING(user_id)
    GROUP BY
        age_bucket
)
SELECT
    *,
    100 - send_perc AS open_perc
FROM
    CTE;
