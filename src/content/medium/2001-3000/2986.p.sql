-- 2986 - Find Third Transaction

WITH CTE AS (
    SELECT
        *,
        ROW_NUMBER() OVER (
            PARTITION BY user_id
            ORDER BY
                transaction_date
        ) AS r
    FROM
        Transactions
)
SELECT
    C3.user_id,
    C3.spend AS third_transaction_spend,
    C3.transaction_date AS third_transaction_date
FROM
    CTE C1
    JOIN CTE C2 ON C1.user_id = C2.user_id
    AND C1.r + 1 = C2.r
    JOIN CTE C3 ON C1.user_id = C3.user_id
    AND C1.spend < C3.spend
    AND C2.spend < C3.spend
    AND C1.r + 2 = C3.r
WHERE
    C3.r = 3
ORDER BY
    user_id;
