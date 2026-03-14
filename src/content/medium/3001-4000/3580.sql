-- 3580 - Find Consistently Improving Employees

WITH CTE1 AS (
    SELECT
        employee_id,
        rating AS r1,
        LEAD(rating) OVER (
            PARTITION BY employee_id
            ORDER BY
                review_date DESC
        ) AS r2,
        LEAD(rating, 2) OVER (
            PARTITION BY employee_id
            ORDER BY
                review_date DESC
        ) AS r3
    FROM
        Performance_Reviews
),
CTE2 AS (
    SELECT
        *
    FROM
        CTE1
    GROUP BY
        employee_id
)
SELECT
    employee_id,
    name,
    r1 - r3 AS improvement_score
FROM
    CTE2
    JOIN Employees USING(employee_id)
WHERE
    r1 > r2
    AND r2 > r3
ORDER BY
    improvement_score DESC,
    name;
