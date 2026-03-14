-- 2783 - Flight Occupancy and Waitlist Analysis

SELECT
    flight_id,
    LEAST(capacity, COUNT(P.flight_id)) AS booked_cnt,
    COUNT(P.flight_id) - LEAST(capacity, COUNT(P.flight_id)) AS waitlist_cnt
FROM
    Flights
    LEFT JOIN Passengers P USING(flight_id)
GROUP BY
    flight_id
ORDER BY
    flight_id;
