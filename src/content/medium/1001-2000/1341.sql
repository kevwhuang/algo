-- 1341 - Movie Rating

(
    SELECT
        name AS results
    FROM
        MovieRating
        JOIN Users USING(user_id)
    GROUP BY
        results
    ORDER BY
        COUNT(*) DESC,
        results
    LIMIT
        1
)
UNION
ALL (
    SELECT
        title AS results
    FROM
        MovieRating
        JOIN Movies USING(movie_id)
    WHERE
        YEAR(created_at) = 2020
        AND MONTH(created_at) = 2
    GROUP BY
        results
    ORDER BY
        AVG(rating) DESC,
        results
    LIMIT
        1
);
