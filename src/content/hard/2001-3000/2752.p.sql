-- 2752 - Customers With Maximum Number of Transactions on Consecutive Days

WITH CTE1 AS (
    SELECT
        customer_id,
        TO_DAYS(transaction_date) - ROW_NUMBER() OVER (
            PARTITION BY customer_id
            ORDER BY
                transaction_date
        ) AS gap
    FROM
        Transactions
),
CTE2 AS (
    SELECT
        customer_id,
        COUNT(*) AS streak
    FROM
        CTE1
    GROUP BY
        customer_id,
        gap
)
SELECT
    customer_id
FROM
    CTE2
WHERE
    streak = (
        SELECT
            MAX(streak)
        FROM
            CTE2
    )
ORDER BY
    customer_id;
