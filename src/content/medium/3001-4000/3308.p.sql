-- 3308 - Find Top Performing Driver

WITH CTE AS (
    SELECT
        fuel_type,
        driver_id,
        ROUND(AVG(rating), 2) AS rating,
        SUM(distance) AS distance,
        RANK() OVER (
            PARTITION BY fuel_type
            ORDER BY
                AVG(rating) DESC,
                SUM(distance) DESC,
                accidents
        ) AS r
    FROM
        Vehicles
        JOIN Drivers USING(driver_id)
        JOIN Trips USING(vehicle_id)
    GROUP BY
        fuel_type,
        driver_id
)
SELECT
    fuel_type,
    driver_id,
    rating,
    distance
FROM
    CTE
WHERE
    r = 1
ORDER BY
    fuel_type;
