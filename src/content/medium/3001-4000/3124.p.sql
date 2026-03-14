-- 3124 - Find Longest Calls

WITH CTE AS (
    SELECT
        first_name,
        type,
        CONCAT(
            LPAD(duration DIV 3600, 2, 0),
            ':',
            LPAD(MOD(duration DIV 60, 60), 2, 0),
            ':',
            LPAD(MOD(duration, 60), 2, 0)
        ) AS duration_formatted,
        ROW_NUMBER() OVER (
            PARTITION BY type
            ORDER BY
                duration DESC,
                first_name DESC
        ) AS r
    FROM
        Calls
        JOIN Contacts ON contact_id = id
    ORDER BY
        type DESC,
        r
)
SELECT
    first_name,
    type,
    duration_formatted
FROM
    CTE
WHERE
    r <= 3;
