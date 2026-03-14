-- 3601 - Find Drivers With Improved Fuel Efficiency

WITH CTE1 AS (
    SELECT
        driver_id,
        AVG(distance_km / fuel_consumed) AS avg1
    FROM
        Trips
    WHERE
        MONTH(trip_date) <= 6
    GROUP BY
        driver_id
),
CTE2 AS (
    SELECT
        driver_id,
        AVG(distance_km / fuel_consumed) AS avg2
    FROM
        Trips
    WHERE
        MONTH(trip_date) >= 7
    GROUP BY
        driver_id
)
SELECT
    driver_id,
    driver_name,
    ROUND(avg1, 2) AS first_half_avg,
    ROUND(avg2, 2) AS second_half_avg,
    ROUND(avg2 - avg1, 2) AS efficiency_improvement
FROM
    Drivers
    JOIN CTE1 USING(driver_id)
    JOIN CTE2 USING(driver_id)
HAVING
    efficiency_improvement > 0
ORDER BY
    efficiency_improvement DESC,
    driver_name;
