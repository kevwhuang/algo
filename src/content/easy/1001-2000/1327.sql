-- 1327 - List the Products Ordered in a Period

SELECT
    product_name,
    SUM(unit) AS unit
FROM
    Orders
    JOIN Products USING(product_id)
WHERE
    order_date LIKE '2020-02%'
GROUP BY
    product_id
HAVING
    unit >= 100;
