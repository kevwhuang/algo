-- 1543 - Fix Product Name Format

WITH CTE AS (
    SELECT
        TRIM(LOWER(product_name)) AS product_name,
        LEFT(sale_date, 7) AS sale_date
    FROM
        Sales
)
SELECT
    *,
    COUNT(*) AS total
FROM
    CTE
GROUP BY
    product_name,
    sale_date
ORDER BY
    product_name,
    sale_date;
