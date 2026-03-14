-- 1083 - Sales Analysis II

SELECT
    buyer_id
FROM
    Product P
    JOIN Sales S USING(product_id)
GROUP BY
    buyer_id
HAVING
    SUM(product_name = 'S8') > 0
    AND SUM(product_name = 'iPhone') = 0;
