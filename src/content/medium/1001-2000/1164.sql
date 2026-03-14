-- 1164 - Product Price at a Given Date

SELECT
    DISTINCT product_id,
    10 AS price
FROM
    Products
WHERE
    product_id NOT IN (
        SELECT
            product_id
        FROM
            Products
        WHERE
            change_date <= '2019-08-16'
    )
UNION
SELECT
    product_id,
    FIRST_VALUE(new_price) OVER (
        PARTITION BY product_id
        ORDER BY
            change_date DESC
    )
FROM
    Products
WHERE
    change_date <= '2019-08-16';
