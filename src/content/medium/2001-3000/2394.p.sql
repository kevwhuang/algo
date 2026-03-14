-- 2394 - Employees With Deductions

WITH CTE AS (
    SELECT
        employee_id,
        SUM(
            CEIL(TIMESTAMPDIFF(SECOND, in_time, out_time) / 60)
        ) AS minutes
    FROM
        Logs
    GROUP BY
        employee_id
)
SELECT
    employee_id
FROM
    Employees
    LEFT JOIN CTE USING(employee_id)
WHERE
    60 * needed_hours > COALESCE(minutes, 0);
