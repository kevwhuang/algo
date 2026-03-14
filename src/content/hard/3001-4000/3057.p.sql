-- 3057 - Employees Project Allocation

WITH CTE AS (
    SELECT
        employee_id,
        project_id,
        name AS employee_name,
        workload AS project_workload,
        AVG(workload) OVER (PARTITION BY team) AS average
    FROM
        Project
        JOIN Employees USING(employee_id)
)
SELECT
    employee_id,
    project_id,
    employee_name,
    project_workload
FROM
    CTE
WHERE
    project_workload > average
ORDER BY
    employee_id,
    project_id;
