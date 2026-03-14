-- 1635 - Hopper Company Queries I

WITH RECURSIVE Base AS (
    SELECT
        1 AS month
    UNION
    SELECT
        month + 1
    FROM
        Base
    WHERE
        month < 12
),
CTE1 AS (
    SELECT
        IF(YEAR(join_date) = 2020, MONTH(join_date), 1) AS month,
        COUNT(*) AS active_drivers
    FROM
        Drivers
    WHERE
        YEAR(join_date) <= 2020
    GROUP BY
        month
),
CTE2 AS (
    SELECT
        MONTH(requested_at) AS month,
        COUNT(*) AS accepted_rides
    FROM
        Rides
        JOIN AcceptedRides USING(ride_id)
    WHERE
        YEAR(requested_at) = 2020
    GROUP BY
        month
)
SELECT
    month,
    IFNULL(
        SUM(active_drivers) OVER (
            ROWS BETWEEN UNBOUNDED PRECEDING
            AND CURRENT ROW
        ),
        0
    ) AS active_drivers,
    IFNULL(accepted_rides, 0) AS accepted_rides
FROM
    Base
    LEFT JOIN CTE1 USING(month)
    LEFT JOIN CTE2 USING(month);
