-- 3166 - Calculate Parking Fees and Duration

WITH CTE1 AS (
    SELECT
        car_id,
        lot_id,
        SUM(fee_paid) AS fees,
        SUM(TIMESTAMPDIFF(SECOND, entry_time, exit_time)) AS seconds
    FROM
        ParkingTransactions
    GROUP BY
        car_id,
        lot_id
),
CTE2 AS (
    SELECT
        car_id,
        MAX(seconds) AS max
    FROM
        CTE1
    GROUP BY
        car_id
),
CTE3 AS (
    SELECT
        car_id,
        lot_id AS most_time_lot
    FROM
        CTE1
    WHERE
        (car_id, seconds) IN (
            SELECT
                *
            FROM
                CTE2
        )
)
SELECT
    car_id,
    SUM(fees) AS total_fee_paid,
    ROUND(
        SUM(fees) / SUM(seconds) * 3600,
        2
    ) AS avg_hourly_fee,
    most_time_lot
FROM
    CTE1
    JOIN CTE3 USING(car_id)
GROUP BY
    car_id
ORDER BY
    car_id;
