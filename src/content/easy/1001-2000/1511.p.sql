-- 1511 - Customer Order Frequency

SELECT
    customer_id,
    name
FROM
    Orders
    JOIN Product USING(product_id)
    JOIN Customers USING(customer_id)
GROUP BY
    customer_id
HAVING
    SUM(
        IF(order_date LIKE '2020-06%', price * quantity, 0)
    ) >= 100
    AND SUM(
        IF(order_date LIKE '2020-07%', price * quantity, 0)
    ) >= 100;
