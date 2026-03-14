-- 1127 - User Purchase Platform

WITH CTE1 AS (
    SELECT
        DISTINCT spend_date
    FROM
        Spending
),
CTE2 AS (
    SELECT
        'both' AS platform
    UNION
    SELECT
        'desktop'
    UNION
    SELECT
        'mobile'
),
CTE3 AS (
    SELECT
        user_id,
        spend_date,
        SUM(S1.amount + S2.amount) AS total_amount,
        COUNT(*) AS total_users
    FROM
        Spending S1
        JOIN Spending S2 USING(user_id, spend_date)
    WHERE
        S1.platform = 'desktop'
        AND S2.platform = 'mobile'
    GROUP BY
        user_id,
        spend_date
),
CTE4 AS (
    SELECT
        spend_date,
        'both' AS platform,
        total_amount,
        total_users
    FROM
        CTE3
    UNION
    SELECT
        spend_date,
        platform,
        SUM(amount),
        COUNT(*)
    FROM
        Spending
        LEFT JOIN CTE3 USING(user_id, spend_date)
    WHERE
        total_amount IS NULL
    GROUP BY
        spend_date,
        platform
)
SELECT
    spend_date,
    platform,
    IFNULL(total_amount, 0) AS total_amount,
    IFNULL(total_users, 0) AS total_users
FROM
    CTE1
    JOIN CTE2
    LEFT JOIN CTE4 USING(spend_date, platform);
