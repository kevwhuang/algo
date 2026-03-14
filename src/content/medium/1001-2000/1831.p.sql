-- 1831 - Maximum Transaction Each Day

SELECT
    transaction_id
FROM
    Transactions
WHERE
    (DATE(day), amount) IN (
        SELECT
            DATE(day) AS date,
            MAX(amount)
        FROM
            Transactions
        GROUP BY
            date
    )
ORDER BY
    transaction_id;
