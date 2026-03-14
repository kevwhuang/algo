-- 1384 - Total Sales Amount by Year

WITH RECURSIVE CTE AS (
    SELECT
        MIN(period_start) AS date
    FROM
        Sales
    UNION
    SELECT
        DATE_ADD(date, INTERVAL 1 DAY)
    FROM
        CTE
    WHERE
        date < (
            SELECT
                MAX(period_end)
            FROM
                Sales
        )
)
SELECT
    product_id,
    product_name,
    CAST(YEAR(date) AS CHAR) AS report_year,
    SUM(average_daily_sales) AS total_amount
FROM
    Product
    JOIN Sales USING(product_id)
    JOIN CTE ON period_start <= date
    AND date <= period_end
GROUP BY
    product_id,
    report_year
ORDER BY
    product_id,
    report_year;
