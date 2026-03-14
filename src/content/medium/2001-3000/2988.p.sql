-- 2988 - Manager of the Largest Department

SELECT
    emp_name AS manager_name,
    dep_id
FROM
    Employees
GROUP BY
    dep_id
HAVING
    COUNT(dep_id) = (
        SELECT
            COUNT(*) AS count
        FROM
            Employees
        GROUP BY
            dep_id
        ORDER BY
            count DESC
        LIMIT
            1
    )
ORDER BY
    dep_id;
