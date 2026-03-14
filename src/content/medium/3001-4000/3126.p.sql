-- 3126 - Server Utilization Time

WITH CTE AS (
    SELECT
        session_status,
        status_time AS time1,
        LEAD(status_time, 1) OVER () AS time2
    FROM
        Servers
)
SELECT
    FLOOR(SUM(TIMESTAMPDIFF(SECOND, time1, time2)) / 86400) AS total_uptime_days
FROM
    CTE
WHERE
    session_status = 'start';
