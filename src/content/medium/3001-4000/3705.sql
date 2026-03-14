-- 3705 - Find Golden Hour Customers

SELECT
    customer_id,
    COUNT(*) AS total_orders,
    ROUND(
        (
            SUM(
                TIME(order_timestamp) BETWEEN '11'
                AND '14'
            ) + SUM(
                TIME(order_timestamp) BETWEEN '18'
                AND '21'
            )
        ) / COUNT(*) * 100
    ) AS peak_hour_percentage,
    ROUND(AVG(order_rating), 2) AS average_rating
FROM
    Restaurant_Orders
GROUP BY
    customer_id
HAVING
    total_orders >= 3
    AND peak_hour_percentage >= 60
    AND average_rating >= 4
    AND COUNT(order_rating) / total_orders >= 0.5
ORDER BY
    average_rating DESC,
    customer_id DESC;
