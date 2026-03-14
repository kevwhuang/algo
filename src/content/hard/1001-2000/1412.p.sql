-- 1412 - Find the Quiet Students in All Exams

WITH CTE AS (
    SELECT
        student_id,
        student_name,
        score,
        MIN(score) OVER (PARTITION BY exam_id) AS min,
        MAX(score) OVER (PARTITION BY exam_id) AS max
    FROM
        Student
        JOIN Exam USING(student_id)
)
SELECT
    DISTINCT student_id,
    student_name
FROM
    CTE
EXCEPT
SELECT
    student_id,
    student_name
FROM
    CTE
WHERE
    score IN (min, max)
ORDER BY
    student_id;
