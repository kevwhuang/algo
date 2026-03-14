-- 1607 - Sellers With No Sales

SELECT
    seller_name
FROM
    Seller
WHERE
    seller_name NOT IN (
        SELECT
            DISTINCT seller_name
        FROM
            Seller
            JOIN Orders USING(seller_id)
        WHERE
            sale_date LIKE '2020%'
    )
ORDER BY
    seller_name;
