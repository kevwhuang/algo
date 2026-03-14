-- 2989 - Class Performance

WITH CTE AS (
    SELECT
        assignment1 + assignment2 + assignment3 AS total
    FROM
        Scores
)
SELECT
    MAX(total) - MIN(total) AS difference_in_score
FROM
    CTE;
