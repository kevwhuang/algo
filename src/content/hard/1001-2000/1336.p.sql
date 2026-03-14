-- 1336 - Number of Transactions Per Visit

WITH RECURSIVE CTE AS (
    SELECT
        COUNT(T.user_id) AS transactions_count
    FROM
        Visits V
        LEFT JOIN Transactions T ON V.user_id = T.user_id
        AND visit_date = transaction_date
    GROUP BY
        V.user_id,
        visit_date
),
Base AS (
    SELECT
        0 AS transactions_count
    UNION
    SELECT
        transactions_count + 1
    FROM
        Base
    WHERE
        transactions_count < (
            SELECT
                MAX(transactions_count)
            FROM
                CTE
        )
)
SELECT
    *,
    COUNT(C.transactions_count) AS visits_count
FROM
    Base
    LEFT JOIN CTE C USING(transactions_count)
GROUP BY
    transactions_count;
