-- 1532 - The Most Recent Three Orders

WITH CTE AS (
    SELECT
        name AS customer_name,
        customer_id,
        order_id,
        order_date,
        DENSE_RANK() OVER (
            PARTITION BY customer_id
            ORDER BY
                order_date DESC
        ) AS r
    FROM
        Orders
        JOIN Customers USING(customer_id)
    ORDER BY
        customer_name,
        customer_id,
        order_date DESC
)
SELECT
    customer_name,
    customer_id,
    order_id,
    order_date
FROM
    CTE
WHERE
    r <= 3;
