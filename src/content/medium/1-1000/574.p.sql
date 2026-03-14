-- 574 - Winning Candidate

SELECT
    name
FROM
    Candidate C
    JOIN Vote ON C.id = candidateid
GROUP BY
    candidateid
ORDER BY
    COUNT(*) DESC
LIMIT
    1;
