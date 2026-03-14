-- 3236 - CEO Subordinate Hierarchy

WITH RECURSIVE CTE AS (
    SELECT
        employee_id AS subordinate_id,
        employee_name AS subordinate_name,
        0 AS hierarchy_level,
        salary
    FROM
        Employees
    WHERE
        manager_id IS NULL
    UNION
    SELECT
        employee_id,
        employee_name,
        hierarchy_level + 1,
        E.salary
    FROM
        CTE,
        Employees E
    WHERE
        subordinate_id = manager_id
)
SELECT
    subordinate_id,
    subordinate_name,
    hierarchy_level,
    salary - (
        SELECT
            salary
        FROM
            Employees
        WHERE
            manager_id IS NULL
    ) AS salary_difference
FROM
    CTE
WHERE
    hierarchy_level
ORDER BY
    hierarchy_level,
    subordinate_id;
