-- 2686 - Immediate Food Delivery III

SELECT
    order_date,
    ROUND(
        100 * SUM(order_date = customer_pref_delivery_date) / COUNT(delivery_id),
        2
    ) AS immediate_percentage
FROM
    Delivery
GROUP BY
    order_date
ORDER BY
    order_date;
