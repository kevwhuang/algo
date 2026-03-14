-- 2292 - Products With Three or More Orders in Two Consecutive Years

WITH CTE AS (
    SELECT
        product_id,
        YEAR(purchase_date) AS year
    FROM
        Orders
    GROUP BY
        product_id,
        year
    HAVING
        COUNT(*) >= 3
)
SELECT
    DISTINCT product_id
FROM
    CTE C1
    JOIN CTE C2 USING(product_id)
WHERE
    C1.year + 1 = C2.year;
