-- 1709 - Biggest Window Between Visits

WITH CTE AS (
    SELECT
        user_id,
        DATEDIFF(
            LEAD(visit_date, 1, '2021-1-1') OVER (
                PARTITION BY user_id
                ORDER BY
                    visit_date
            ),
            visit_date
        ) AS days
    FROM
        UserVisits
)
SELECT
    user_id,
    MAX(days) AS biggest_window
FROM
    CTE
GROUP BY
    user_id
ORDER BY
    user_id;
