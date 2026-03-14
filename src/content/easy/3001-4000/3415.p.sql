-- 3415 - Find Products With Three Consecutive Digits

SELECT
    *
FROM
    Products
WHERE
    name REGEXP '[0-9]{3}'
    AND name NOT REGEXP '[0-9]{4}'
ORDER BY
    product_id;
