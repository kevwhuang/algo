-- 2153 - The Number of Passengers in Each Bus II

WITH RECURSIVE CTE1 AS (
    SELECT
        bus_id,
        capacity,
        COUNT(passenger_id) AS arrivals,
        RANK() OVER (
            ORDER BY
                B.arrival_time
        ) AS r
    FROM
        Buses B
        LEFT JOIN Passengers P ON B.arrival_time >= P.arrival_time
    GROUP BY
        bus_id
),
CTE2 AS (
    SELECT
        bus_id,
        capacity,
        arrivals - LAG(arrivals, 1, 0) OVER () AS delta,
        r
    FROM
        CTE1
),
CTE3 AS (
    SELECT
        bus_id,
        LEAST(capacity, delta) AS passengers_cnt,
        GREATEST(0, delta - capacity) AS rem,
        r
    FROM
        CTE2
    WHERE
        r = 1
    UNION
    SELECT
        C2.bus_id,
        LEAST(capacity, delta + rem),
        GREATEST(0, delta + rem - capacity),
        C2.r
    FROM
        CTE2 C2,
        CTE3 C3
    WHERE
        C2.r = C3.r + 1
)
SELECT
    bus_id,
    passengers_cnt
FROM
    CTE3
ORDER BY
    bus_id;
