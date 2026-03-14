-- 1076 - Project Employees II

SELECT
    project_id
FROM
    Project
GROUP BY
    project_id
HAVING
    COUNT(*) = (
        SELECT
            COUNT(*) AS count
        FROM
            Project
        GROUP BY
            project_id
        ORDER BY
            count DESC
        LIMIT
            1
    );
