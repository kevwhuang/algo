-- 1421 - NPV Queries

SELECT
    id,
    year,
    COALESCE(npv, 0) AS npv
FROM
    Queries
    LEFT JOIN NPV USING(id, year);
