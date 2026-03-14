-- 2991 - Top Three Wineries

WITH CTE AS (
    SELECT
        country,
        CONCAT(winery, ' (', SUM(points), ')') AS winery,
        RANK() OVER (
            PARTITION BY country
            ORDER BY
                SUM(points) DESC,
                winery
        ) AS r
    FROM
        Wineries
    GROUP BY
        country,
        winery
)
SELECT
    C1.country,
    C1.winery AS top_winery,
    COALESCE(C2.winery, 'No second winery') AS second_winery,
    COALESCE(C3.winery, 'No third winery') AS third_winery
FROM
    CTE C1
    LEFT JOIN CTE C2 ON C1.country = C2.country
    AND C2.r = 2
    LEFT JOIN CTE C3 ON C1.country = C3.country
    AND C3.r = 3
WHERE
    C1.r = 1;
