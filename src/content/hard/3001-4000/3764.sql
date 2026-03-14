-- 3764 - Most Common Course Pairs

WITH CTE1 AS (
    SELECT
        user_id
    FROM
        Course_Completions
    GROUP BY
        user_id
    HAVING
        COUNT(*) >= 5
        AND AVG(course_rating) >= 4
),
CTE2 AS (
    SELECT
        course_name AS first_course,
        LEAD(course_name) OVER (
            PARTITION BY user_id
            ORDER BY
                completion_date
        ) AS second_course
    FROM
        Course_Completions
        JOIN CTE1 USING(user_id)
)
SELECT
    first_course,
    second_course,
    COUNT(*) AS transition_count
FROM
    CTE2
WHERE
    second_course IS NOT NULL
GROUP BY
    first_course,
    second_course
ORDER BY
    transition_count DESC,
    first_course,
    second_course;
