-- 2253 - Dynamic Unpivoting of a Table

CREATE PROCEDURE unpivotProducts() BEGIN
SET
    group_concat_max_len = 5000;
SELECT
    GROUP_CONCAT(
        'SELECT product_id, "',
        column_name,
        '" AS store, ',
        column_name,
        ' AS price FROM Products WHERE ',
        column_name SEPARATOR ' UNION '
    ) INTO @query
FROM
    INFORMATION_SCHEMA.COLUMNS
WHERE
    table_name = 'Products'
    AND column_name <> 'product_id';
PREPARE statement
FROM
    @query;
EXECUTE statement;
END
