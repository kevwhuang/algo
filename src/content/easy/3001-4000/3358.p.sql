-- 3358 - Books With Null Ratings

SELECT
    book_id,
    title,
    author,
    published_year
FROM
    Books
WHERE
    rating IS NULL
ORDER BY
    book_id;
