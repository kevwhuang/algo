-- 1068 - Product Sales Analysis I

SELECT
    product_name,
    year,
    price
FROM
    Sales S
    JOIN Product P USING(product_id);
