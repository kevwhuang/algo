-- 3278 - Find Candidates for Data Scientist Position II

WITH CTE1 AS (
    SELECT
        *,
        COUNT(*) OVER (PARTITION BY project_id) AS total
    FROM
        Projects
),
CTE2 AS (
    SELECT
        project_id,
        candidate_id,
        100 + SUM(
            CASE
                WHEN proficiency > importance THEN 10
                WHEN proficiency < importance THEN -5
                ELSE 0
            END
        ) AS score,
        total
    FROM
        Candidates
        JOIN CTE1 USING(skill)
    GROUP BY
        project_id,
        candidate_id
    HAVING
        COUNT(*) = total
)
SELECT
    project_id,
    MIN(candidate_id) AS candidate_id,
    score
FROM
    CTE2
WHERE
    (project_id, score) IN (
        SELECT
            project_id,
            MAX(score)
        FROM
            CTE2
        GROUP BY
            project_id
    )
GROUP BY
    project_id
ORDER BY
    project_id;
