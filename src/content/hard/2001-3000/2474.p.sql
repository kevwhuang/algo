-- 2474 - Customers With Strictly Increasing Purchases

WITH CTE AS (
    SELECT
        customer_id,
        YEAR(order_date) AS year,
        SUM(price) AS sum
    FROM
        Orders
    GROUP BY
        customer_id,
        year
)
SELECT
    C1.customer_id
FROM
    CTE C1
    LEFT JOIN CTE C2 ON C1.customer_id = C2.customer_id
    AND C1.year + 1 = C2.year
    AND C1.sum < C2.sum
GROUP BY
    customer_id
HAVING
    COUNT(*) - COUNT(C2.sum) = 1;
