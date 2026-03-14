-- 3554 - Find Category Recommendation Pairs

WITH CTE1 AS (
    SELECT
        DISTINCT user_id,
        category
    FROM
        ProductPurchases
        JOIN ProductInfo USING(product_id)
),
CTE2 AS (
    SELECT
        C1.user_id,
        C1.category AS category1,
        C2.category AS category2
    FROM
        CTE1 C1
        JOIN CTE1 C2 ON C1.user_id = C2.user_id
        AND C1.category < C2.category
)
SELECT
    category1,
    category2,
    COUNT(*) AS customer_count
FROM
    CTE2
GROUP BY
    category1,
    category2
HAVING
    customer_count >= 3
ORDER BY
    customer_count DESC,
    category1,
    category2;
