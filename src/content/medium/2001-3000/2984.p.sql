-- 2984 - Find Peak Calling Hours for Each City

WITH CTE AS (
    SELECT
        city,
        HOUR(call_time) AS peak_calling_hour,
        COUNT(*) AS number_of_calls
    FROM
        Calls
    GROUP BY
        city,
        peak_calling_hour
)
SELECT
    *
FROM
    CTE
WHERE
    (city, number_of_calls) IN (
        SELECT
            city,
            MAX(number_of_calls)
        FROM
            CTE
        GROUP BY
            city
    )
ORDER BY
    peak_calling_hour DESC,
    city DESC;
