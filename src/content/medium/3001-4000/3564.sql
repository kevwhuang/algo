-- 3564 - Seasonal Sales Analysis

WITH CTE AS (
    SELECT
        CASE
            WHEN MONTH(sale_date) BETWEEN 3
            AND 5 THEN 'Spring'
            WHEN MONTH(sale_date) BETWEEN 6
            AND 8 THEN 'Summer'
            WHEN MONTH(sale_date) BETWEEN 9
            AND 11 THEN 'Fall'
            ELSE 'Winter'
        END AS season,
        category,
        SUM(quantity) AS total_quantity,
        SUM(quantity * price) AS total_revenue
    FROM
        Sales
        JOIN Products USING(product_id)
    GROUP BY
        category,
        season
    ORDER BY
        season,
        total_quantity DESC,
        total_revenue DESC
)
SELECT
    *
FROM
    CTE
GROUP BY
    season;
