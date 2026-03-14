-- 613 - Shortest Distance in a Line

SELECT
    MIN(P1.x - P2.x) AS shortest
FROM
    Point P1,
    Point P2
WHERE
    P1.x > P2.x;
