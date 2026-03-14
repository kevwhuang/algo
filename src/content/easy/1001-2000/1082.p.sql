-- 1082 - Sales Analysis I

SELECT
    seller_id
FROM
    Sales
GROUP BY
    seller_id
HAVING
    SUM(price) = (
        SELECT
            SUM(price) AS sum
        FROM
            Sales
        GROUP BY
            seller_id
        ORDER BY
            sum DESC
        LIMIT
            1
    );
