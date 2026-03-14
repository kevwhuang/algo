-- 618 - Students Report by Geography

WITH CTE AS (
    SELECT
        *,
        ROW_NUMBER() OVER (
            PARTITION BY continent
            ORDER BY
                name
        ) AS r
    FROM
        Student
)
SELECT
    IF(continent = 'america', name, NULL) AS america,
    MIN(IF(continent = 'asia', name, NULL)) AS asia,
    MIN(IF(continent = 'europe', name, NULL)) AS europe
FROM
    CTE
GROUP BY
    r;
