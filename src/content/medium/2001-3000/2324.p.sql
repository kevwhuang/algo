-- 2324 - Product Sales Analysis IV

WITH CTE AS (
    SELECT
        user_id,
        product_id,
        price * SUM(quantity) AS cost
    FROM
        Sales
        JOIN Product USING(product_id)
    GROUP BY
        user_id,
        product_id
)
SELECT
    user_id,
    product_id
FROM
    CTE
WHERE
    (user_id, cost) IN (
        SELECT
            user_id,
            MAX(cost)
        FROM
            CTE
        GROUP BY
            user_id
    );
