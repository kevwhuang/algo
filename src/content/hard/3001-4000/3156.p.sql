-- 3156 - Employee Task Duration and Concurrent Tasks

WITH CTE1 AS (
    SELECT
        employee_id,
        start_time AS time,
        1 AS delta
    FROM
        Tasks
    UNION
    ALL
    SELECT
        employee_id,
        end_time,
        -1
    FROM
        Tasks
),
CTE2 AS (
    SELECT
        employee_id,
        time,
        LEAD(time) OVER (
            PARTITION BY employee_id
            ORDER BY
                time
        ) AS next,
        SUM(delta) OVER (
            PARTITION BY employee_id
            ORDER BY
                time
        ) AS concurrent
    FROM
        CTE1
)
SELECT
    employee_id,
    FLOOR(
        SUM(
            IF(concurrent, TIMESTAMPDIFF(MINUTE, time, next), 0)
        ) / 60
    ) AS total_task_hours,
    MAX(concurrent) AS max_concurrent_tasks
FROM
    CTE2
GROUP BY
    employee_id
ORDER BY
    employee_id;
