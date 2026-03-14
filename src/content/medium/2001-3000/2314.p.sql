-- 2314 - The First Day of the Maximum Recorded Degree in Each City

WITH CTE AS (
    SELECT
        city_id,
        MAX(degree) AS degree
    FROM
        Weather
    GROUP BY
        city_id
)
SELECT
    city_id,
    MIN(day) AS day,
    degree
FROM
    Weather
    JOIN CTE USING(city_id, degree)
GROUP BY
    city_id
ORDER BY
    city_id;
