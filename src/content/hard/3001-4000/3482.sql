-- 3482 - Analyze Organization Hierarchy

WITH RECURSIVE CTE1 AS (
    SELECT
        employee_id AS id,
        employee_name AS name,
        employee_id,
        employee_name,
        manager_id,
        salary
    FROM
        Employees
    UNION
    SELECT
        id,
        name,
        E.employee_id,
        E.employee_name,
        E.manager_id,
        E.salary
    FROM
        CTE1 C,
        Employees E
    WHERE
        C.employee_id = E.manager_id
),
CTE2 AS (
    SELECT
        employee_id AS id,
        1 AS level
    FROM
        Employees
    WHERE
        manager_id IS NULL
    UNION
    SELECT
        employee_id,
        level + 1
    FROM
        CTE2,
        Employees
    WHERE
        id = manager_id
)
SELECT
    id AS employee_id,
    name AS employee_name,
    level,
    COUNT(*) - 1 AS team_size,
    SUM(salary) AS budget
FROM
    CTE1
    JOIN CTE2 USING(id)
GROUP BY
    id
ORDER BY
    level,
    budget DESC,
    employee_name;
