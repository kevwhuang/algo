-- 2793 - Status of Flight Tickets

WITH CTE AS (
    SELECT
        passenger_id,
        capacity,
        RANK() OVER (
            PARTITION BY flight_id
            ORDER BY
                booking_time
        ) AS r
    FROM
        Passengers
        JOIN Flights USING(flight_id)
)
SELECT
    passenger_id,
    IF(r <= capacity, 'Confirmed', 'Waitlist') AS status
FROM
    CTE
ORDER BY
    passenger_id;
