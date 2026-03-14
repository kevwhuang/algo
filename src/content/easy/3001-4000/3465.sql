-- 3465 - Find Products With Valid Serial Numbers

SELECT
    *
FROM
    Products
WHERE
    description REGEXP 'SN[0-9]{4}-[0-9]{4}(?![0-9])'
ORDER BY
    product_id;
