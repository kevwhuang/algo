-- 1555 - Bank Account Summary

WITH CTE1 AS (
    SELECT
        paid_to AS user_id,
        SUM(amount) AS credit
    FROM
        Transactions
    GROUP BY
        paid_to
),
CTE2 AS (
    SELECT
        paid_by AS user_id,
        - SUM(amount) AS credit
    FROM
        Transactions
    GROUP BY
        paid_by
),
CTE3 AS (
    SELECT
        user_id,
        user_name,
        U.credit + IFNULL(CTE1.credit, 0) + IFNULL(CTE2.credit, 0) AS credit
    FROM
        Users U
        LEFT JOIN CTE1 USING(user_id)
        LEFT JOIN CTE2 USING(user_id)
)
SELECT
    *,
    IF(credit < 0, 'Yes', 'No') AS credit_limit_breached
FROM
    CTE3;
