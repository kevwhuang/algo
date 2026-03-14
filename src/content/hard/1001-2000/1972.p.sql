-- 1972 - First and Last Call on the Same Day

WITH CTE1 AS (
    SELECT
        *
    FROM
        Calls
    UNION
    SELECT
        recipient_id,
        caller_id,
        call_time
    FROM
        Calls
),
CTE2 AS (
    SELECT
        caller_id,
        recipient_id,
        MIN(call_time) AS min,
        MAX(call_time) AS max
    FROM
        CTE1
    GROUP BY
        caller_id,
        DATE(call_time)
)
SELECT
    DISTINCT caller_id AS user_id
FROM
    CTE2
WHERE
    (caller_id, recipient_id, min) IN (
        SELECT
            *
        FROM
            CTE1
    )
    AND (caller_id, recipient_id, max) IN (
        SELECT
            *
        FROM
            CTE1
    );
