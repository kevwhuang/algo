-- 3118 - Friday Purchase III

WITH Base AS (
    SELECT
        1 AS week_of_month,
        'Premium' AS membership
    UNION
    SELECT
        1,
        'VIP'
    UNION
    SELECT
        2,
        'Premium'
    UNION
    SELECT
        2,
        'VIP'
    UNION
    SELECT
        3,
        'Premium'
    UNION
    SELECT
        3,
        'VIP'
    UNION
    SELECT
        4,
        'Premium'
    UNION
    SELECT
        4,
        'VIP'
),
CTE AS (
    SELECT
        WEEK(purchase_date) - 43 AS week_of_month,
        membership,
        SUM(amount_spend) AS sum
    FROM
        Purchases
        LEFT JOIN Users USING(user_id)
    WHERE
        DAYOFWEEK(purchase_date) = 6
        AND membership <> 'Standard'
    GROUP BY
        week_of_month,
        membership
)
SELECT
    week_of_month,
    membership,
    COALESCE(sum, 0) AS total_amount
FROM
    Base
    LEFT JOIN CTE USING(week_of_month, membership);
