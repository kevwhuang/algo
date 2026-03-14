-- 1454 - Active Users

WITH CTE AS (
    SELECT
        id,
        login_date,
        RANK() OVER (
            PARTITION BY id
            ORDER BY
                login_date
        ) AS r
    FROM
        Logins
    GROUP BY
        id,
        login_date
)
SELECT
    DISTINCT C1.id,
    name
FROM
    CTE C1
    JOIN CTE C2 ON C1.id = C2.id
    AND TIMESTAMPDIFF(DAY, C1.login_date, C2.login_date) = 4
    AND C1.r + 4 = C2.r
    JOIN Accounts ON C1.id = Accounts.id
ORDER BY
    id;
