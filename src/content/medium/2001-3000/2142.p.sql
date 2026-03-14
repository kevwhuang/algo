-- 2142 - The Number of Passengers in Each Bus I

WITH CTE AS (
    SELECT
        *,
        LAG(arrival_time, 1, -1) OVER (
            ORDER BY
                arrival_time
        ) AS previous
    FROM
        Buses
)
SELECT
    bus_id,
    COUNT(passenger_id) AS passengers_cnt
FROM
    CTE C
    LEFT JOIN Passengers P ON C.arrival_time >= P.arrival_time
    AND C.previous < P.arrival_time
GROUP BY
    bus_id
ORDER BY
    bus_id;
