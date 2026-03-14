-- 1369 - Get the Second Most Recent Activity

WITH CTE AS (
    SELECT
        *,
        IF(COUNT(*) OVER (PARTITION BY username) >= 2, 2, 1) AS count,
        ROW_NUMBER() OVER (
            PARTITION BY username
            ORDER BY
                startdate DESC
        ) AS r
    FROM
        UserActivity
)
SELECT
    username,
    activity,
    startdate,
    enddate
FROM
    CTE
WHERE
    count = r;
