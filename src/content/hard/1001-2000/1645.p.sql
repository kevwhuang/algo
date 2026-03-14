-- 1645 - Hopper Company Queries II

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
        MONTH(requested_at) AS month,
        COUNT(DISTINCT driver_id) AS rides
    FROM
        Rides
        JOIN AcceptedRides USING(ride_id)
    WHERE
        YEAR(requested_at) = 2020
    GROUP BY
        month
),
CTE2 AS (
    SELECT
        IF(YEAR(join_date) = 2020, MONTH(join_date), 1) AS month,
        COUNT(*) AS drivers
    FROM
        Drivers
    WHERE
        YEAR(join_date) <= 2020
    GROUP BY
        month
)
SELECT
    month,
    ROUND(
        IFNULL(
            100 * rides / SUM(drivers) OVER (
                ROWS BETWEEN UNBOUNDED PRECEDING
                AND CURRENT ROW
            ),
            0
        ),
        2
    ) AS working_percentage
FROM
    Base
    LEFT JOIN CTE1 USING(month)
    LEFT JOIN CTE2 USING(month);
