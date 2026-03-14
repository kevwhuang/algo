-- 3521 - Find Product Recommendation Pairs

SELECT
    P1.product_id AS product1_id,
    P2.product_id AS product2_id,
    P3.category AS product1_category,
    P4.category AS product2_category,
    COUNT(*) AS customer_count
FROM
    ProductPurchases P1
    JOIN ProductPurchases P2 ON P1.user_id = P2.user_id
    AND P1.product_id < P2.product_id
    JOIN ProductInfo P3 ON P1.product_id = P3.product_id
    JOIN ProductInfo P4 ON P2.product_id = P4.product_id
GROUP BY
    product1_id,
    product2_id
HAVING
    customer_count >= 3
ORDER BY
    customer_count DESC,
    product1_id,
    product2_id;
