-- 1565 - Unique Orders and Customers Per Month

SELECT
    LEFT(order_date, 7) AS month,
    COUNT(order_id) AS order_count,
    COUNT(DISTINCT customer_id) AS customer_count
FROM
    Orders
WHERE
    invoice > 20
GROUP BY
    month;
