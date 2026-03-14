-- 3642 - Find Books With Polarized Opinions

WITH CTE AS (
    SELECT
        book_id,
        MAX(session_rating) - MIN(session_rating) AS rating_spread,
        ROUND(
            (
                SUM(IF(session_rating <= 2, 1, 0)) + SUM(IF(session_rating >= 4, 1, 0))
            ) / COUNT(*),
            2
        ) AS polarization_score
    FROM
        Reading_Sessions
    GROUP BY
        book_id
    HAVING
        COUNT(*) >= 5
        AND SUM(IF(session_rating <= 2, 1, 0))
        AND SUM(IF(session_rating >= 4, 1, 0))
        AND polarization_score >= 0.6
)
SELECT
    *
FROM
    Books
    JOIN CTE USING(book_id)
ORDER BY
    polarization_score DESC,
    title DESC;
