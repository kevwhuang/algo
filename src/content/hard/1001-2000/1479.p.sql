-- 1479 - Sales by Day of the Week

SELECT
    item_category AS category,
    SUM(IF(DAYOFWEEK(order_date) = 2, quantity, 0)) AS monday,
    SUM(IF(DAYOFWEEK(order_date) = 3, quantity, 0)) AS tuesday,
    SUM(IF(DAYOFWEEK(order_date) = 4, quantity, 0)) AS wednesday,
    SUM(IF(DAYOFWEEK(order_date) = 5, quantity, 0)) AS thursday,
    SUM(IF(DAYOFWEEK(order_date) = 6, quantity, 0)) AS friday,
    SUM(IF(DAYOFWEEK(order_date) = 7, quantity, 0)) AS saturday,
    SUM(IF(DAYOFWEEK(order_date) = 1, quantity, 0)) AS sunday
FROM
    Items
    LEFT JOIN Orders USING(item_id)
GROUP BY
    category
ORDER BY
    category;
