-- 3570 - Find Books With No Available Copies

SELECT
    book_id,
    title,
    author,
    genre,
    publication_year,
    total_copies AS current_borrowers
FROM
    Library_Books
    JOIN Borrowing_Records USING(book_id)
GROUP BY
    book_id
HAVING
    total_copies - SUM(IF(return_date, 0, 1)) = 0
ORDER BY
    current_borrowers DESC,
    title;
