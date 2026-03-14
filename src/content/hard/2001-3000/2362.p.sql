-- 2362 - Generate the Invoice

WITH CTE AS (
    SELECT
        invoice_id
    FROM
        Purchases
        JOIN Products USING(product_id)
    GROUP BY
        invoice_id
    ORDER BY
        SUM(quantity * price) DESC,
        invoice_id
    LIMIT
        1
)
SELECT
    product_id,
    quantity,
    quantity * price AS price
FROM
    Purchases
    JOIN Products USING(product_id)
WHERE
    invoice_id = (
        SELECT
            *
        FROM
            CTE
    );
