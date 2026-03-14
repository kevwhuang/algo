-- 3617 - Find Students With Study Spiral Pattern

WITH CTE1 AS (
    SELECT
        student_id,
        COUNT(*) OVER () AS count
    FROM
        Study_Sessions
    GROUP BY
        student_id
),
CTE2 AS (
    SELECT
        student_id,
        DATEDIFF(
            session_date,
            LAG(session_date) OVER (
                PARTITION BY student_id
                ORDER BY
                    session_date
            )
        ) AS diff
    FROM
        Study_Sessions
),
CTE3 AS (
    SELECT
        student_id
    FROM
        CTE1
    WHERE
        count > 1
    EXCEPT
    SELECT
        student_id
    FROM
        CTE2
    WHERE
        diff > 2
),
CTE4 AS (
    SELECT
        student_id,
        COUNT(DISTINCT subject) AS cycle_length,
        SUM(hours_studied) AS total_study_hours
    FROM
        Study_Sessions
    GROUP BY
        student_id
    HAVING
        cycle_length > 2
        AND COUNT(*) > cycle_length
        AND COUNT(*) % cycle_length = 0
)
SELECT
    *
FROM
    Students
    JOIN CTE3 USING(student_id)
    JOIN CTE4 USING(student_id)
ORDER BY
    cycle_length DESC,
    total_study_hours DESC;
