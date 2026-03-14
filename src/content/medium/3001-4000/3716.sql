-- 3716 - Find Churn Risk Customers

WITH CTE AS (
    SELECT
        user_id,
        MIN(event_date) AS date_1,
        MAX(event_date) AS date_2,
        MAX(monthly_amount) AS max_historical_amount
    FROM
        Subscription_Events
    GROUP BY
        user_id
    HAVING
        COUNT(event_type = 'downgrade')
)
SELECT
    user_id,
    plan_name AS current_plan,
    monthly_amount AS current_monthly_amount,
    max_historical_amount,
    DATEDIFF(date_2, date_1) AS days_as_subscriber
FROM
    Subscription_Events S
    JOIN CTE C USING(user_id)
WHERE
    S.event_date = C.date_2
    AND monthly_amount
HAVING
    current_monthly_amount < max_historical_amount / 2
    AND days_as_subscriber >= 60
ORDER BY
    days_as_subscriber DESC,
    user_id;
