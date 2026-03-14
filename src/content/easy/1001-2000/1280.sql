-- 1280 - Students and Examinations

SELECT
    student_id,
    student_name,
    subject_name,
    COUNT(E.student_id) AS attended_exams
FROM
    Students
    JOIN Subjects
    LEFT JOIN Examinations E USING(student_id, subject_name)
GROUP BY
    student_name,
    subject_name
ORDER BY
    student_id,
    subject_name;
