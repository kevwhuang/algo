-- 1107 - New Users Daily Count

WITH CTE AS (
    SELECT
        MIN(activity_date) AS login_date
    FROM
        Traffic
    WHERE
        activity = 'login'
    GROUP BY
        user_id
    HAVING
        login_date >= '2019-04-01'
)
SELECT
    *,
    COUNT(*) AS user_count
FROM
    CTE
GROUP BY
    login_date;
