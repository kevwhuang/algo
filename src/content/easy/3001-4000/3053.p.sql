-- 3053 - Classifying Triangles by Lengths

SELECT
    CASE
        WHEN a + b <= c
        OR a + c <= b
        OR b + c <= a THEN 'Not A Triangle'
        WHEN a = b
        AND b = c THEN 'Equilateral'
        WHEN a != b
        AND a != c
        AND b != c THEN 'Scalene'
        ELSE 'Isosceles'
    END AS triangle_type
FROM
    Triangles;
