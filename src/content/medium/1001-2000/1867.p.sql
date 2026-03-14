-- 1867 - Orders With Maximum Quantity Above Average

SELECT
    order_id
FROM
    OrdersDetails
GROUP BY
    order_id
HAVING
    MAX(quantity) > (
        SELECT
            AVG(quantity) AS average
        FROM
            OrdersDetails
        GROUP BY
            order_id
        ORDER BY
            average DESC
        LIMIT
            1
    );
