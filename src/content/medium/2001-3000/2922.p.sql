-- 2922 - Market Analysis III

WITH CTE AS (
    SELECT
        seller_id,
        COUNT(DISTINCT item_id) AS num_items
    FROM
        Orders
        JOIN Items USING(item_id)
        JOIN Users USING(seller_id)
    WHERE
        item_brand <> favorite_brand
    GROUP BY
        seller_id
)
SELECT
    *
FROM
    CTE
WHERE
    num_items IN (
        SELECT
            MAX(num_items)
        FROM
            CTE
    )
ORDER BY
    seller_id;
