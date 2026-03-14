-- 3188 - Find Top Scoring Students II

SELECT
    student_id
FROM
    Enrollments
GROUP BY
    student_id
HAVING
    AVG(gpa) >= 2.5
INTERSECT
SELECT
    student_id
FROM
    Enrollments
    JOIN Students USING(student_id)
    JOIN Courses C USING(course_id, major)
GROUP BY
    student_id,
    C.major
HAVING
    SUM(
        grade = 'a'
        AND mandatory = 'yes'
    ) = (
        SELECT
            SUM(mandatory = 'yes')
        FROM
            Courses
        WHERE
            major = C.major
    )
    AND SUM(mandatory = 'no') >= 2
    AND SUM(
        grade > 'b'
        AND mandatory = 'no'
    ) = 0
ORDER BY
    student_id;
