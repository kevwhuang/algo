-- 2159 - Order Two Columns Independently

WITH CTE1 AS (
    SELECT
        first_col,
        ROW_NUMBER() OVER () AS r
    FROM
        Data
    ORDER BY
        first_col
),
CTE2 AS (
    SELECT
        second_col,
        ROW_NUMBER() OVER () AS r
    FROM
        Data
    ORDER BY
        second_col DESC
)
SELECT
    first_col,
    second_col
FROM
    CTE1
    JOIN CTE2 USING(r);
