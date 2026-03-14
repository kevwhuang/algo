-- 2329 - Product Sales Analysis V

SELECT
    user_id,
    SUM(price * quantity) AS spending
FROM
    Sales
    JOIN Product USING(product_id)
GROUP BY
    user_id
ORDER BY
    spending DESC,
    user_id;
