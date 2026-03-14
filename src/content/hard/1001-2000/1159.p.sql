-- 1159 - Market Analysis II

WITH CTE AS (
    SELECT
        seller_id,
        item_brand,
        ROW_NUMBER() OVER (
            PARTITION BY seller_id
            ORDER BY
                order_date
        ) AS r
    FROM
        Orders
        JOIN Items USING(item_id)
)
SELECT
    user_id AS seller_id,
    IF(favorite_brand = item_brand, 'yes', 'no') AS 2nd_item_fav_brand
FROM
    Users
    LEFT JOIN CTE ON user_id = seller_id
    AND r = 2;
