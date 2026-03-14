-- 1596 - The Most Frequently Ordered Products for Each Customer

WITH CTE AS (
    SELECT
        customer_id,
        COUNT(product_id) AS count
    FROM
        Orders
    GROUP BY
        customer_id,
        product_id
)
SELECT
    customer_id,
    product_id,
    product_name
FROM
    Orders
    JOIN Products USING(product_id)
GROUP BY
    customer_id,
    product_id
HAVING
    (customer_id, COUNT(*)) IN (
        SELECT
            customer_id,
            MAX(count)
        FROM
            CTE
        GROUP BY
            customer_id
    );
