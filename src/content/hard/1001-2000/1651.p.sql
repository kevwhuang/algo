-- 1651 - Hopper Company Queries III

WITH RECURSIVE Base AS (
    SELECT
        1 AS month
    UNION
    SELECT
        month + 1
    FROM
        Base
    WHERE
        month < 10
),
CTE AS (
    SELECT
        MONTH(requested_at) AS month,
        SUM(ride_distance) / 3 AS distance,
        SUM(ride_duration) / 3 AS duration
    FROM
        Rides
        JOIN AcceptedRides USING(ride_id)
    WHERE
        YEAR(requested_at) = 2020
    GROUP BY
        month
)
SELECT
    B.month,
    ROUND(
        IFNULL(C1.distance, 0) + IFNULL(C2.distance, 0) + IFNULL(C3.distance, 0),
        2
    ) AS average_ride_distance,
    ROUND(
        IFNULL(C1.duration, 0) + IFNULL(C2.duration, 0) + IFNULL(C3.duration, 0),
        2
    ) AS average_ride_duration
FROM
    Base B
    LEFT JOIN CTE C1 USING(month)
    LEFT JOIN CTE C2 ON B.month + 1 = C2.month
    LEFT JOIN CTE C3 ON B.month + 2 = C3.month;
