-- 571 - Find Median Given Frequency of Numbers

WITH CTE AS (
    SELECT
        *,
        SUM(frequency) OVER (
            ORDER BY
                num
        ) AS sum
    FROM
        Numbers
)
SELECT
    ROUND(AVG(num), 1) AS median
FROM
    CTE
WHERE
    (
        SELECT
            SUM(frequency) / 2
        FROM
            Numbers
    ) BETWEEN sum - frequency
    AND sum;
