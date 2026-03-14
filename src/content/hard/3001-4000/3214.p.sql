-- 3214 - Year on Year Growth Rate

WITH CTE AS (
    SELECT
        YEAR(transaction_date) AS year,
        product_id,
        SUM(spend) AS sum
    FROM
        User_Transactions
    GROUP BY
        year,
        product_id
)
SELECT
    C1.year,
    C1.product_id,
    C1.sum AS curr_year_spend,
    C2.sum AS prev_year_spend,
    ROUND(100 * (C1.sum - C2.sum) / C2.sum, 2) AS yoy_rate
FROM
    CTE C1
    LEFT JOIN CTE C2 ON C1.product_id = C2.product_id
    AND C1.year - 1 = C2.year
ORDER BY
    product_id,
    year;
