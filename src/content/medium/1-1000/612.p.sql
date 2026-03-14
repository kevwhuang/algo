-- 612 - Shortest Distance in a Plane

WITH CTE AS (
    SELECT
        ROUND(
            SQRT(POWER(P1.x - P2.x, 2) + POWER(P1.y - P2.y, 2)),
            2
        ) AS distance
    FROM
        Point2D P1,
        Point2D P2
)
SELECT
    MIN(distance) AS shortest
FROM
    CTE
WHERE
    distance > 0;
