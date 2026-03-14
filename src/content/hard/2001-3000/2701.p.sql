-- 2701 - Consecutive Transactions With Increasing Amounts

WITH CTE1 AS (
    SELECT
        customer_id,
        T1.transaction_date AS consecutive_start
    FROM
        Transactions T1
        JOIN Transactions T2 USING(customer_id)
    WHERE
        DATEDIFF(T2.transaction_date, T1.transaction_date) = 1
        AND T1.amount < T2.amount
),
CTE2 AS (
    SELECT
        *,
        TO_DAYS(consecutive_start) - ROW_NUMBER() OVER (
            PARTITION BY customer_id
            ORDER BY
                consecutive_start
        ) AS gap
    FROM
        CTE1
)
SELECT
    customer_id,
    consecutive_start,
    FROM_DAYS(TO_DAYS(consecutive_start) + COUNT(*)) AS consecutive_end
FROM
    CTE2
GROUP BY
    customer_id,
    gap
HAVING
    COUNT(*) >= 2
ORDER BY
    customer_id;
