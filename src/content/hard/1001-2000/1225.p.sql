-- 1225 - Report Contiguous Dates

WITH CTE AS (
    SELECT
        'failed' AS period_state,
        fail_date AS date,
        DAYOFYEAR(fail_date) - ROW_NUMBER() OVER (
            ORDER BY
                fail_date
        ) AS gap
    FROM
        Failed
    WHERE
        YEAR(fail_date) = 2019
    UNION
    SELECT
        'succeeded',
        success_date,
        DAYOFYEAR(success_date) - ROW_NUMBER() OVER (
            ORDER BY
                success_date
        )
    FROM
        Succeeded
    WHERE
        YEAR(success_date) = 2019
)
SELECT
    period_state,
    MIN(date) AS start_date,
    MAX(date) AS end_date
FROM
    CTE
GROUP BY
    period_state,
    gap
ORDER BY
    start_date;
