-- 3230 - Customer Purchasing Behavior Analysis

WITH CTE1 AS (
    SELECT
        customer_id,
        category,
        RANK() OVER (
            PARTITION BY customer_id
            ORDER BY
                COUNT(product_id) DESC,
                MAX(transaction_date) DESC
        ) AS r
    FROM
        Transactions
        JOIN Products USING(product_id)
    GROUP BY
        customer_id,
        category
),
CTE2 AS (
    SELECT
        customer_id,
        COUNT(*) AS unique_categories
    FROM
        CTE1
    GROUP BY
        customer_id
)
SELECT
    customer_id,
    ROUND(SUM(amount), 2) AS total_amount,
    COUNT(*) AS transaction_count,
    unique_categories,
    ROUND(AVG(amount), 2) AS avg_transaction_amount,
    category AS top_category,
    ROUND(10 * COUNT(*) + SUM(amount) / 100, 2) AS loyalty_score
FROM
    Transactions
    JOIN CTE1 USING(customer_id)
    JOIN CTE2 USING(customer_id)
WHERE
    r = 1
GROUP BY
    customer_id
ORDER BY
    loyalty_score DESC,
    customer_id;
