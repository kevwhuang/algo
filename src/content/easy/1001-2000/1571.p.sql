-- 1571 - Warehouse Manager

SELECT
    name AS warehouse_name,
    SUM(units * length * width * height) AS volume
FROM
    Warehouse
    JOIN Products USING(product_id)
GROUP BY
    warehouse_name;
