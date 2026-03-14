-- 601 - Human Traffic of Stadium

WITH CTE AS (
    SELECT
        *,
        LAG(people, 2) OVER () AS prev2,
        LAG(people, 1) OVER () AS prev1,
        LEAD(people, 1) OVER () AS next1,
        LEAD(people, 2) OVER () AS next2
    FROM
        Stadium
)
SELECT
    id,
    visit_date,
    people
FROM
    CTE
WHERE
    people >= 100
    AND (
        prev2 >= 100
        AND prev1 >= 100
        OR prev1 >= 100
        AND next1 >= 100
        OR next1 >= 100
        AND next2 >= 100
    );
