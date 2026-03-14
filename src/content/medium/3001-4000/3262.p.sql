-- 3262 - Find Overlapping Shifts

SELECT
    E1.employee_id,
    COUNT(*) AS overlapping_shifts
FROM
    EmployeeShifts E1
    JOIN EmployeeShifts E2 USING(employee_id)
WHERE
    E1.start_time < E2.start_time
    AND E1.end_time > E2.start_time
GROUP BY
    employee_id
ORDER BY
    employee_id;
