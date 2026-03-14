-- 1098 - Unpopular Books

SELECT
    book_id,
    name
FROM
    Books
WHERE
    available_from < '2019-05-23'
    AND book_id NOT IN (
        SELECT
            book_id
        FROM
            Books
            LEFT JOIN Orders USING(book_id)
        WHERE
            dispatch_date >= '2018-06-23'
        GROUP BY
            book_id
        HAVING
            SUM(quantity) >= 10
    );
