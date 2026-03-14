-- 1205 - Monthly Transactions II

WITH CTE1 AS (
    SELECT
        SUBSTRING(trans_date, 1, 7) AS month,
        country,
        COUNT(*) AS approved_count,
        SUM(amount) AS approved_amount
    FROM
        Transactions
    WHERE
        state = 'approved'
    GROUP BY
        month,
        country
),
CTE2 AS (
    SELECT
        SUBSTRING(C.trans_date, 1, 7) AS month,
        country,
        COUNT(*) AS chargeback_count,
        SUM(amount) AS chargeback_amount
    FROM
        Transactions
        JOIN Chargebacks C ON id = trans_id
    GROUP BY
        month,
        country
),
Base AS (
    SELECT
        month,
        country
    FROM
        CTE1
    UNION
    SELECT
        month,
        country
    FROM
        CTE2
)
SELECT
    month,
    country,
    IFNULL(approved_count, 0) AS approved_count,
    IFNULL(approved_amount, 0) AS approved_amount,
    IFNULL(chargeback_count, 0) AS chargeback_count,
    IFNULL(chargeback_amount, 0) AS chargeback_amount
FROM
    Base
    LEFT JOIN CTE1 USING(month, country)
    LEFT JOIN CTE2 USING(month, country)
WHERE
    approved_count > 0
    OR chargeback_count > 0;
