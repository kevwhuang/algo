-- 1241 - Number of Comments Per Post

WITH CTE AS (
    SELECT
        DISTINCT sub_id AS post_id
    FROM
        Submissions
    WHERE
        parent_id IS NULL
)
SELECT
    post_id,
    COUNT(DISTINCT sub_id) AS number_of_comments
FROM
    CTE
    LEFT JOIN Submissions ON post_id = parent_id
GROUP BY
    post_id
ORDER BY
    post_id;
