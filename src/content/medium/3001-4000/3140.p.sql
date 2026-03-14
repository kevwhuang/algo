-- 3140 - Consecutive Available Seats II

WITH CTE1 AS (
    SELECT
        seat_id,
        seat_id - ROW_NUMBER() OVER (
            ORDER BY
                seat_id
        ) AS gap
    FROM
        Cinema
    WHERE
        free = 1
),
CTE2 AS (
    SELECT
        MIN(seat_id) AS first_seat_id,
        MAX(seat_id) AS last_seat_id,
        MAX(seat_id) - MIN(seat_id) + 1 AS consecutive_seats_len
    FROM
        CTE1
    GROUP BY
        gap
)
SELECT
    *
FROM
    CTE2
WHERE
    consecutive_seats_len = (
        SELECT
            MAX(consecutive_seats_len)
        FROM
            CTE2
    );
