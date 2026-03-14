-- 2978 - Symmetric Coordinates

SELECT
    *
FROM
    Coordinates
WHERE
    x = y
GROUP BY
    x,
    y
HAVING
    COUNT(*) >= 2
UNION
SELECT
    C1.x,
    C1.y
FROM
    Coordinates C1
    JOIN Coordinates C2 ON C1.x = C2.y
    AND C1.y = C2.x
    AND C1.x < C2.x
ORDER BY
    x,
    y;
