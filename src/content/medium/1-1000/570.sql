-- 570 - Managers With at Least 5 Direct Reports

SELECT
    name
FROM
    Employee
WHERE
    id IN (
        SELECT
            managerid
        FROM
            Employee
        GROUP BY
            managerid
        HAVING
            COUNT(*) >= 5
    );
