-- 1285 - Find the Start and End Number of Continuous Ranges

WITH CTE AS (
    SELECT
        log_id,
        ROW_NUMBER() OVER (
            ORDER BY
                log_id
        ) AS r
    FROM
        Logs
)
SELECT
    MIN(log_id) AS start_id,
    MAX(log_id) AS end_id
FROM
    CTE
GROUP BY
    log_id - r;
