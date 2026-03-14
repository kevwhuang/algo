-- 3061 - Calculate Trapping Rain Water

WITH CTE AS (
    SELECT
        height,
        MAX(height) OVER (
            ORDER BY
                id
        ) AS max_left,
        MAX(height) OVER (
            ORDER BY
                id DESC
        ) AS max_right
    FROM
        Heights
)
SELECT
    SUM(LEAST(max_left, max_right) - height) AS total_trapped_water
FROM
    CTE;
