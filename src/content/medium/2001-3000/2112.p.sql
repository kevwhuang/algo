-- 2112 - The Airport With the Most Traffic

WITH CTE1 AS (
    SELECT
        departure_airport AS airport,
        SUM(flights_count) AS count
    FROM
        Flights
    GROUP BY
        airport
    UNION
    ALL
    SELECT
        arrival_airport AS airport,
        SUM(flights_count)
    FROM
        Flights
    GROUP BY
        airport
),
CTE2 AS (
    SELECT
        airport,
        SUM(count) AS count
    FROM
        CTE1
    GROUP BY
        airport
)
SELECT
    airport AS airport_id
FROM
    CTE2
WHERE
    count = (
        SELECT
            MAX(count)
        FROM
            CTE2
    );
