-- 2252 - Dynamic Pivoting of a Table

CREATE PROCEDURE pivotProducts() BEGIN
SET
    group_concat_max_len = 5000;
SELECT
    GROUP_CONCAT(
        DISTINCT CONCAT(
            'SUM(IF(store = "',
            LOWER(store),
            '", price, NULL)) AS ',
            LOWER(store)
        )
        ORDER BY
            store SEPARATOR ', '
    ) INTO @query
FROM
    Products;
SET
    @query = CONCAT(
        'SELECT product_id, ',
        @query,
        ' FROM Products GROUP BY product_id'
    );
PREPARE statement
FROM
    @query;
EXECUTE statement;
END
