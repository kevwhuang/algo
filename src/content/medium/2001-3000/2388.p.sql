-- 2388 - Change Null Values in a Table to the Previous Value

WITH CTE AS (
    SELECT
        *,
        SUM(drink IS NOT NULL) OVER (
            ROWS BETWEEN UNBOUNDED PRECEDING
            AND CURRENT ROW
        ) AS label,
        ROW_NUMBER() OVER () AS r
    FROM
        CoffeeShop
)
SELECT
    id,
    FIRST_VALUE(drink) OVER (
        PARTITION BY label
        ORDER BY
            r
    ) AS drink
FROM
    CTE;
