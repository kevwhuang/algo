-- 3182 - Find Top Scoring Students

SELECT
    S.student_id
FROM
    Students S
    JOIN Courses C USING(major)
    LEFT JOIN Enrollments E ON S.student_id = E.student_id
    AND C.course_id = E.course_id
    AND grade = 'A'
GROUP BY
    student_id
HAVING
    COUNT(credits) = COUNT(semester)
ORDER BY
    student_id;
