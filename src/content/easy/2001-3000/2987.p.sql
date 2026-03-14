-- 2987 - Find Expensive Cities

SELECT
    city
FROM
    Listings
GROUP BY
    city
HAVING
    AVG(price) > (
        SELECT
            AVG(price)
        FROM
            Listings
    )
ORDER BY
    city;
