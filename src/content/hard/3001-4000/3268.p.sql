-- 3268 - Find Overlapping Shifts II

WITH CTE AS (
    SELECT
        E1.employee_id,
        COUNT(*) OVER (PARTITION BY employee_id, E1.start_time) AS overlap,
        SUM(
            TIMESTAMPDIFF(
                MINUTE,
                E2.start_time,
                LEAST(E1.end_time, E2.end_time)
            )
        ) OVER (PARTITION BY employee_id) AS duration
    FROM
        EmployeeShifts E1
        JOIN EmployeeShifts E2 ON E1.employee_id = E2.employee_id
        AND E1.start_time < E2.start_time
        AND E1.end_time > E2.start_time
)
SELECT
    employee_id,
    IFNULL(MAX(overlap) + 1, 1) AS max_overlapping_shifts,
    IFNULL(duration, 0) AS total_overlap_duration
FROM
    EmployeeShifts
    LEFT JOIN CTE USING(employee_id)
GROUP BY
    employee_id
ORDER BY
    employee_id;
