-- 1084 - Sales Analysis III

WITH CTE AS (
    SELECT
        sale_date,
        product_id,
        product_name
    FROM
        Sales
        JOIN Product USING(product_id)
)
SELECT
    DISTINCT product_id,
    product_name
FROM
    CTE
WHERE
    sale_date BETWEEN '2019-01-01'
    AND '2019-03-31'
    AND product_id NOT IN (
        SELECT
            product_id
        FROM
            CTE
        WHERE
            sale_date NOT BETWEEN '2019-01-01'
            AND '2019-03-31'
    );
