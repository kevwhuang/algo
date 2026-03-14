-- 1934 - Confirmation Rate

WITH CTE AS (
    SELECT
        user_id,
        ROUND(
            SUM(action != 'timeout') / COUNT(*),
            2
        ) AS rate
    FROM
        Confirmations
    GROUP BY
        user_id
)
SELECT
    user_id,
    IFNULL(rate, 0) AS confirmation_rate
FROM
    Signups
    LEFT JOIN CTE USING(user_id);
