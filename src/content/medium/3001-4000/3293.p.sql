-- 3293 - Calculate Product Final Price

SELECT
    product_id,
    price * (1 - IFNULL(discount, 0) / 100) AS final_price,
    category
FROM
    Products
    LEFT JOIN Discounts USING(category)
ORDER BY
    product_id;
